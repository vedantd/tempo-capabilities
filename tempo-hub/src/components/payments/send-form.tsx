"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { isAddress } from "viem";
import { useSendPayment } from "@/hooks/use-send-payment";
import { RecipientInput } from "./recipient-input";
import { AmountInput } from "./amount-input";
import { MemoInput } from "./memo-input";
import { FeeTokenSelector } from "./fee-token-selector";
import { SponsorToggle } from "./sponsor-toggle";
import { TransactionStatus } from "./transaction-status";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TOKENS, TOKEN_INFO, type TokenAddress } from "@/lib/wagmi";
import { Send, Loader2 } from "lucide-react";

export function SendForm() {
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

  const { send, status, txHash, error, reset, isLoading } = useSendPayment();

  // Redirect to dashboard after successful payment
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        router.push('/dashboard?payment=success');
      }, 3000); // Give user 3 seconds to see success message
      return () => clearTimeout(timer);
    }
  }, [status, router]);

  // Form validation
  const isValidRecipient = isAddress(recipient);
  const isValidAmount = parseFloat(amount) > 0;
  const canSubmit =
    isConnected && isValidRecipient && isValidAmount && !isLoading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) return;

    await send({
      token: selectedToken,
      to: recipient as `0x${string}`,
      amount,
      memo: memo || undefined,
      feeToken: sponsored ? undefined : feeToken,
      sponsored,
    });
  };

  const handleReset = () => {
    reset();
    setRecipient("");
    setAmount("");
    setMemo("");
  };

  // Show transaction status after submission
  if (status !== "idle") {
    return (
      <TransactionStatus
        status={status}
        txHash={txHash}
        error={error}
        onReset={handleReset}
      />
    );
  }

  const tokenInfo = TOKEN_INFO[selectedToken];

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5" />
          Send Payment
        </CardTitle>
        <CardDescription>
          Transfer stablecoins with instant finality
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Token Selection */}
          <FeeTokenSelector
            label="Token to Send"
            value={selectedToken}
            onChange={setSelectedToken}
          />

          {/* Recipient */}
          <RecipientInput value={recipient} onChange={setRecipient} />

          {/* Amount */}
          <AmountInput
            value={amount}
            onChange={setAmount}
            token={selectedToken}
          />

          {/* Memo */}
          <MemoInput value={memo} onChange={setMemo} />

          {/* Fee Options */}
          <div className="space-y-4 pt-4 border-t border-border/50">
            <p className="text-sm font-medium text-muted-foreground">
              Transaction Fee Options
            </p>

            <SponsorToggle checked={sponsored} onChange={setSponsored} />

            {!sponsored && (
              <FeeTokenSelector
                label="Pay Fee With"
                value={feeToken}
                onChange={setFeeToken}
              />
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!canSubmit}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send {amount || "0"} {tokenInfo.symbol}
              </>
            )}
          </Button>

          {/* Info */}
          <p className="text-xs text-center text-muted-foreground">
            Transaction will be final in ~0.5 seconds
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
