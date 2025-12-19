'use client'

import { useTokenBalances } from '@/hooks/use-token-balances'
import { TokenCard } from './token-card'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle } from 'lucide-react'

export function TokenList() {
  const { data: tokens, isLoading, error } = useTokenBalances()
  
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-xl">
        <AlertCircle className="h-5 w-5 text-destructive" />
        <p className="text-destructive">Failed to load balances</p>
      </div>
    )
  }
  
  if (!tokens || tokens.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No tokens found</p>
      </div>
    )
  }
  
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {tokens.map((token) => (
        <TokenCard key={token.address} token={token} />
      ))}
    </div>
  )
}

