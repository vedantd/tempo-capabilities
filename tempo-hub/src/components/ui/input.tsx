"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { transitions, shakeVariants } from "@/lib/motion";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  // Extract drag-related props that conflict with motion
  const { onDrag, onDragStart, onDragEnd, onFocus, onBlur, ...inputProps } =
    props as any;

  // Check for error state
  React.useEffect(() => {
    const input = document.querySelector(
      `[data-slot="input"]`
    ) as HTMLInputElement;
    if (input) {
      setHasError(input.getAttribute("aria-invalid") === "true");
    }
  }, [props]);

  return (
    <motion.input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:bg-transparent focus:bg-transparent",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      variants={hasError ? shakeVariants : undefined}
      initial={hasError ? undefined : false}
      animate={
        hasError
          ? "shake"
          : {
              scale: isFocused ? 1.01 : 1,
              borderColor: isFocused ? undefined : undefined,
            }
      }
      transition={transitions.fast}
      onFocus={(e) => {
        setIsFocused(true);
        setHasError(false);
        onFocus?.(e as any);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e as any);
      }}
      {...inputProps}
    />
  );
}

export { Input };
