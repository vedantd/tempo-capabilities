'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
import { isAddress } from 'viem'
import { useSendPayment } from '@/hooks/use-send-payment'
import { AmountDisplay } from './amount-display'
import { QuickAmounts } from './quick-amounts'
import { MinimalRecipientInput } from './minimal-recipient-input'
import { MemoInput } from './memo-input'
import { FeeTokenSelector } from './fee-token-selector'
import { SponsorToggle } from './sponsor-toggle'
import { SendButton } from './send-button'
import { TransactionStatus } from './transaction-status'
import { TOKENS, TOKEN_INFO, type TokenAddress } from '@/lib/wagmi'
import { pageVariants, pageTransition, staggerContainer, staggerItem } from '@/lib/motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ModernSendForm() {
  const { isConnected } = useAccount()
  const router = useRouter()

  // Form state
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [memo, setMemo] = useState('')
  const [selectedToken, setSelectedToken] = useState<TokenAddress>(TOKENS.alphaUSD)
  const [feeToken, setFeeToken] = useState<TokenAddress>(TOKENS.alphaUSD)
  const [sponsored, setSponsored] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showCustomAmount, setShowCustomAmount] = useState(false)

  const { send, status, txHash, error, reset, isLoading } = useSendPayment()

  // Redirect to dashboard after successful payment
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        router.push('/dashboard?payment=success')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [status, router])

  // Form validation
  const isValidRecipient = isAddress(recipient)
  const isValidAmount = parseFloat(amount) > 0
  const canSubmit = isConnected && isValidRecipient && isValidAmount && !isLoading

  const handleSubmit = async () => {
    if (!canSubmit) return

    await send({
      token: selectedToken,
      to: recipient as `0x${string}`,
      amount,
      memo: memo || undefined,
      feeToken: sponsored ? undefined : feeToken,
      sponsored,
    })
  }

  const handleReset = () => {
    reset()
    setRecipient('')
    setAmount('')
    setMemo('')
  }

  const handleQuickAmount = (amountStr: string) => {
    setAmount(amountStr)
    setShowCustomAmount(false)
  }

  const handleCustomAmount = () => {
    setAmount('')
    setShowCustomAmount(true)
  }

  // Show transaction status after submission
  if (status !== 'idle') {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <TransactionStatus
          status={status}
          txHash={txHash}
          error={error}
          onReset={handleReset}
        />
      </motion.div>
    )
  }

  const tokenInfo = TOKEN_INFO[selectedToken]
  const quickAmounts = [10, 50, 100, 500]

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Large Amount Display */}
      <motion.div variants={staggerItem}>
        <AmountDisplay
          value={amount}
          tokenSymbol={tokenInfo.symbol}
          isFocused={showCustomAmount}
        />
      </motion.div>

      {/* Quick Amount Buttons */}
      <motion.div variants={staggerItem}>
        <QuickAmounts
          amounts={quickAmounts}
          selectedAmount={amount}
          onSelect={handleQuickAmount}
          onCustom={handleCustomAmount}
        />
      </motion.div>

      {/* Amount Input (when custom) */}
      <AnimatePresence>
        {showCustomAmount && (
          <motion.div
            variants={staggerItem}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-2">
              <label htmlFor="custom-amount" className="text-sm font-medium">
                Enter Amount
              </label>
              <input
                id="custom-amount"
                type="number"
                inputMode="decimal"
                value={amount}
                onChange={(e) => {
                  const value = e.target.value
                  if (value === '' || /^\d*\.?\d*$/.test(value)) {
                    setAmount(value)
                  }
                }}
                onBlur={() => {
                  if (amount === '') {
                    setShowCustomAmount(false)
                  }
                }}
                autoFocus
                className="w-full h-14 text-2xl font-semibold text-center bg-muted rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="0.00"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recipient Input */}
      <motion.div variants={staggerItem}>
        <MinimalRecipientInput
          value={recipient}
          onChange={setRecipient}
        />
      </motion.div>

      {/* Memo Input */}
      <motion.div variants={staggerItem}>
        <MemoInput value={memo} onChange={setMemo} />
      </motion.div>

      {/* Advanced Options */}
      <motion.div variants={staggerItem} className="space-y-4">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full justify-between"
        >
          <span className="text-sm font-medium">Advanced Options</span>
          {showAdvanced ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>

        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 overflow-hidden"
            >
              {/* Token Selection */}
              <FeeTokenSelector
                label="Token to Send"
                value={selectedToken}
                onChange={setSelectedToken}
              />

              {/* Fee Options */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <SponsorToggle
                  checked={sponsored}
                  onChange={setSponsored}
                />

                {!sponsored && (
                  <FeeTokenSelector
                    label="Pay Fee With"
                    value={feeToken}
                    onChange={setFeeToken}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Send Button */}
      <motion.div variants={staggerItem} className="pt-4">
        <SendButton
          onClick={handleSubmit}
          disabled={!canSubmit}
          isLoading={isLoading}
          amount={amount}
          tokenSymbol={tokenInfo.symbol}
        />
        <p className="text-xs text-center text-muted-foreground mt-3">
          Transaction will be final in ~0.5 seconds
        </p>
      </motion.div>
    </motion.div>
  )
}

