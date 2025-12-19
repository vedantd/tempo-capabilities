/**
 * Transaction processing utilities
 * Processes transfer events from transaction receipts
 */

import type { Address, Hex, TransactionReceipt } from 'viem'
import { formatUnits } from 'viem'
import { Actions } from 'tempo.ts/viem'
import { FEE_MANAGER } from '@/lib/constants'
import { TOKEN_INFO } from '@/lib/constants/tokens'
import { decodeMemo } from './memo'
import { parseTempoTransactionDetails } from './transaction-parser'
import { TIP_20_DECIMALS } from '@/lib/constants/transactions'
import type { TempoTransaction, TransactionType } from '@/types/transactions'
import { logError } from './error-logger'

/**
 * Processes a transfer event from a transaction receipt
 * @param receipt - Transaction receipt
 * @param tokenAddress - Token contract address
 * @param tokenSymbol - Token symbol
 * @param userAddress - User's address
 * @param seenTxIds - Set of already processed transaction IDs
 * @param client - Viem public client with Tempo actions
 * @returns Processed transaction or null if invalid/duplicate
 */
export async function processTransferEvent(
  receipt: TransactionReceipt,
  tokenAddress: Address,
  tokenSymbol: string,
  userAddress: Address,
  seenTxIds: Set<string>,
  client: any
): Promise<TempoTransaction | null> {
  try {
    // Filter logs to only those from the token contract
    const tokenLogs = receipt.logs.filter(
      (log) => log.address.toLowerCase() === tokenAddress.toLowerCase()
    )

    if (tokenLogs.length === 0) {
      return null // No logs from this token contract
    }

    // Use SDK's extractEvent to properly decode Transfer events
    // This works for both Transfer and TransferWithMemo since they have the same structure
    try {
      const transferEvent = Actions.token.transfer.extractEvent(tokenLogs)
      
      if (!transferEvent || !transferEvent.args) {
        return null // No transfer event found
      }

      const { from, to, amount } = transferEvent.args

      // Filter out fee manager transfers
      if (to.toLowerCase() === FEE_MANAGER.toLowerCase() || 
          from.toLowerCase() === FEE_MANAGER.toLowerCase()) {
        return null
      }

      const txId = `${receipt.transactionHash}-${tokenLogs[0].logIndex || 0}`
      
      // Skip if already processed
      if (seenTxIds.has(txId)) {
        return null
      }

      // Determine transaction type
      const type: TransactionType = 
        from.toLowerCase() === userAddress.toLowerCase() ? 'sent' : 'received'

      // Check for TransferWithMemo event - TransferWithMemo has memo indexed in topics[3]
      let memo: string | undefined
      for (const log of tokenLogs) {
        // TransferWithMemo has 4 topics: [eventSig, from, to, memo]
        // Transfer has 3 topics: [eventSig, from, to]
        if (log.topics.length === 4) {
          // This might be a TransferWithMemo event - memo is in topics[3]
          try {
            memo = decodeMemo(log.topics[3] as Hex)
            if (memo) break
          } catch {
            // Not a valid memo, continue
          }
        }
      }
      
      // Parse Tempo-specific details
      const tempoDetails = await parseTempoTransactionDetails(receipt.transactionHash, receipt)
      
      // Try to get block timestamp
      let blockTimestamp: bigint | undefined
      if (receipt.blockNumber) {
        try {
          const block = await client.getBlock({ blockNumber: receipt.blockNumber })
          if (block.timestamp) {
            blockTimestamp = block.timestamp
          }
        } catch {
          // Ignore block fetch errors
        }
      }

      // Get token metadata
      const tokenInfo = TOKEN_INFO[tokenAddress.toLowerCase() as keyof typeof TOKEN_INFO]
      const symbol = tokenInfo?.symbol || tokenSymbol

      const tx: TempoTransaction = {
        id: txId,
        hash: receipt.transactionHash,
        type,
        token: tokenAddress,
        tokenSymbol: symbol,
        amount,
        formattedAmount: formatUnits(amount, TIP_20_DECIMALS),
        from,
        to,
        memo,
        timestamp: Date.now(),
        blockNumber: receipt.blockNumber,
        blockTimestamp,
        ...tempoDetails,
      }

      return tx
    } catch {
      // extractEvent might fail if it's not a Transfer event, that's fine
      return null
    }
  } catch (err) {
    logError(err, { 
      hook: 'processTransferEvent', 
      action: 'process',
      metadata: { tokenAddress, txHash: receipt.transactionHash }
    })
    return null
  }
}

