"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";

interface RotatingCoinProps {
  size?: number;
  className?: string;
  symbol?: string;
}

// Common background color for all coins (neutral dark slate)
const COMMON_COIN_BG = "from-slate-700/50 to-slate-800/40";

// Map token symbols to color classes for coin styling (only border and text vary)
const TOKEN_COIN_COLORS: Record<string, { border: string; text: string }> = {
  pathUSD: {
    border: "border-blue-400/50",
    text: "text-blue-300",
  },
  AlphaUSD: {
    border: "border-purple-400/50",
    text: "text-purple-300",
  },
  BetaUSD: {
    border: "border-emerald-400/50",
    text: "text-emerald-300",
  },
  ThetaUSD: {
    border: "border-amber-400/50",
    text: "text-amber-300",
  },
};

// Generate consistent but random values based on symbol
function getRotationParams(symbol: string) {
  // Use symbol as seed for consistent randomness
  let hash = 0;
  for (let i = 0; i < symbol.length; i++) {
    hash = symbol.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate rotation duration between 3.5s and 5.5s
  const duration = 3.5 + (Math.abs(hash) % 20) / 10;

  // Generate initial delay between 0s and 2s
  const delay = (Math.abs(hash * 7) % 20) / 10;

  // Generate shine duration between 2.5s and 4s
  const shineDuration = 2.5 + (Math.abs(hash * 3) % 15) / 10;

  return { duration, delay, shineDuration };
}

export function RotatingCoin({
  size = 40,
  className,
  symbol = "USD",
}: RotatingCoinProps) {
  // Always use generic USD styling - blur lines between tokens
  const coinColors = {
    border: "border-primary/50",
    text: "text-primary-foreground",
  };

  const { duration, delay, shineDuration } = getRotationParams(symbol);

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
            rotateY: [0, 360],
          }}
          transition={{
            duration: duration || 4,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
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
                COMMON_COIN_BG,
                "border-2",
                coinColors.border,
                "shadow-lg shadow-black/20",
                "relative overflow-hidden"
              )}
            >
              {/* Coin design - Generic USD */}
              <div
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wider z-10",
                  coinColors.text
                )}
              >
                US
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
                COMMON_COIN_BG,
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
                  duration: shineDuration * 0.8,
                  delay: delay * 0.3,
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
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: shineDuration,
          delay: delay * 0.5,
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
