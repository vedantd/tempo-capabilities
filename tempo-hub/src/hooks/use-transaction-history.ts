'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useAccount } from 'wagmi'
import { createPublicClient, http, formatUnits, type Address, type Hex, type TransactionReceipt } from 'viem'
import { tempoChain } from '@/lib/wagmi'
import { TEMPO_RPC_URL, FEE_MANAGER } from '@/lib/constants'
import { tempoActions, Actions } from 'tempo.ts/viem'
import { TOKENS, TOKEN_INFO } from '@/lib/constants/tokens'
import { logError } from '@/lib/utils/error-logger'
import { processTransferEvent } from '@/lib/utils/transaction-processor'
import { MAX_TRANSACTION_HISTORY, TRANSACTION_POLLING_INTERVAL_MS } from '@/lib/constants/transactions'
import type { TempoTransaction, TransactionType } from '@/types/transactions'
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

export type { TempoTransaction, TransactionType }

const client = createPublicClient({
  chain: tempoChain,
  transport: http(TEMPO_RPC_URL),
}).extend(tempoActions())

export function useTransactionHistory() {
  const { address } = useAccount()
  const [transactions, setTransactions] = useState<TempoTransaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const seenTxIds = useRef<Set<string>>(new Set())
  const seenIdsKeyRef = useRef<string | null>(null)
  const lastBlockKeyRef = useRef<string | null>(null)

  const addTransaction = useCallback((tx: TempoTransaction) => {
    // Prevent duplicates - check both in-memory and sessionStorage
    if (seenTxIds.current.has(tx.id) || (seenIdsKeyRef.current && hasInSessionStorageSet(seenIdsKeyRef.current, tx.id))) {
      return
    }
    seenTxIds.current.add(tx.id)
    
    // Persist to sessionStorage
    if (seenIdsKeyRef.current) {
      addToSessionStorageSet(seenIdsKeyRef.current, tx.id)
      // Limit set size to prevent storage bloat (keep last 1000)
      limitSessionStorageSetSize(seenIdsKeyRef.current, 1000)
    }
    
    // Prepend new transaction (most recent first)
    setTransactions((prev) => {
      // Check if already exists
      if (prev.some((t) => t.id === tx.id)) {
        return prev
      }
      return [tx, ...prev].slice(0, MAX_TRANSACTION_HISTORY)
    })
  }, [])

  // Process transfer event using utility function
  const handleProcessTransferEvent = useCallback(async (
    receipt: TransactionReceipt,
    tokenAddress: Address,
    tokenSymbol: string,
    userAddress: Address
  ) => {
    const tx = await processTransferEvent(
      receipt,
      tokenAddress,
      tokenSymbol,
      userAddress,
      seenTxIds.current,
      client
    )
    
    if (tx) {
      addTransaction(tx)
    }
  }, [addTransaction])

  useEffect(() => {
    // Reset state when address changes
    if (!address) {
      // Clear address-scoped data when disconnected
      if (seenIdsKeyRef.current) {
        clearAddressScopedData(address)
      }
      seenTxIds.current.clear()
      seenIdsKeyRef.current = null
      lastBlockKeyRef.current = null
      // Use cleanup to reset transactions
      return () => {
        setTransactions([])
      }
    }

    // Initialize sessionStorage keys for this address
    const normalizedAddress = address.toLowerCase()
    seenIdsKeyRef.current = STORAGE_KEYS.transactions.seenIds(normalizedAddress, 'history')
    lastBlockKeyRef.current = STORAGE_KEYS.transactions.lastBlock(normalizedAddress, 'history')

    // Load seenTxIds from sessionStorage
    const storedSeenIds = getSessionStorageSet(seenIdsKeyRef.current)
    seenTxIds.current = storedSeenIds

    // Load lastBlockNumber from sessionStorage
    const storedLastBlock = getSessionStorage<string>(lastBlockKeyRef.current)
    let lastBlockNumber: bigint | null = null
    if (storedLastBlock) {
      try {
        lastBlockNumber = BigInt(storedLastBlock)
      } catch {
        lastBlockNumber = null
      }
    }

    let isActive = true
    let pollingInterval: NodeJS.Timeout | null = null

    // Manual polling function using getLogs directly (no filters)
    const pollTransactions = async () => {
      if (!isActive || !address) return

      try {
        // Get current block number
        const currentBlock = await client.getBlockNumber()
        
        // Determine fromBlock - start from last processed block or 1000 blocks ago
        const fromBlock = lastBlockNumber 
          ? lastBlockNumber + BigInt(1)
          : currentBlock > BigInt(1000)
            ? currentBlock - BigInt(1000)
            : BigInt(0)

        if (fromBlock > currentBlock) {
          // No new blocks yet
          return
        }

        const tokenAddresses = Object.values(TOKENS)
        
        for (const tokenAddress of tokenAddresses) {
          if (!isActive) break

          try {
            // Get token metadata
            const metadata = await client.token.getMetadata({ 
              token: tokenAddress as Address 
            })

            // Fetch Transfer logs using getLogs directly (no filters)
            // This uses eth_getLogs which Tempo supports
            const transferLogs = await client.getLogs({
              address: tokenAddress as Address,
              event: {
                type: 'event',
                name: 'Transfer',
                inputs: [
                  { name: 'from', type: 'address', indexed: true },
                  { name: 'to', type: 'address', indexed: true },
                  { name: 'value', type: 'uint256', indexed: false },
                ],
              },
              args: {
                from: address as Address,
              },
              fromBlock,
              toBlock: currentBlock,
            }).catch(() => [])

            const receivedLogs = await client.getLogs({
              address: tokenAddress as Address,
              event: {
                type: 'event',
                name: 'Transfer',
                inputs: [
                  { name: 'from', type: 'address', indexed: true },
                  { name: 'to', type: 'address', indexed: true },
                  { name: 'value', type: 'uint256', indexed: false },
                ],
              },
              args: {
                to: address as Address,
              },
              fromBlock,
              toBlock: currentBlock,
            }).catch(() => [])

            // Fetch TransferWithMemo logs
            const sentMemoLogs = await client.getLogs({
              address: tokenAddress as Address,
              event: {
                type: 'event',
                name: 'TransferWithMemo',
                inputs: [
                  { name: 'from', type: 'address', indexed: true },
                  { name: 'to', type: 'address', indexed: true },
                  { name: 'value', type: 'uint256', indexed: false },
                  { name: 'memo', type: 'bytes32', indexed: false },
                ],
              },
              args: {
                from: address as Address,
              },
              fromBlock,
              toBlock: currentBlock,
            }).catch(() => [])

            const receivedMemoLogs = await client.getLogs({
              address: tokenAddress as Address,
              event: {
                type: 'event',
                name: 'TransferWithMemo',
                inputs: [
                  { name: 'from', type: 'address', indexed: true },
                  { name: 'to', type: 'address', indexed: true },
                  { name: 'value', type: 'uint256', indexed: false },
                  { name: 'memo', type: 'bytes32', indexed: false },
                ],
              },
              args: {
                to: address as Address,
              },
              fromBlock,
              toBlock: currentBlock,
            }).catch(() => [])

            // Process all logs - group by transaction hash to avoid duplicate receipt fetches
            const allLogs = [...transferLogs, ...receivedLogs, ...sentMemoLogs, ...receivedMemoLogs]
            const txHashes = new Set<string>()
            
            // Collect unique transaction hashes
            for (const log of allLogs) {
              txHashes.add(log.transactionHash)
            }
            
            // Process each transaction by fetching receipt and using SDK's extractEvent
            for (const txHash of txHashes) {
              if (!isActive) break

              try {
                // Get transaction receipt
                const receipt = await client.getTransactionReceipt({ 
                  hash: txHash as Hex 
                }) as TransactionReceipt

                // Process using utility function
                await handleProcessTransferEvent(
                  receipt,
                  tokenAddress as Address,
                  metadata.symbol,
                  address as Address
                )
              } catch (err) {
                logError(err, { 
                  hook: 'useTransactionHistory', 
                  action: 'processTransaction',
                  metadata: { txHash }
                })
              }
            }
          } catch (err) {
            logError(err, { 
              hook: 'useTransactionHistory', 
              action: 'fetchLogs',
              metadata: { tokenAddress }
            })
          }
        }

        // Update last processed block
        lastBlockNumber = currentBlock
        // Persist to sessionStorage
        if (lastBlockKeyRef.current) {
          setSessionStorage(lastBlockKeyRef.current, currentBlock.toString())
        }
      } catch (err) {
        logError(err, { hook: 'useTransactionHistory', action: 'pollTransactions' })
        if (isActive) {
          setError(err instanceof Error ? err : new Error('Failed to poll transactions'))
        }
      }
    }

    // Initial load
    const initialLoad = async () => {
      setIsLoading(true)
      await pollTransactions()
      setIsLoading(false)
    }

    initialLoad()

        // Set up polling interval
        pollingInterval = setInterval(() => {
          pollTransactions()
        }, TRANSACTION_POLLING_INTERVAL_MS)

    return () => {
      isActive = false
      if (pollingInterval) {
        clearInterval(pollingInterval)
      }
    }
  }, [address, handleProcessTransferEvent])

  return {
    transactions,
    isLoading,
    error,
    addTransaction, // For optimistic updates
  }
}

