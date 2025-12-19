/**
 * Address formatting and validation utilities
 */

import { isAddress as viemIsAddress } from 'viem'

/**
 * Truncates an Ethereum address to show first N and last M characters
 * @param address - The full address
 * @param startChars - Number of characters to show at start (default: 6)
 * @param endChars - Number of characters to show at end (default: 4)
 * @returns Truncated address string (e.g., "0x1234...5678")
 */
export function truncateAddress(
  address: string,
  startChars: number = 6,
  endChars: number = 4
): string {
  if (!address || address.length < startChars + endChars) {
    return address
  }
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
}

/**
 * Validates if a string is a valid Ethereum address
 * @param address - The address string to validate
 * @returns True if valid, false otherwise
 */
export function isValidAddress(address: string): boolean {
  return viemIsAddress(address)
}

/**
 * Formats an address for display
 * @param address - The address to format
 * @param options - Formatting options
 * @returns Formatted address string
 */
export function formatAddress(
  address: string,
  options?: {
    truncate?: boolean
    startChars?: number
    endChars?: number
  }
): string {
  if (!address) return ''
  
  const { truncate: shouldTruncate = true, startChars = 6, endChars = 4 } = options || {}
  
  if (shouldTruncate) {
    return truncateAddress(address, startChars, endChars)
  }
  
  return address
}

