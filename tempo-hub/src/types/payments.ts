/**
 * Payment-related type definitions
 */

import type { TokenAddress } from '@/lib/constants/tokens'

export type TransactionStatus = 
  | 'idle' 
  | 'preparing' 
  | 'signing' 
  | 'sending' 
  | 'confirming' 
  | 'success' 
  | 'error'

export interface SendPaymentParams {
  token: TokenAddress
  to: `0x${string}`
  amount: string
  memo?: string
  feeToken?: TokenAddress
  sponsored?: boolean
}

