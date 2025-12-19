'use client'

import { useTokenBalances } from '@/hooks/use-token-balances'
import { TokenCard } from './token-card'
import { SkeletonCard } from '@/components/ui/skeleton'
import { AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

export function TokenList() {
  const { data: tokens, isLoading, error } = useTokenBalances()
  
  if (isLoading) {
    return (
      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {[...Array(4)].map((_, i) => (
          <motion.div key={i} variants={staggerItem}>
            <SkeletonCard className="h-32" />
          </motion.div>
        ))}
      </motion.div>
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
    <motion.div
      className="grid gap-4 sm:grid-cols-2"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {tokens.map((token, index) => (
        <motion.div key={token.address} variants={staggerItem}>
          <TokenCard token={token} />
        </motion.div>
      ))}
    </motion.div>
  )
}

