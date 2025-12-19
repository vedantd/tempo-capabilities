"use client";

import { useAccount } from "wagmi";
import { Header } from "./header";

/**
 * Wrapper component that conditionally renders Header based on connection status
 * This allows Header to be placed in the root layout while only showing when connected
 *
 * Note: This component should only be rendered once in the root layout
 */
export function HeaderWrapper() {
  const { isConnected } = useAccount();

  // Only render Header when user is connected
  // Return null (not empty fragment) to avoid hydration issues
  if (!isConnected) {
    return null;
  }

  // Render Header with a stable key to prevent duplicate rendering
  return <Header key="global-header" />;
}
