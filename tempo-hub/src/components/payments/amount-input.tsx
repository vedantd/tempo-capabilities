"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { useTokenBalance } from "@/hooks/use-token-balances";
import { type TokenAddress } from "@/lib/constants/tokens";
import { formatTokenBalance } from "@/lib/utils";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  token: TokenAddress;
}

export function AmountInput({ value, onChange, token }: AmountInputProps) {
  const { data: tokenBalance } = useTokenBalance(token);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow numbers and decimal point
    if (inputValue === "" || /^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  const handleMax = () => {
    if (tokenBalance) {
      onChange(tokenBalance.formatted);
    }
  };

  const parsedAmount = parseFloat(value) || 0;
  const balance = tokenBalance ? parseFloat(tokenBalance.formatted) : 0;
  const exceedsBalance = parsedAmount > balance;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="amount" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" />
          Amount
        </Label>
        {tokenBalance && (
          <span className="text-xs text-muted-foreground">
            Balance: ${formatTokenBalance(tokenBalance.formatted)}
          </span>
        )}
      </div>
      <div className="relative">
        <Input
          id="amount"
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          placeholder="0.00"
          className={`text-lg font-medium pr-16 ${
            exceedsBalance
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }`}
          aria-invalid={exceedsBalance}
          aria-describedby={exceedsBalance ? "amount-error" : undefined}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleMax}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
          aria-label="Use maximum available balance"
          disabled={!tokenBalance}
        >
          MAX
        </Button>
      </div>
      {exceedsBalance && (
        <p id="amount-error" className="text-xs text-destructive" role="alert">
          Amount exceeds available balance
        </p>
      )}
    </div>
  );
}
