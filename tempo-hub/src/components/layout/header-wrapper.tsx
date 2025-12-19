"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { Header } from "./header";

/**
 * Wrapper component that conditionally renders Header based on connection status
 * This allows Header to be placed in the root layout while only showing when connected
 * Uses client-side only rendering to prevent hydration mismatches
 */
export function HeaderWrapper() {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  // Only render after mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted (prevents SSR/client mismatch)
  if (!mounted) {
    return null;
  }

  // Only render Header when user is connected
  if (!isConnected) {
    return null;
  }

  return <Header />;
}
