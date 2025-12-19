"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { isAddress } from "viem";
import { shakeVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MinimalRecipientInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function MinimalRecipientInput({
  value,
  onChange,
  className,
}: MinimalRecipientInputProps) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const isValid = value === "" || isAddress(value);
  const isComplete = isAddress(value);
  const showError = hasInteracted && value !== "" && !isValid;

  return (
    <motion.div
      className={className}
      variants={showError ? shakeVariants : undefined}
      animate={showError ? "shake" : undefined}
    >
      <div className="space-y-2">
        <Label htmlFor="recipient" className="text-sm font-medium">
          Send to
        </Label>
        <div className="relative">
          <Input
            id="recipient"
            value={value}
            onChange={(e) => {
              setHasInteracted(true);
              onChange(e.target.value);
            }}
            onBlur={() => setHasInteracted(true)}
            placeholder="0x..."
            className={cn(
              "h-14 text-base font-mono pr-12 transition-all bg-transparent focus:bg-transparent focus-visible:bg-transparent",
              showError && "border-destructive focus-visible:ring-destructive",
              isComplete && !showError && "border-success/50"
            )}
            aria-invalid={showError}
            aria-describedby={showError ? "recipient-error" : undefined}
          />
          <AnimatePresence>
            {value && (
              <motion.div
                className="absolute right-4 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isComplete ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-destructive" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {showError && (
            <motion.p
              id="recipient-error"
              className="text-xs text-destructive"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              Invalid address format
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
