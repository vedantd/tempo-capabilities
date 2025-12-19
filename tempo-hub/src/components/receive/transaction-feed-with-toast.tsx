'use client'

import { useEffect, useRef } from 'react'
import { useIncomingTransactions } from '@/hooks/use-incoming-transactions'
import { useToast } from '@/contexts/toast-context'
import { TransactionFeed } from './transaction-feed'
import { TOKEN_INFO } from '@/lib/wagmi'

export function TransactionFeedWithToast() {
  const { transactions } = useIncomingTransactions()
  const { toast } = useToast()
  const lastTxIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (transactions.length > 0) {
      const latestTx = transactions[0]
      // Only show toast for new transactions (not on initial load)
      if (lastTxIdRef.current !== null && latestTx.id !== lastTxIdRef.current) {
        lastTxIdRef.current = latestTx.id
        const tokenInfo = TOKEN_INFO[latestTx.token as keyof typeof TOKEN_INFO]
        
        toast({
          title: `Received ${parseFloat(latestTx.formattedAmount).toFixed(2)} ${tokenInfo?.symbol || latestTx.tokenSymbol}`,
          description: latestTx.memo || `From ${latestTx.from.slice(0, 6)}...${latestTx.from.slice(-4)}`,
          variant: 'success',
          duration: 5000,
        })
      } else if (lastTxIdRef.current === null) {
        // Initialize with first transaction (don't show toast)
        lastTxIdRef.current = latestTx.id
      }
    }
  }, [transactions, toast])

  return <TransactionFeed />
}

