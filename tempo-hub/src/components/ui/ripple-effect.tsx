"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RippleEffectProps {
  x: number;
  y: number;
  onComplete: () => void;
}

export function RippleEffect({ x, y, onComplete }: RippleEffectProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/30 pointer-events-none"
      style={{
        left: x,
        top: y,
        width: 0,
        height: 0,
      }}
      animate={{
        width: 200,
        height: 200,
        x: -100,
        y: -100,
        opacity: [0.5, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      onAnimationComplete={onComplete}
    />
  );
}

