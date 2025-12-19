"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { type TokenBalance } from "@/hooks/use-token-balances";
import { cardHoverVariants, cardTransition } from "@/lib/motion";
import { RotatingCoin } from "./rotating-coin";
import { AnimatedBalance } from "./animated-balance";
import { cn } from "@/lib/utils";

interface TokenCardProps {
  token: TokenBalance;
}

// Common color for all token cards (neutral slate to match coin background)
// Enhanced gradient for better visibility
const COMMON_CARD_GRADIENT =
  "from-slate-800/50 to-slate-900/40 border-slate-700/60";

export const TokenCard = memo(function TokenCard({ token }: TokenCardProps) {
  const gradientClass = COMMON_CARD_GRADIENT;

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      transition={cardTransition}
    >
      <Card
        className={cn(
          "bg-gradient-to-br",
          gradientClass,
          "overflow-hidden",
          "shadow-sm hover:shadow-md transition-shadow duration-200"
        )}
      >
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            {/* Icon - Left side, grouped with content */}
            <div className="flex items-center justify-center shrink-0">
              <RotatingCoin key={token.address} size={40} symbol="USD" />
            </div>

            {/* Content - Grouped with icon */}
            <div className="flex-1 min-w-0">
              {/* Amount - Large, prominent with animation */}
              <AnimatedBalance
                value={token.formatted}
                className="text-3xl font-bold tracking-tighter leading-none block"
              />

              {/* Token name - Subtle, below amount */}
              <p className="text-xs font-medium text-muted-foreground mt-0.5">
                {token.name}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});
