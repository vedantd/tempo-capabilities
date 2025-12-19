"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface AmountDisplayProps {
  value: string;
  onChange?: (value: string) => void;
  isFocused?: boolean;
  className?: string;
}

export function AmountDisplay({
  value,
  onChange,
  isFocused = false,
  className,
}: AmountDisplayProps) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Select all text for easy replacement
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleClick = () => {
    if (onChange) {
      setIsEditing(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow numbers and decimal point
    if (inputValue === "" || /^\d*\.?\d*$/.test(inputValue)) {
      onChange?.(inputValue);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      inputRef.current?.blur();
    }
    if (e.key === "Escape") {
      setIsEditing(false);
      inputRef.current?.blur();
    }
  };

  // Format amount for display
  const displayValue = value || "0.00";
  const formattedValue = value
    ? parseFloat(value).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";

  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center py-8 px-6",
        onChange && "cursor-text",
        className
      )}
      animate={{
        scale: isFocused || isEditing ? 1.02 : 1,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      onClick={handleClick}
    >
      <div className="text-6xl font-bold tracking-tight text-center w-full flex items-center justify-center">
        <span className="inline-block">$</span>
        {isEditing && onChange ? (
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-0 outline-none focus:outline-none text-center inline-block"
            style={{
              fontFamily: "inherit",
              color: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              letterSpacing: "inherit",
              width: value ? `${Math.max(value.length * 1.1 + 2, 4)}ch` : "4ch",
              minWidth: "4ch",
            }}
          />
        ) : (
          <motion.span
            key={value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {formattedValue}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
