/**
 * Custom hook for form validation
 * Provides reusable validation logic for forms
 */

import { useMemo } from 'react'
import { isAddress } from 'viem'

interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

interface UseFormValidationParams {
  recipient?: string
  amount?: string
  minAmount?: number
  maxAmount?: number
}

/**
 * Hook for validating form inputs
 * @param params - Form values to validate
 * @returns Validation result with isValid flag and errors object
 */
export function useFormValidation(params: UseFormValidationParams): FormValidationResult {
  const { recipient, amount, minAmount = 0, maxAmount } = params

  return useMemo(() => {
    const errors: Record<string, string> = {}
    let isValid = true

    // Validate recipient address
    if (recipient !== undefined) {
      if (!recipient || recipient.trim() === '') {
        errors.recipient = 'Recipient address is required'
        isValid = false
      } else if (!isAddress(recipient)) {
        errors.recipient = 'Invalid address format'
        isValid = false
      }
    }

    // Validate amount
    if (amount !== undefined) {
      if (!amount || amount.trim() === '') {
        errors.amount = 'Amount is required'
        isValid = false
      } else {
        const numAmount = parseFloat(amount)
        if (isNaN(numAmount) || numAmount <= 0) {
          errors.amount = 'Amount must be greater than 0'
          isValid = false
        } else if (numAmount < minAmount) {
          errors.amount = `Amount must be at least ${minAmount}`
          isValid = false
        } else if (maxAmount !== undefined && numAmount > maxAmount) {
          errors.amount = `Amount must not exceed ${maxAmount}`
          isValid = false
        }
      }
    }

    return { isValid, errors }
  }, [recipient, amount, minAmount, maxAmount])
}

