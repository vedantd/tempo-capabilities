'use client'

import { useState, useCallback } from 'react'
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi'
import { encodeFunctionData, stringToHex, parseUnits } from 'viem'
import { type TokenAddress } from '@/lib/wagmi'

// TIP-20 ABI for transferWithMemo
const TIP20_ABI = [
  {
    name: 'transferWithMemo',
    type: 'function',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'memo', type: 'bytes32' },
    ],
    outputs: [{ type: 'bool' }],
  },
  {
    name: 'transfer',
    type: 'function',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  },
] as const

export type TransactionStatus = 
  | 'idle' 
  | 'preparing' 
  | 'signing' 
  | 'sending' 
  | 'confirming' 
  | 'success' 
  | 'error'

interface SendPaymentParams {
  token: TokenAddress
  to: `0x${string}`
  amount: string
  memo?: string
  feeToken?: TokenAddress
  sponsored?: boolean
}

export function useSendPayment() {
  const { address } = useAccount()
  const [status, setStatus] = useState<TransactionStatus>('idle')
  const [error, setError] = useState<Error | null>(null)
  
  const { 
    sendTransaction, 
    data: txHash, 
    isPending: isSending,
    reset: resetSend 
  } = useSendTransaction()
  
  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed 
  } = useWaitForTransactionReceipt({
    hash: txHash,
  })
  
  const send = useCallback(async (params: SendPaymentParams) => {
    if (!address) {
      setError(new Error('Not connected'))
      setStatus('error')
      return
    }
    
    try {
      setStatus('preparing')
      setError(null)
      
      // Parse amount with 6 decimals (TIP-20 standard)
      const value = parseUnits(params.amount, 6)
      
      // Prepare the transaction data
      let data: `0x${string}`
      
      if (params.memo && params.memo.length > 0) {
        // Convert memo string to bytes32
        // Pad with zeros to 32 bytes
        const memoBytes = stringToHex(params.memo, { size: 32 })
        
        data = encodeFunctionData({
          abi: TIP20_ABI,
          functionName: 'transferWithMemo',
          args: [params.to, value, memoBytes],
        })
      } else {
        // No memo, use regular transfer
        data = encodeFunctionData({
          abi: TIP20_ABI,
          functionName: 'transfer',
          args: [params.to, value],
        })
      }
      
      setStatus('signing')
      
      // Send the transaction
      sendTransaction({
        to: params.token as `0x${string}`,
        data,
        // For Tempo transactions, we could add:
        // - feeToken for fee token selection
        // - feePayer for sponsorship
        // These would be handled by the Tempo SDK extensions
      })
      
      setStatus('sending')
      
    } catch (e) {
      // Only log errors in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Send payment error:', e)
      }
      setError(e instanceof Error ? e : new Error('Transaction failed'))
      setStatus('error')
    }
  }, [address, sendTransaction])
  
  // Update status based on transaction state
  const currentStatus: TransactionStatus = (() => {
    if (error) return 'error'
    if (isConfirmed) return 'success'
    if (isConfirming) return 'confirming'
    if (isSending) return 'sending'
    return status
  })()
  
  const reset = useCallback(() => {
    setStatus('idle')
    setError(null)
    resetSend()
  }, [resetSend])
  
  return { 
    send, 
    status: currentStatus, 
    txHash, 
    error, 
    reset,
    isLoading: isSending || isConfirming,
  }
}

