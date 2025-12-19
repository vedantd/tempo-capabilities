'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { cardHoverVariants, cardTransition } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function AnimatedCard({ 
  children, 
  className,
  hover = true,
  onClick 
}: AnimatedCardProps) {
  const Component = hover ? motion.div : 'div'
  const props = hover
    ? {
        variants: cardHoverVariants,
        initial: 'rest',
        whileHover: 'hover',
        transition: cardTransition,
      }
    : {}

  return (
    <Component {...props}>
      <Card
        className={cn('transition-all duration-200', onClick && 'cursor-pointer', className)}
        onClick={onClick}
      >
        {children}
      </Card>
    </Component>
  )
}

// Re-export card sub-components for convenience
AnimatedCard.Header = CardHeader
AnimatedCard.Title = CardTitle
AnimatedCard.Description = CardDescription
AnimatedCard.Content = CardContent
AnimatedCard.Footer = CardFooter

