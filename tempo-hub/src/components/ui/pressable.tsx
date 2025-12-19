'use client'

import { motion } from 'framer-motion'
import { scaleVariants, scaleTransition } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { type ReactNode, type ButtonHTMLAttributes } from 'react'

interface PressableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: 'default' | 'ghost' | 'outline'
}

export function Pressable({
  children,
  className,
  variant = 'default',
  ...props
}: PressableProps) {
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'hover:bg-muted',
    outline: 'border border-border hover:bg-muted',
  }

  // Extract drag-related props that conflict with motion
  const { onDrag, onDragStart, onDragEnd, ...buttonProps } = props as any

  return (
    <motion.button
      variants={scaleVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={scaleTransition}
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variantStyles[variant],
        className
      )}
      {...buttonProps}
    >
      {children}
    </motion.button>
  )
}

