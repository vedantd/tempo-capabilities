"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { type TokenBalance } from "@/hooks/use-token-balances";
import { cardHoverVariants, cardTransition } from "@/lib/motion";
import { RotatingCoin } from "./rotating-coin";

interface TokenCardProps {
  token: TokenBalance;
}

// Token colors for visual distinction
const TOKEN_COLORS: Record<string, string> = {
  pathUSD: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
  AlphaUSD: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
  BetaUSD: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  ThetaUSD: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
};

const TOKEN_ICON_COLORS: Record<string, string> = {
  pathUSD: "text-blue-400",
  AlphaUSD: "text-purple-400",
  BetaUSD: "text-emerald-400",
  ThetaUSD: "text-amber-400",
};

export function TokenCard({ token }: TokenCardProps) {
  const gradientClass =
    TOKEN_COLORS[token.symbol] ||
    "from-gray-500/20 to-gray-600/10 border-gray-500/30";
  const iconColor = TOKEN_ICON_COLORS[token.symbol] || "text-gray-400";

  // Format balance with proper precision
  const formattedBalance = parseFloat(token.formatted).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      transition={cardTransition}
    >
      <Card
        className={`bg-gradient-to-br ${gradientClass} border overflow-hidden`}
      >
        <CardContent className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <RotatingCoin size={40} symbol={token.symbol} />
              </div>
              <div>
                <p className="font-semibold">{token.symbol}</p>
                <p className="text-xs text-muted-foreground">{token.name}</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold tracking-tight">
              ${formattedBalance}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Balance</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
