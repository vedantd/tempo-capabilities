/**
 * Custom hook for copy-to-clipboard functionality
 * Provides consistent copy behavior with feedback state
 */

import { useState, useCallback } from 'react'

interface UseCopyToClipboardReturn {
  copied: boolean
  copy: (text: string) => Promise<boolean>
  reset: () => void
}

/**
 * Hook for copying text to clipboard with feedback state
 * @param resetDelay - Delay in milliseconds before resetting copied state (default: 2000)
 * @returns Object with copied state, copy function, and reset function
 */
export function useCopyToClipboard(resetDelay: number = 2000): UseCopyToClipboardReturn {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      
      if (resetDelay > 0) {
        setTimeout(() => {
          setCopied(false)
        }, resetDelay)
      }
      
      return true
    } catch (error) {
      console.error('Failed to copy text:', error)
      return false
    }
  }, [resetDelay])

  const reset = useCallback(() => {
    setCopied(false)
  }, [])

  return { copied, copy, reset }
}

