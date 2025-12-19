'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDemoMode } from '@/contexts/demo-context'
import { Button } from '@/components/ui/button'
import { FlaskConical, FlaskConicalOff } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function DemoToggleButton() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <DemoToggleButtonContent />
}

function DemoToggleButtonContent() {
  const { isDemoMode, toggleDemoMode } = useDemoMode()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="fixed top-4 right-4 z-50"
            animate={
              !isDemoMode
                ? {
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDemoMode}
              className="h-10 w-10 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background hover:border-border transition-all"
              aria-label={isDemoMode ? 'Disable demo features' : 'Enable demo features'}
              aria-pressed={isDemoMode}
            >
              {isDemoMode ? (
                <FlaskConical className="h-5 w-5 text-primary" />
              ) : (
                <FlaskConicalOff className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{isDemoMode ? 'Demo features enabled' : 'Click to enable demo features'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

