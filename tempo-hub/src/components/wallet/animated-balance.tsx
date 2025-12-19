"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { formatTokenBalance } from "@/lib/utils";

interface AnimatedBalanceProps {
  value: string;
  className?: string;
}

export function AnimatedBalance({ value, className }: AnimatedBalanceProps) {
  const numValue = parseFloat(value) || 0;
  const previousValueRef = useRef(numValue);
  const motionValue = useMotionValue(numValue);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 30 });
  const [displayValue, setDisplayValue] = useState(formatTokenBalance(value));

  useEffect(() => {
    if (Math.abs(numValue - previousValueRef.current) > 0.000001) {
      motionValue.set(numValue);
      previousValueRef.current = numValue;
    }
  }, [numValue, motionValue]);

  const formattedValue = useTransform(spring, (latest) => {
    return formatTokenBalance(latest);
  });

  useEffect(() => {
    const unsubscribe = formattedValue.on("change", (val) => {
      setDisplayValue(val);
    });
    return () => unsubscribe();
  }, [formattedValue]);

  return (
    <motion.span
      className={className}
      key={value}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      ${displayValue}
    </motion.span>
  );
}
