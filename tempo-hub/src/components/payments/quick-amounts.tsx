"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scaleVariants, scaleTransition } from "@/lib/motion";

interface QuickAmountsProps {
  amounts: number[];
  selectedAmount?: string;
  onSelect: (amount: string) => void;
}

export function QuickAmounts({
  amounts,
  selectedAmount,
  onSelect,
}: QuickAmountsProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {amounts.map((amount) => {
        const amountStr = amount.toString();
        // Check if selected amount matches this quick amount
        // Handles both exact string match and numeric match (e.g., "10" matches "10.00")
        const isSelected =
          selectedAmount === amountStr ||
          (selectedAmount &&
            !isNaN(parseFloat(selectedAmount)) &&
            parseFloat(selectedAmount) === amount);

        return (
          <motion.div
            key={amount}
            variants={scaleVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            transition={scaleTransition}
          >
            <Button
              type="button"
              variant={isSelected ? "default" : "outline"}
              className={cn(
                "w-full h-14 text-lg font-semibold",
                isSelected && "bg-primary text-primary-foreground"
              )}
              onClick={() => onSelect(amountStr)}
            >
              ${amount}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
