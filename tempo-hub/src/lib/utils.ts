import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format token balance with appropriate precision
 * Follows best practices:
 * - Very small amounts (< 0.01): up to 6 decimal places
 * - Small amounts (0.01 - 1): 2-4 decimal places  
 * - Regular amounts (>= 1): 2 decimal places
 * - Large amounts (>= 1000): compact notation (K, M)
 * - Removes trailing zeros
 */
export function formatTokenBalance(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value
  
  if (isNaN(num) || num === 0) {
    return '0'
  }

  // Very small amounts (< 0.01)
  if (num < 0.01) {
    // Find first significant digit after decimal
    const str = num.toFixed(10)
    const match = str.match(/\.0*([1-9])/)
    if (match) {
      const firstSigDigitPos = str.indexOf(match[1])
      const decimals = firstSigDigitPos - str.indexOf('.')
      // Show up to 6 decimal places, but at least until first significant digit + 2
      const maxDecimals = Math.min(Math.max(decimals + 2, 2), 6)
      const formatted = num.toFixed(maxDecimals)
      return formatted.replace(/\.?0+$/, '')
    }
    return num.toFixed(6).replace(/\.?0+$/, '')
  }

  // Small amounts (0.01 - 1)
  if (num < 1) {
    const formatted = num.toFixed(4)
    return formatted.replace(/\.?0+$/, '')
  }

  // Large amounts (>= 1000) - use compact notation
  if (num >= 1000000) {
    const formatted = (num / 1000000).toFixed(2)
    return formatted.replace(/\.?0+$/, '') + 'M'
  }
  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(2)
    return formatted.replace(/\.?0+$/, '') + 'K'
  }

  // Regular amounts (>= 1 and < 1000) - 2 decimal places
  const formatted = num.toFixed(2)
  return formatted.replace(/\.?0+$/, '')
}

// Re-export utilities for convenience
export { decodeMemo } from './utils/memo'
export { logError, logWarning } from './utils/error-logger'
export { truncateAddress, isValidAddress, formatAddress } from './utils/address'
