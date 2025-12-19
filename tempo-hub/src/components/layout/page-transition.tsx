"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  pageTransitionVariants,
  dashboardPageVariants,
  sendPageVariants,
  receivePageVariants,
  transactionsPageVariants,
  pageTransitionConfig,
  reducedMotionPageVariants,
} from "@/lib/motion-page-transitions";

interface PageTransitionProps {
  children: React.ReactNode;
}

// Get page-specific variants based on route
function getPageVariants(pathname: string) {
  if (pathname === "/dashboard") return dashboardPageVariants;
  if (pathname === "/send") return sendPageVariants;
  if (pathname === "/receive") return receivePageVariants;
  if (pathname === "/transactions") return transactionsPageVariants;
  return pageTransitionVariants;
}

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const variants = reducedMotion
    ? reducedMotionPageVariants
    : getPageVariants(pathname);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransitionConfig}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

