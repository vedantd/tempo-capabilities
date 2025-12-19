"use client";

import { useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "success" | "error";
  duration?: number;
}

interface ToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const toastVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95, x: 20 },
  animate: { opacity: 1, y: 0, scale: 1, x: 0 },
  exit: { opacity: 0, x: 100, scale: 0.9 },
};

export function ToastComponent({ toast, onClose }: ToastProps) {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        onClose(toast.id);
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.id, toast.duration, onClose]);

  const variantConfig = {
    default: {
      container: "bg-card border-border/50 shadow-xl backdrop-blur-sm",
      icon: Info,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      title: "text-foreground",
      description: "text-muted-foreground",
    },
    success: {
      container: "bg-success/5 border-success/20 shadow-xl backdrop-blur-sm",
      icon: CheckCircle2,
      iconColor: "text-success",
      iconBg: "bg-success/10",
      title: "text-success",
      description: "text-muted-foreground",
    },
    error: {
      container:
        "bg-destructive/5 border-destructive/20 shadow-xl backdrop-blur-sm",
      icon: AlertCircle,
      iconColor: "text-destructive",
      iconBg: "bg-destructive/10",
      title: "text-destructive",
      description: "text-muted-foreground",
    },
  };

  const config = variantConfig[toast.variant || "default"];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      <motion.div
        variants={toastVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className={cn(
          "flex items-start gap-3 p-4 rounded-xl border min-w-[320px] max-w-[420px]",
          config.container
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full shrink-0",
            config.iconBg
          )}
        >
          <Icon className={cn("w-5 h-5", config.iconColor)} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pt-0.5">
          <p
            className={cn("font-semibold text-sm leading-tight", config.title)}
          >
            {toast.title}
          </p>
          {toast.description && (
            <p
              className={cn(
                "text-xs mt-1.5 leading-relaxed",
                config.description
              )}
            >
              {toast.description}
            </p>
          )}
        </div>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => onClose(toast.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
