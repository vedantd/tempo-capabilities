'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface DemoContextType {
  isDemoMode: boolean
  toggleDemoMode: () => void
}

const DemoContext = createContext<DemoContextType | undefined>(undefined)

const STORAGE_KEY = 'tempo-hub-demo-mode'

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored !== null) {
      setIsDemoMode(stored === 'true')
    }
  }, [])

  // Persist to localStorage when changed
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, String(isDemoMode))
    }
  }, [isDemoMode, mounted])

  const toggleDemoMode = () => {
    setIsDemoMode((prev) => !prev)
  }

  // Always provide context, even before mount (prevents errors)
  // Default to false during SSR/initial render
  return (
    <DemoContext.Provider value={{ isDemoMode: mounted ? isDemoMode : false, toggleDemoMode }}>
      {children}
    </DemoContext.Provider>
  )
}

export function useDemoMode() {
  const context = useContext(DemoContext)
  if (context === undefined) {
    throw new Error('useDemoMode must be used within a DemoProvider')
  }
  return context
}

