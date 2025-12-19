"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useSendPayment } from "@/hooks/use-send-payment";
import { useFormValidation } from "@/hooks/use-form-validation";
import { AmountDisplay } from "./amount-display";
import { QuickAmounts } from "./quick-amounts";
import { MinimalRecipientInput } from "./minimal-recipient-input";
import { MemoInput } from "./memo-input";
import { FeeTokenSelector } from "./fee-token-selector";
import { SponsorToggle } from "./sponsor-toggle";
import { SendButton } from "./send-button";
import { TransactionStatus } from "./transaction-status";
import { TOKENS, TOKEN_INFO, type TokenAddress } from "@/lib/constants/tokens";
import { QUICK_AMOUNTS } from "@/lib/constants/transactions";
import {
  pageVariants,
  pageTransition,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  STORAGE_KEYS,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
} from "@/lib/utils/session-storage";

interface FormState {
  recipient: string;
  amount: string;
  memo: string;
  selectedToken: TokenAddress;
  feeToken: TokenAddress;
  sponsored: boolean;
}

export function ModernSendForm() {
  const { isConnected } = useAccount();
  const router = useRouter();

  // Form state
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [selectedToken, setSelectedToken] = useState<TokenAddress>(
    TOKENS.alphaUSD
  );
  const [feeToken, setFeeToken] = useState<TokenAddress>(TOKENS.alphaUSD);
  const [sponsored, setSponsored] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const { send, status, txHash, error, reset, isLoading } = useSendPayment();
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load form state from sessionStorage on mount
  useEffect(() => {
    const stored = getSessionStorage<FormState>(STORAGE_KEYS.forms.sendForm);
    if (stored) {
      setRecipient(stored.recipient || "");
      setAmount(stored.amount || "");
      setMemo(stored.memo || "");
      setSelectedToken(stored.selectedToken || TOKENS.alphaUSD);
      setFeeToken(stored.feeToken || TOKENS.alphaUSD);
      setSponsored(stored.sponsored || false);
    }
  }, []);

  // Save form state to sessionStorage (debounced)
  const saveFormState = useCallback(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveTimeoutRef.current = setTimeout(() => {
      const formState: FormState = {
        recipient,
        amount,
        memo,
        selectedToken,
        feeToken,
        sponsored,
      };
      setSessionStorage(STORAGE_KEYS.forms.sendForm, formState);
    }, 500); // Debounce by 500ms
  }, [recipient, amount, memo, selectedToken, feeToken, sponsored]);

  // Save form state when it changes
  useEffect(() => {
    saveFormState();
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [saveFormState]);

  // Clear form state on successful submission
  useEffect(() => {
    if (status === "success") {
      removeSessionStorage(STORAGE_KEYS.forms.sendForm);
    }
  }, [status]);

  // Redirect to dashboard after successful payment confirmation
  // Add small delay to ensure transaction is fully confirmed before redirect
  useEffect(() => {
    if (status === "success" && txHash) {
      // Small delay to ensure transaction is fully processed and user sees success state
      const redirectTimer = setTimeout(() => {
        router.push(`/dashboard?payment=success&txHash=${txHash}`);
      }, 500); // 500ms delay to show success state before redirect

      return () => clearTimeout(redirectTimer);
    }
  }, [status, txHash, router]);

  // Form validation
  const { isValid, errors } = useFormValidation({
    recipient,
    amount,
  });

  const canSubmit = useMemo(() => {
    return isConnected && isValid && !isLoading;
  }, [isConnected, isValid, isLoading]);

  const handleSubmit = useCallback(async () => {
    if (!canSubmit) return;

    await send({
      token: selectedToken,
      to: recipient as `0x${string}`,
      amount,
      memo: memo || undefined,
      feeToken: sponsored ? undefined : feeToken,
      sponsored,
    });
  }, [
    canSubmit,
    send,
    selectedToken,
    recipient,
    amount,
    memo,
    sponsored,
    feeToken,
  ]);

  const handleReset = useCallback(() => {
    reset();
    setRecipient("");
    setAmount("");
    setMemo("");
  }, [reset]);

  const handleQuickAmount = useCallback((amountStr: string) => {
    setAmount(amountStr);
  }, []);

  // Show transaction status after submission
  if (status !== "idle") {
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
    );
  }

  const tokenInfo = TOKEN_INFO[selectedToken];
  const quickAmounts = [...QUICK_AMOUNTS];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Large Amount Display - Editable */}
      <motion.div variants={staggerItem}>
        <AmountDisplay value={amount} onChange={setAmount} />
      </motion.div>

      {/* Quick Amount Buttons */}
      <motion.div variants={staggerItem}>
        <QuickAmounts
          amounts={quickAmounts}
          selectedAmount={amount}
          onSelect={handleQuickAmount}
        />
      </motion.div>

      {/* Recipient Input */}
      <motion.div variants={staggerItem}>
        <MinimalRecipientInput value={recipient} onChange={setRecipient} />
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
              animate={{ opacity: 1, height: "auto" }}
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
                <SponsorToggle checked={sponsored} onChange={setSponsored} />

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
        />
        <p className="text-xs text-center text-muted-foreground mt-3">
          Transaction will be final in ~0.5 seconds
        </p>
      </motion.div>
    </motion.div>
  );
}
