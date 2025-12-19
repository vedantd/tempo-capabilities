"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";

interface RotatingCoinProps {
  size?: number;
  className?: string;
  symbol?: string;
}

// Map token symbols to color classes for coin styling
const TOKEN_COIN_COLORS: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  pathUSD: {
    bg: "from-blue-500/30 to-blue-600/20",
    border: "border-blue-400/50",
    text: "text-blue-300",
  },
  AlphaUSD: {
    bg: "from-purple-500/30 to-purple-600/20",
    border: "border-purple-400/50",
    text: "text-purple-300",
  },
  BetaUSD: {
    bg: "from-emerald-500/30 to-emerald-600/20",
    border: "border-emerald-400/50",
    text: "text-emerald-300",
  },
  ThetaUSD: {
    bg: "from-amber-500/30 to-amber-600/20",
    border: "border-amber-400/50",
    text: "text-amber-300",
  },
};

export function RotatingCoin({
  size = 40,
  className,
  symbol = "USD",
}: RotatingCoinProps) {
  const coinColors = TOKEN_COIN_COLORS[symbol] || {
    bg: "from-primary/30 to-primary/20",
    border: "border-primary/50",
    text: "text-primary-foreground",
  };

  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      {/* 3D Rotating Coin Container */}
      <motion.div
        className="relative w-full h-full"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front face of coin - USDC style */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(2px)",
            }}
          >
            <div
              className={cn(
                "w-full h-full rounded-full flex flex-col items-center justify-center",
                "bg-gradient-to-br",
                coinColors.bg,
                "border-2",
                coinColors.border,
                "shadow-lg shadow-black/20",
                "relative overflow-hidden"
              )}
            >
              {/* Coin design - USDC inspired */}
              <div
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wider z-10",
                  coinColors.text
                )}
              >
                {symbol.slice(0, 2)}
              </div>
              <div
                className={cn(
                  "text-[6px] font-medium mt-0.5 opacity-70",
                  coinColors.text
                )}
              >
                USD
              </div>

              {/* Inner ring */}
              <div
                className={cn(
                  "absolute inset-2 rounded-full border",
                  coinColors.border,
                  "opacity-30"
                )}
              />
            </div>
          </motion.div>

          {/* Back face of coin */}
          <motion.div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(2px)",
            }}
          >
            <div
              className={cn(
                "w-full h-full rounded-full flex items-center justify-center",
                "bg-gradient-to-br",
                coinColors.bg,
                "border-2",
                coinColors.border,
                "shadow-lg shadow-black/20",
                "relative overflow-hidden"
              )}
            >
              {/* Raised dollar symbol on back */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <DollarSign
                  className={cn("w-6 h-6", coinColors.text)}
                  strokeWidth={2.5}
                  fill="currentColor"
                />
              </motion.div>

              {/* Inner ring */}
              <div
                className={cn(
                  "absolute inset-2 rounded-full border",
                  coinColors.border,
                  "opacity-30"
                )}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Shine/gloss effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent" />
      </motion.div>

      {/* Edge highlight for 3D effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div
          className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 rounded-t-full",
            "bg-gradient-to-b from-white/20 to-transparent"
          )}
        />
      </div>
    </div>
  );
}
