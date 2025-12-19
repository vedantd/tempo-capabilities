"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReceiveIconProps {
  className?: string;
  size?: number;
}

export function ReceiveIcon({ className, size = 56 }: ReceiveIconProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      {/* Glow background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pulsing waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
          style={{
            scale: 0.5 + i * 0.25,
          }}
          animate={{
            scale: [0.5 + i * 0.25, 0.8 + i * 0.25, 0.5 + i * 0.25],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Main icon container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        whileHover={{
          scale: 1.1,
          rotateZ: -5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Icon layers */}
        <div className="relative">
          {/* Shadow layer */}
          <div className="absolute inset-0 translate-x-1 translate-y-1">
            <ArrowDownLeft
              className="w-full h-full text-emerald-400/20"
              strokeWidth={2.5}
            />
          </div>

          {/* Main icon */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownLeft
              className="w-full h-full text-emerald-400 relative z-10"
              strokeWidth={2.5}
            />
          </motion.div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0, 0.7, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownLeft
              className="w-full h-full text-emerald-400 blur-sm"
              strokeWidth={2}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Incoming particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/50"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            x: [0, 8, 0],
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
