'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useAccount } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { tempoChain } from '@/lib/wagmi'
import { TEMPO_RPC_URL } from '@/lib/constants'
import { tempoActions } from 'tempo.ts/viem'
import { TOKENS, TOKEN_INFO } from '@/lib/wagmi'
import { formatUnits } from 'viem'

export interface IncomingTransaction {
  id: string
  token: string
  tokenSymbol: string
  amount: bigint
  formattedAmount: string
  from: string
  to: string
  memo?: string
  timestamp: number
  blockNumber?: bigint
}

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

  const addTransaction = useCallback((tx: IncomingTransaction, showToast = false) => {
    // Prevent duplicates
    if (seenTxIds.current.has(tx.id)) {
      return
    }
    seenTxIds.current.add(tx.id)
    
    // Update 'to' address if it's a simulation
    const finalTx: IncomingTransaction = {
      ...tx,
      to: address || tx.to,
    }
    
    setTransactions((prev) => [finalTx, ...prev].slice(0, 50)) // Keep last 50
    
    // Show toast notification if requested
    if (showToast && typeof window !== 'undefined') {
      // Import dynamically to avoid SSR issues
      import('@/contexts/toast-context').then(({ useToast }) => {
        // This will be called from component that has access to context
      })
    }
  }, [address])

  useEffect(() => {
    if (!address) {
      setTransactions([])
      return
    }

    setIsLoading(true)
    setError(null)

    const unwatchers: (() => void)[] = []

    // Watch transfers for each token
    const tokenAddresses = Object.values(TOKENS)
    
    tokenAddresses.forEach(async (tokenAddress) => {
      try {
        // Get token metadata for symbol
        const metadata = await client.token.getMetadata({ 
          token: tokenAddress as `0x${string}` 
        })

        const unwatch = client.token.watchTransfer({
          token: tokenAddress as `0x${string}`,
          args: { to: address },
          onTransfer: async (args, log) => {
            const txId = `${log.transactionHash}-${log.logIndex}`
            const tx: IncomingTransaction = {
              id: txId,
              token: tokenAddress,
              tokenSymbol: metadata.symbol,
              amount: args.amount,
              formattedAmount: formatUnits(args.amount, metadata.decimals),
              from: args.from,
              to: args.to,
              timestamp: Date.now(),
              blockNumber: log.blockNumber,
            }
            addTransaction(tx, true) // Show toast for real transactions
          },
          poll: true,
          pollingInterval: 2000,
          onError: (err) => {
            console.error('Transaction watcher error:', err)
            setError(err)
          },
        })

        unwatchers.push(unwatch)
      } catch (err) {
        console.error(`Error setting up watcher for ${tokenAddress}:`, err)
        setError(err instanceof Error ? err : new Error('Failed to watch transactions'))
      }
    })

    setIsLoading(false)

    return () => {
      unwatchers.forEach((unwatch) => unwatch())
    }
  }, [address, addTransaction])

  return {
    transactions,
    isLoading,
    error,
    addTransaction, // For manual simulation
  }
}

