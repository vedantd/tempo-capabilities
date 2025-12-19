'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useAccount } from 'wagmi'
import { createPublicClient, http, formatUnits, type Address, type Hex, decodeEventLog } from 'viem'
import { tempoChain } from '@/lib/wagmi'
import { TEMPO_RPC_URL } from '@/lib/constants'
import { tempoActions, Actions } from 'tempo.ts/viem'
import { TOKENS, TOKEN_INFO } from '@/lib/constants/tokens'
import { decodeMemo } from '@/lib/utils/memo'
import { logError } from '@/lib/utils/error-logger'
import { MAX_INCOMING_TRANSACTIONS, POLLING_INTERVAL_MS } from '@/lib/constants/transactions'
import type { IncomingTransaction } from '@/types/transactions'
import {
  STORAGE_KEYS,
  getSessionStorageSet,
  setSessionStorageSet,
  addToSessionStorageSet,
  hasInSessionStorageSet,
  getSessionStorage,
  setSessionStorage,
  clearAddressScopedData,
  limitSessionStorageSetSize,
} from '@/lib/utils/session-storage'

export type { IncomingTransaction }

const client = createPublicClient({
  chain: tempoChain,
  transport: http(TEMPO_RPC_URL),
}).extend(tempoActions())

export function useIncomingTransactions() {
  const { address } = useAccount()
  const [transactions, setTransactions] = useState<IncomingTransaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const seenTxIds = useRef<Set<string>>(new Set())
  const lastBlockNumberRef = useRef<bigint | null>(null)
  const seenIdsKeyRef = useRef<string | null>(null)
  const lastBlockKeyRef = useRef<string | null>(null)

  const addTransaction = useCallback((tx: IncomingTransaction, showToast = false) => {
    // Prevent duplicates
    if (seenTxIds.current.has(tx.id)) {
      return
    }
    seenTxIds.current.add(tx.id)
    
    // Persist to sessionStorage
    if (seenIdsKeyRef.current) {
      addToSessionStorageSet(seenIdsKeyRef.current, tx.id)
      // Limit set size to prevent storage bloat (keep last 1000)
      limitSessionStorageSetSize(seenIdsKeyRef.current, 1000)
    }
    
    // Update 'to' address if it's a simulation
    const finalTx: IncomingTransaction = {
      ...tx,
      to: address || tx.to,
    }
    
    setTransactions((prev) => [finalTx, ...prev].slice(0, MAX_INCOMING_TRANSACTIONS))
    
    // Show toast notification if requested
    if (showToast && typeof window !== 'undefined') {
      // Toast notification will be handled by the component using this hook
    }
  }, [address])

  useEffect(() => {
    if (!address) {
      // Clear address-scoped data when disconnected
      if (seenIdsKeyRef.current) {
        clearAddressScopedData(address)
      }
      seenTxIds.current.clear()
      lastBlockNumberRef.current = null
      seenIdsKeyRef.current = null
      lastBlockKeyRef.current = null
      return () => {
        // Cleanup: reset state when address is disconnected
        setTransactions([])
        setIsLoading(false)
        setError(null)
      }
    }

    // Initialize sessionStorage keys for this address
    const normalizedAddress = address.toLowerCase()
    seenIdsKeyRef.current = STORAGE_KEYS.transactions.seenIds(normalizedAddress, 'incoming')
    lastBlockKeyRef.current = STORAGE_KEYS.transactions.lastBlock(normalizedAddress, 'incoming')

    // Load seenTxIds from sessionStorage
    const storedSeenIds = getSessionStorageSet(seenIdsKeyRef.current)
    seenTxIds.current = storedSeenIds

    // Load lastBlockNumber from sessionStorage
    const storedLastBlock = getSessionStorage<string>(lastBlockKeyRef.current)
    if (storedLastBlock) {
      try {
        lastBlockNumberRef.current = BigInt(storedLastBlock)
      } catch {
        lastBlockNumberRef.current = null
      }
    }

    let isActive = true
    let pollingInterval: NodeJS.Timeout | null = null

    // Manual polling function using getLogs directly (no filters - avoids filter expiration)
    const pollIncomingTransactions = async () => {
      if (!isActive || !address) return

      try {
        // Get current block number
        const currentBlock = await client.getBlockNumber()
        
        // Determine fromBlock - start from last processed block or 100 blocks ago (shorter window for incoming)
        const fromBlock = lastBlockNumberRef.current 
          ? lastBlockNumberRef.current + BigInt(1)
          : currentBlock > BigInt(100)
            ? currentBlock - BigInt(100)
            : BigInt(0)

        if (fromBlock > currentBlock) {
          // No new blocks yet
          return
        }

        const tokenAddresses = Object.values(TOKENS)
        
        for (const tokenAddress of tokenAddresses) {
          if (!isActive) break

          try {
            const tokenInfo = TOKEN_INFO[tokenAddress as keyof typeof TOKEN_INFO]
            if (!tokenInfo) {
              continue
            }

            // Use raw topic-based filtering to avoid filter creation
            // Transfer event signature: keccak256("Transfer(address,address,uint256)")
            // Transfer topic[0] = 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
            // TransferWithMemo has the same signature but 4 topics (memo in topics[3])
            const transferEventTopic = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' as Hex
            
            // Create topic filter for "to" address (topics[2] for Transfer events)
            // Pad address to 32 bytes for topic matching
            const toTopic = `0x${address.slice(2).padStart(64, '0')}` as Hex

            // Fetch all Transfer logs (both Transfer and TransferWithMemo) using raw topics
            // This avoids viem creating filters internally
            const allLogs = await client.getLogs({
              address: tokenAddress as Address,
              topics: [
                transferEventTopic, // Event signature
                null, // from (any)
                toTopic, // to (filtered to our address)
              ],
              fromBlock,
              toBlock: currentBlock,
            }).catch(() => [])

            // Process Transfer logs - use SDK's extractEvent for proper decoding
            const processedTxHashes = new Set<string>()
            
            for (const log of allLogs) {
              if (!isActive) break
              
              const txId = `${log.transactionHash}-${log.logIndex}`
              // Check both in-memory and sessionStorage
              if (seenTxIds.current.has(txId) || (seenIdsKeyRef.current && hasInSessionStorageSet(seenIdsKeyRef.current, txId))) {
                continue
              }
              
              // Skip if we've already processed this transaction hash
              if (processedTxHashes.has(log.transactionHash)) continue
              processedTxHashes.add(log.transactionHash)

              try {
                // Try to extract Transfer event using SDK
                const tokenLogs = [log]
                const transferEvent = Actions.token.transfer.extractEvent(tokenLogs)
                
                if (transferEvent && transferEvent.args) {
                  const { from, to, amount } = transferEvent.args
                  
                  // Only process incoming transactions (to = address)
                  if (to.toLowerCase() !== address.toLowerCase()) {
                    continue
                  }

                  // Check for memo in TransferWithMemo event (4 topics vs 3)
                  let memo: string | undefined
                  if (log.topics.length === 4) {
                    // TransferWithMemo has memo indexed in topics[3]
                    try {
                      memo = decodeMemo(log.topics[3] as Hex)
                    } catch {
                      // Not a valid memo, ignore
                    }
                  }

                  const tx: IncomingTransaction = {
                    id: txId,
                    token: tokenAddress,
                    tokenSymbol: tokenInfo.symbol,
                    amount,
                    formattedAmount: formatUnits(amount, 6), // TIP-20 uses 6 decimals
                    from,
                    to,
                    memo,
                    timestamp: Date.now(),
                    blockNumber: log.blockNumber,
                  }
                  addTransaction(tx, true) // Show toast for real transactions
                }
              } catch (err) {
                // If extractEvent fails, try manual decoding as fallback
                try {
                  if (log.topics.length >= 3) {
                    // Topics are 32-byte hex strings (66 chars with 0x), addresses are in the last 20 bytes (40 hex chars)
                    // Extract addresses: slice from position 26 (skip 0x and 12 bytes of padding)
                    const fromHex = log.topics[1] as string
                    const toHex = log.topics[2] as string
                    const fromAddress = `0x${fromHex.slice(-40)}` as Address
                    const toAddress = `0x${toHex.slice(-40)}` as Address
                    
                    // Only process incoming transactions
                    if (toAddress.toLowerCase() !== address.toLowerCase()) {
                      continue
                    }

                    // Decode value from data (data is hex string, convert to bigint)
                    const value = BigInt(log.data)

                    // Check for memo in TransferWithMemo
                    let memo: string | undefined
                    if (log.topics.length === 4) {
                      try {
                        memo = decodeMemo(log.topics[3] as Hex)
                      } catch {
                        // Not a valid memo, ignore
                      }
                    }

                    const tx: IncomingTransaction = {
                      id: txId,
                      token: tokenAddress,
                      tokenSymbol: tokenInfo.symbol,
                      amount: value,
                      formattedAmount: formatUnits(value, 6),
                      from: fromAddress,
                      to: toAddress,
                      memo,
                      timestamp: Date.now(),
                      blockNumber: log.blockNumber,
                    }
                    addTransaction(tx, true)
                  }
                } catch (fallbackErr) {
                  logError(fallbackErr, {
                    hook: 'useIncomingTransactions',
                    action: 'decodeLog',
                    metadata: { txHash: log.transactionHash }
                  })
                }
              }
            }
          } catch (err: any) {
            // Handle rate limit errors gracefully
            const isRateLimit = err?.status === 429 || err?.message?.includes('429') || err?.message?.includes('rate limit') || err?.message?.includes('rate limited')
            if (isRateLimit) {
              logError(err, { 
                hook: 'useIncomingTransactions', 
                action: 'pollIncomingTransactions',
                metadata: { tokenAddress, rateLimited: true }
              })
              // Set a temporary rate limit error that clears after delay
              setError(new Error('Rate limit reached. Retrying...'))
              // Don't throw - continue with other tokens
              continue
            }
            
            logError(err, { 
              hook: 'useIncomingTransactions', 
              action: 'pollIncomingTransactions',
              metadata: { tokenAddress }
            })
            // Only set error for non-rate-limit errors
            if (!isRateLimit) {
              setError(err instanceof Error ? err : new Error('Failed to poll transactions'))
            }
          }
        }

        // Update last processed block
        lastBlockNumberRef.current = currentBlock
        // Persist to sessionStorage
        if (lastBlockKeyRef.current) {
          setSessionStorage(lastBlockKeyRef.current, currentBlock.toString())
        }
        setError(null) // Clear any previous errors on success
      } catch (err: any) {
        const isRateLimit = err?.status === 429 || err?.message?.includes('429') || err?.message?.includes('rate limit') || err?.message?.includes('rate limited')
        if (isRateLimit) {
          logError(err, { hook: 'useIncomingTransactions', action: 'pollIncomingTransactions', metadata: { rateLimited: true } })
          setError(new Error('Rate limit reached. Retrying...'))
        } else {
          logError(err, { hook: 'useIncomingTransactions', action: 'pollIncomingTransactions' })
          if (isActive) {
            setError(err instanceof Error ? err : new Error('Failed to poll transactions'))
          }
        }
      }
    }

    // Initial load
    const initialLoad = async () => {
      setIsLoading(true)
      await pollIncomingTransactions()
      setIsLoading(false)
    }

    initialLoad()

    // Set up polling interval
    pollingInterval = setInterval(() => {
      pollIncomingTransactions()
    }, POLLING_INTERVAL_MS)

    return () => {
      isActive = false
      if (pollingInterval) {
        clearInterval(pollingInterval)
      }
    }
  }, [address, addTransaction])

  return {
    transactions,
    isLoading,
    error,
    addTransaction, // For manual simulation
  }
}

