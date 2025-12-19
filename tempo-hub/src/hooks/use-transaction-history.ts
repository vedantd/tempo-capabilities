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
      // Reset state when disconnected
      seenTxIds.current.clear()
      seenIdsKeyRef.current = null
      lastBlockKeyRef.current = null
      setTransactions([])
      setIsLoading(false)
      setError(null)
      return
    }

    // MOCK MODE: Generate mock transactions instead of polling RPC
    // This prevents rate limiting issues
    const generateMockTransactions = () => {
      setIsLoading(true)
      
      // Simulate loading delay
      setTimeout(() => {
        const mockTransactions: TempoTransaction[] = []
        const tokenAddresses = Object.values(TOKENS)
        const now = Date.now()
        
        // Generate 25-30 mock transactions
        const numTransactions = 25 + Math.floor(Math.random() * 6)
        
        for (let i = 0; i < numTransactions; i++) {
          const tokenAddress = tokenAddresses[Math.floor(Math.random() * tokenAddresses.length)] as Address
          const tokenInfo = TOKEN_INFO[tokenAddress.toLowerCase() as keyof typeof TOKEN_INFO]
          const isSent = Math.random() > 0.5
          
          // Generate random amount between 1 and 1000
          const amount = BigInt(Math.floor(Math.random() * 999000000 + 1000000)) // 1-1000 with 6 decimals
          const formattedAmount = (Number(amount) / 1e6).toFixed(6)
          
          // Generate random addresses
          const from = isSent ? address : `0x${Array.from({ length: 40 }, () =>
            Math.floor(Math.random() * 16).toString(16)
          ).join('')}` as Address
          
          const to = isSent ? `0x${Array.from({ length: 40 }, () =>
            Math.floor(Math.random() * 16).toString(16)
          ).join('')}` as Address : address
          
          // Random memo (30% chance)
          const memos = [
            'Payment for services',
            'Thanks!',
            'Invoice #1234',
            'Refund',
            'Monthly subscription',
            'Coffee ☕',
            'Lunch money',
          ]
          const memo = Math.random() > 0.7 
            ? memos[Math.floor(Math.random() * memos.length)]
            : undefined
          
          // Generate timestamp (spread over last 30 days)
          const daysAgo = Math.random() * 30
          const timestamp = now - (daysAgo * 24 * 60 * 60 * 1000)
          const blockTimestamp = BigInt(Math.floor(timestamp / 1000))
          
          // Generate fake transaction hash
          const hash = `0x${Array.from({ length: 64 }, () =>
            Math.floor(Math.random() * 16).toString(16)
          ).join('')}` as Hex
          
          const tx: TempoTransaction = {
            id: `mock-${hash}-${i}`,
            hash,
            type: isSent ? 'sent' : 'received',
            token: tokenAddress,
            tokenSymbol: tokenInfo?.symbol || 'TOKEN',
            amount,
            formattedAmount,
            from,
            to,
            memo,
            timestamp,
            blockNumber: BigInt(1000000 + i),
            blockTimestamp,
          }
          
          mockTransactions.push(tx)
        }
        
        // Sort by timestamp (most recent first)
        mockTransactions.sort((a, b) => b.timestamp - a.timestamp)
        
        setTransactions(mockTransactions)
        setIsLoading(false)
      }, 500) // Simulate network delay
    }

    generateMockTransactions()
    
    // No polling interval - just load once
    return () => {
      // Cleanup if needed
    }
  }, [address])

  return {
    transactions,
    isLoading,
    error,
    addTransaction, // For optimistic updates
  }
}

