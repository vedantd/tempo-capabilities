"use client";

import { useAccount } from "wagmi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/contexts/toast-context";
import { CelebrationEffect } from "@/components/ui/celebration-effect";
import { Header } from "@/components/layout";
import { AccountDisplay } from "@/components/auth";
import { TokenList, FaucetButton } from "@/components/wallet";
import { ActionButtons } from "@/components/dashboard/action-buttons";
import { ClientOnly } from "@/components/client-only";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SkeletonCard } from "@/components/ui/skeleton";
import {
  STORAGE_KEYS,
  getSessionStorage,
  setSessionStorage,
} from "@/lib/utils/session-storage";

function DashboardContent() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [celebrationKey, setCelebrationKey] = useState(0);
  const processedTxHashRef = useRef<string | null>(null);
  const hasInitializedRef = useRef(false);

  // Initialize processed txHash from sessionStorage on mount and clean up stale URLs
  useEffect(() => {
    if (hasInitializedRef.current) return;

    hasInitializedRef.current = true;
    const stored = getSessionStorage<string>(
      STORAGE_KEYS.payment.processedTxHash
    );
    if (stored) {
      processedTxHashRef.current = stored;
    }

    // Clean up URL immediately on mount if already processed (prevents refresh triggers)
    const paymentParam = searchParams.get("payment");
    const txHash = searchParams.get("txHash");
    if (paymentParam === "success" && txHash && stored === txHash) {
      router.replace("/dashboard");
    } else if (paymentParam === "success" && !txHash) {
      // Stale URL without txHash
      router.replace("/dashboard");
    }
  }, [searchParams, router]);

  // Show success toast if redirected from successful payment
  // Only trigger on actual redirects, not on page refresh
  useEffect(() => {
    // Skip if not initialized yet
    if (!hasInitializedRef.current) return;

    const paymentParam = searchParams.get("payment");
    const txHash = searchParams.get("txHash");

    // Only trigger if:
    // 1. payment=success is in URL
    // 2. We have a valid txHash (from actual transaction)
    // 3. This txHash hasn't been processed before (check both ref and sessionStorage)
    if (paymentParam === "success" && txHash) {
      const stored = getSessionStorage<string>(
        STORAGE_KEYS.payment.processedTxHash
      );

      // Skip if we've already processed this txHash
      if (txHash === processedTxHashRef.current || txHash === stored) {
        // Just clean up URL if already processed
        router.replace("/dashboard");
        return;
      }

      // Mark this txHash as processed FIRST (before triggering celebration)
      // This prevents double-triggering if the effect runs multiple times
      processedTxHashRef.current = txHash;
      setSessionStorage(STORAGE_KEYS.payment.processedTxHash, txHash);

      // Clean up URL immediately to prevent any race conditions
      router.replace("/dashboard");

      // Small delay to ensure redirect is complete before triggering celebration
      // This prevents celebration from triggering while still on send page
      setTimeout(() => {
        // Double-check we're still on dashboard and haven't processed this already
        if (processedTxHashRef.current === txHash) {
          // Trigger celebration by incrementing key (forces re-trigger)
          setCelebrationKey((prev) => prev + 1);

          toast({
            title: "Payment sent",
            description: "Transaction confirmed and finalized",
            variant: "success",
            duration: 4000,
            txHash: txHash as `0x${string}`,
          });
        }
      }, 100);
    } else if (paymentParam === "success" && !txHash) {
      // If payment=success but no txHash, just clean up URL (likely stale)
      router.replace("/dashboard");
    }
  }, [searchParams, toast, router]);

  // Redirect to landing if not connected
  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" label="Redirecting..." />
      </div>
    );
  }

  return (
    <>
      {/* Only render CelebrationEffect when we actually want to trigger it */}
      {celebrationKey > 0 && (
        <CelebrationEffect
          key={celebrationKey}
          trigger={true}
          intensity="medium"
        />
      )}
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Page Title */}
            <motion.div variants={staggerItem} className="mb-2">
              <h1 className="text-3xl font-bold tracking-tight leading-tight">
                My Wallet
              </h1>
            </motion.div>

            {/* Account Card - Mobile View */}
            <motion.div variants={staggerItem} className="md:hidden">
              <AccountDisplay />
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={staggerItem} className="w-full">
              <ActionButtons />
            </motion.div>

            {/* Balances Section */}
            <motion.div variants={staggerItem} className="space-y-4 w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight leading-tight">
                    Balances
                  </h2>
                </div>
                <FaucetButton />
              </div>

              <TokenList />
            </motion.div>
          </motion.div>
        </main>
      </div>
    </>
  );
}

export default function DashboardPage() {
  return (
    <ClientOnly>
      <DashboardContent />
    </ClientOnly>
  );
}
