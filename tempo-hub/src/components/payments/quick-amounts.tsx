'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { scaleVariants, scaleTransition } from '@/lib/motion'

interface QuickAmountsProps {
  amounts: number[]
  selectedAmount?: string
  onSelect: (amount: string) => void
  onCustom: () => void
}

export function QuickAmounts({ 
  amounts, 
  selectedAmount, 
  onSelect,
  onCustom 
}: QuickAmountsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-3">
        {amounts.map((amount) => {
          const amountStr = amount.toString()
          const isSelected = selectedAmount === amountStr
          
          return (
            <motion.div
              key={amount}
              variants={scaleVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              transition={scaleTransition}
            >
              <Button
                type="button"
                variant={isSelected ? 'default' : 'outline'}
                className={cn(
                  'w-full h-14 text-lg font-semibold',
                  isSelected && 'bg-primary text-primary-foreground'
                )}
                onClick={() => onSelect(amountStr)}
              >
                ${amount}
              </Button>
            </motion.div>
          )
        })}
      </div>
      
      <motion.div
        variants={scaleVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        transition={scaleTransition}
      >
        <Button
          type="button"
          variant="ghost"
          className="w-full h-12 text-sm text-muted-foreground hover:text-foreground"
          onClick={onCustom}
        >
          Custom Amount
        </Button>
      </motion.div>
    </div>
  )
}

