/**
 * Transaction-related type definitions
 */

export type TransactionType = 'sent' | 'received'

export interface TempoTransaction {
  id: string
  hash: string
  type: TransactionType
  token: string
  tokenSymbol: string
  amount: bigint
  formattedAmount: string
  from: string
  to: string
  memo?: string
  timestamp: number // Client-side timestamp for initial display
  blockNumber: bigint
  blockTimestamp?: bigint // Actual block timestamp

  // Tempo-specific fields
  feeToken?: string
  feeTokenSymbol?: string
  sponsored?: boolean
  batchCalls?: number
  transactionType?: 'tempo' | 'legacy'
  nonceKey?: bigint
  gasUsed?: bigint
  gasPrice?: bigint
  finalityTime?: number // milliseconds
}

export interface IncomingTransaction {
  id: string
  token: string
  tokenSymbol: string
  amount: bigint
  formattedAmount: string
  from: string
  to: string
  memo?: string
  timestamp: number
  blockNumber?: bigint
}

