/**
 * Memo decoding utilities
 * Converts bytes32 hex strings to UTF-8 strings
 */

import type { Hex } from 'viem'

/**
 * Decodes a memo from bytes32 hex format to UTF-8 string
 * @param memoHex - The hex string (bytes32) containing the memo
 * @returns The decoded memo string, or undefined if invalid/empty
 */
export function decodeMemo(memoHex: Hex): string | undefined {
  try {
    // Remove 0x prefix
    const hex = memoHex.slice(2)
    // Convert to string, removing null bytes
    const decoded = Buffer.from(hex, 'hex')
      .toString('utf-8')
      .replace(/\0/g, '')
      .trim()
    
    return decoded.length > 0 ? decoded : undefined
  } catch {
    return undefined
  }
}

