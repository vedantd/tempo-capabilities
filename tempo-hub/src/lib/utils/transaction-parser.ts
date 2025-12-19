/**
 * Transaction parsing utilities
 * Extracts Tempo-specific details from transaction receipts
 */

import type { TransactionReceipt } from 'viem'
import type { TempoTransaction } from '@/types/transactions'
import { logError } from './error-logger'

/**
 * Parses transaction receipt for Tempo-specific details
 * @param txHash - Transaction hash
 * @param receipt - Transaction receipt
 * @returns Partial TempoTransaction with parsed details
 */
export async function parseTempoTransactionDetails(
  txHash: string,
  receipt: TransactionReceipt
): Promise<Partial<TempoTransaction>> {
  const details: Partial<TempoTransaction> = {}
  
  try {
    // Check if it's a Tempo transaction (type 0x76)
    // This would require checking the raw transaction, which we'll do via receipt
    // For now, we'll infer from transaction structure
    
    // Check for fee payer signature (sponsorship indicator)
    // This would be in the transaction itself, not the receipt
    // We'll need to fetch the transaction to check
    
    // Count batch calls - if multiple logs from different contracts, likely batch
    const uniqueContracts = new Set(receipt.logs.map((log) => log.address.toLowerCase()))
    if (uniqueContracts.size > 1) {
      details.batchCalls = uniqueContracts.size
    }
    
    // Extract gas info
    if (receipt.gasUsed) {
      details.gasUsed = BigInt(receipt.gasUsed)
    }
    
    // Calculate finality time (block timestamp - transaction timestamp)
    // Tempo has ~0.5s finality, but we'll use block timestamp as approximation
    if (receipt.blockNumber) {
      // We'll fetch block timestamp separately if needed
    }
  } catch (error) {
    logError(error, { 
      hook: 'parseTempoTransactionDetails', 
      action: 'parse',
      metadata: { txHash }
    })
  }
  
  return details
}

