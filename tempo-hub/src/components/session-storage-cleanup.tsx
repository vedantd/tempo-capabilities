"use client";

import { useEffect, useRef } from "react";
import { useAccount } from "wagmi";
import {
  cleanupExpiredToastCooldowns,
  clearAddressScopedData,
} from "@/lib/utils/session-storage";

/**
 * Component that handles automatic cleanup of sessionStorage
 * - Cleans up expired toast cooldowns on mount
 * - Clears address-scoped data when wallet disconnects or address changes
 */
export function SessionStorageCleanup() {
  const { address } = useAccount();
  const previousAddressRef = useRef<string | undefined>(address);

  // Clean up expired toast cooldowns on mount
  useEffect(() => {
    cleanupExpiredToastCooldowns();
  }, []);

  // Clear address-scoped data when address changes or wallet disconnects
  useEffect(() => {
    const previousAddress = previousAddressRef.current;

    // If we had an address before and now we don't (disconnected), clear its data
    if (previousAddress && !address) {
      clearAddressScopedData(previousAddress);
    }
    // If address changed (different address), clear previous address data
    else if (
      previousAddress &&
      address &&
      previousAddress.toLowerCase() !== address.toLowerCase()
    ) {
      clearAddressScopedData(previousAddress);
    }

    previousAddressRef.current = address;
  }, [address]);

  return null;
}
