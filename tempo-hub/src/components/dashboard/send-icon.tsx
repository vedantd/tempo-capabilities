"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SendIconProps {
  className?: string;
  size?: number;
}

export function SendIcon({ className, size = 56 }: SendIconProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      {/* Glow background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main icon container with 3D effect */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        whileHover={{
          scale: 1.1,
          rotateZ: 5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Icon layers for depth */}
        <div className="relative">
          {/* Shadow layer */}
          <div className="absolute inset-0 translate-x-1 translate-y-1">
            <ArrowRight
              className="w-full h-full text-primary/20"
              strokeWidth={2.5}
            />
          </div>

          {/* Main icon */}
          <motion.div
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight
              className="w-full h-full text-primary relative z-10"
              strokeWidth={2.5}
            />
          </motion.div>

          {/* Glow trail */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0, 0.6, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight
              className="w-full h-full text-primary blur-sm"
              strokeWidth={2}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
