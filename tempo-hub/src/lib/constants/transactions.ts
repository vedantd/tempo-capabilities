/**
 * Transaction-related constants
 */

// TIP-20 token standard uses 6 decimals
export const TIP_20_DECIMALS = 6

// Transaction history limits
export const MAX_TRANSACTION_HISTORY = 200
export const MAX_INCOMING_TRANSACTIONS = 50

// Polling intervals (in milliseconds)
// Increased to reduce rate limiting issues
export const POLLING_INTERVAL_MS = 10000 // 10 seconds
export const TRANSACTION_POLLING_INTERVAL_MS = 10000 // 10 seconds

// Toast cooldown to prevent duplicate notifications
export const TOAST_COOLDOWN_MS = 5000

// Quick amount options for send form
export const QUICK_AMOUNTS = [10, 50, 100, 500] as const

// Transaction finality time estimate (Tempo has ~0.5s finality)
export const ESTIMATED_FINALITY_TIME_MS = 500

