'use client'

import { useState, useCallback, useMemo } from 'react'
import { useAccount, useConnectorClient, useWaitForTransactionReceipt } from 'wagmi'
import { parseUnits, stringToHex } from 'viem'
import { type TokenAddress } from '@/lib/constants/tokens'
import { createTempoWalletClient } from '@/lib/tempo-client'
import { logError } from '@/lib/utils/error-logger'
import { TIP_20_DECIMALS } from '@/lib/constants/transactions'
import type { TransactionStatus, SendPaymentParams } from '@/types/payments'

export type { TransactionStatus, SendPaymentParams }

export function useSendPayment() {
  const { address } = useAccount()
  const { data: connectorClient } = useConnectorClient()
  const [status, setStatus] = useState<TransactionStatus>('idle')
  const [error, setError] = useState<Error | null>(null)
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>()
  
  const { 
    isSuccess: isConfirmed,
    isError: isReceiptError
  } = useWaitForTransactionReceipt({
    hash: txHash,
  })
  
  // Compute current status based on receipt state
  const currentStatus: TransactionStatus = (() => {
    if (error || isReceiptError) return 'error'
    if (isConfirmed) return 'success'
    if (txHash && status === 'confirming') return 'confirming'
    return status
  })()
  
  const send = useCallback(async (params: SendPaymentParams) => {
    if (!address || !connectorClient) {
      setError(new Error('Not connected'))
      setStatus('error')
      return
    }
    
    try {
      setStatus('preparing')
      setError(null)
      
      // Create wallet client with Tempo actions using the connector's account
      const walletClient = createTempoWalletClient(connectorClient.account)
      
      // Parse amount with TIP-20 standard decimals
      const amount = parseUnits(params.amount, TIP_20_DECIMALS)
      
      // Prepare transfer parameters
      const transferParams: {
        token: `0x${string}`
        to: `0x${string}`
        amount: bigint
        memo?: `0x${string}`
        feeToken?: `0x${string}`
        feePayer?: true
      } = {
        token: params.token as `0x${string}`,
        to: params.to,
        amount,
      }
      
      // Add memo if provided (SDK handles transferWithMemo automatically)
      if (params.memo && params.memo.length > 0) {
        transferParams.memo = stringToHex(params.memo, { size: 32 }) as `0x${string}`
      }
      
      // Add fee token if not sponsored
      if (!params.sponsored && params.feeToken) {
        transferParams.feeToken = params.feeToken as `0x${string}`
      }
      
      // Add fee payer if sponsored
      if (params.sponsored) {
        // Note: feePayer: true requires a fee payer service configured
        // For now, we'll set it and let the SDK handle it
        // If no service is configured, this will fail gracefully
        transferParams.feePayer = true
      }
      
      setStatus('signing')
      
      // Use SDK's token.transfer method (handles both transfer and transferWithMemo)
      const hash = await walletClient.token.transfer(transferParams)
      
      setTxHash(hash)
      setStatus('confirming')
      
    } catch (e) {
      logError(e, { hook: 'useSendPayment', action: 'send' })
      setError(e instanceof Error ? e : new Error('Transaction failed'))
      setStatus('error')
    }
  }, [address, connectorClient])
  
  const reset = useCallback(() => {
    setStatus('idle')
    setError(null)
    setTxHash(undefined)
  }, [])
  
  const isLoading = useMemo(() => {
    return currentStatus === 'preparing' || 
           currentStatus === 'signing' || 
           currentStatus === 'sending' || 
           currentStatus === 'confirming'
  }, [currentStatus])
  
  return { 
    send, 
    status: currentStatus, 
    txHash, 
    error: error || (isReceiptError ? new Error('Transaction failed') : null), 
    reset,
    isLoading,
  }
}

