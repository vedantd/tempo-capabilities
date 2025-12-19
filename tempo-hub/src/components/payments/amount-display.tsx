'use client'

import { motion } from 'framer-motion'
import { DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AmountDisplayProps {
  value: string
  tokenSymbol?: string
  isFocused?: boolean
  className?: string
}

export function AmountDisplay({ 
  value, 
  tokenSymbol, 
  isFocused = false,
  className 
}: AmountDisplayProps) {
  // Format amount with currency
  const formattedValue = value 
    ? parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : '0.00'

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center justify-center py-8 px-6',
        className
      )}
      animate={{
        scale: isFocused ? 1.02 : 1,
      }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <DollarSign className="h-6 w-6 text-muted-foreground" />
        {tokenSymbol && (
          <span className="text-lg font-medium text-muted-foreground">
            {tokenSymbol}
          </span>
        )}
      </div>
      <motion.div
        className="text-6xl font-bold tracking-tight"
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        ${formattedValue}
      </motion.div>
    </motion.div>
  )
}

