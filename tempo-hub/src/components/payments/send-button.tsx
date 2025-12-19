'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { buttonPressVariants, scaleTransition, transitions } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface SendButtonProps {
  onClick: () => void
  disabled?: boolean
  isLoading?: boolean
  isSuccess?: boolean
  amount?: string
  tokenSymbol?: string
  className?: string
}

export function SendButton({
  onClick,
  disabled = false,
  isLoading = false,
  isSuccess = false,
  amount,
  tokenSymbol,
  className,
}: SendButtonProps) {
  return (
    <motion.div
      variants={buttonPressVariants}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'tap'}
      transition={scaleTransition}
      className={cn('w-full', className)}
    >
      <Button
        type="button"
        onClick={onClick}
        disabled={disabled || isLoading}
        size="lg"
        className={cn(
          'w-full h-16 text-lg font-semibold shadow-lg',
          'bg-primary hover:bg-primary/90 text-primary-foreground',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transition-all duration-200'
        )}
      >
        {isSuccess ? (
          <motion.div
            className="flex items-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={transitions.springBounce}
          >
            <CheckCircle2 className="h-5 w-5" />
            <span>Sent!</span>
          </motion.div>
        ) : isLoading ? (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending...</span>
          </motion.div>
        ) : (
          <div className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            <span>
              Send {amount ? `${amount} ${tokenSymbol || ''}` : 'Payment'}
            </span>
          </div>
        )}
      </Button>
    </motion.div>
  )
}

