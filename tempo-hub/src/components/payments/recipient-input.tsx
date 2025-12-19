"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, CheckCircle2, AlertCircle } from "lucide-react";
import { isAddress } from "viem";

interface RecipientInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function RecipientInput({ value, onChange }: RecipientInputProps) {
  const isValid = value === "" || isAddress(value);
  const isComplete = isAddress(value);

  return (
    <div className="space-y-2">
      <Label htmlFor="recipient" className="flex items-center gap-2">
        <User className="h-4 w-4" />
        Recipient Address
      </Label>
      <div className="relative">
        <Input
          id="recipient"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0x..."
          className={`font-mono pr-10 ${
            !isValid ? "border-destructive focus-visible:ring-destructive" : ""
          }`}
          aria-invalid={!isValid}
          aria-describedby={!isValid ? "recipient-error" : undefined}
        />
        {value && (
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            {isComplete ? (
              <CheckCircle2 className="h-4 w-4 text-success" />
            ) : (
              <AlertCircle className="h-4 w-4 text-destructive" />
            )}
          </div>
        )}
      </div>
      {!isValid && (
        <p
          id="recipient-error"
          className="text-xs text-destructive"
          role="alert"
        >
          Invalid Ethereum address format
        </p>
      )}
    </div>
  );
}
