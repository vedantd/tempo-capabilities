"use client";

import { Suspense } from "react";
import { useAccount } from "wagmi";
import { useRouter, useSearchParams } from "next/navigation";

// Force dynamic rendering - this page requires authentication
export const dynamic = "force-dynamic";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/contexts/toast-context";
import { CelebrationEffect } from "@/components/ui/celebration-effect";
import { AccountDisplay } from "@/components/auth";
import { TokenList, FaucetButton } from "@/components/wallet";
import { ActionButtons } from "@/components/dashboard/action-buttons";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SkeletonCard } from "@/components/ui/skeleton";
import {
  STORAGE_KEYS,
  getSessionStorage,
  setSessionStorage,
} from "@/lib/utils/session-storage";

// Separate component for search params handling to minimize Suspense blocking
function PaymentSuccessHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  const [celebrationKey, setCelebrationKey] = useState(0);
  const processedTxHashRef = useRef<string | null>(null);
  const hasInitializedRef = useRef(false);

  // Initialize processed txHash from sessionStorage on mount
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;
    const stored = getSessionStorage<string>(
      STORAGE_KEYS.payment.processedTxHash
    );
    if (stored) {
      processedTxHashRef.current = stored;
    }
  }, []);

  // Handle payment success redirect and URL cleanup
  useEffect(() => {
    // Skip if not initialized yet
    if (!hasInitializedRef.current) return;

    const paymentParam = searchParams.get("payment");
    const txHash = searchParams.get("txHash");

    // If no payment params, nothing to do
    if (!paymentParam) return;

    // Clean up URL if it's stale or already processed
    const stored = getSessionStorage<string>(
      STORAGE_KEYS.payment.processedTxHash
    );
    const isAlreadyProcessed =
      txHash && (txHash === processedTxHashRef.current || txHash === stored);
    const isStale = paymentParam === "success" && !txHash;

    if (isAlreadyProcessed || isStale) {
      // Clean up URL only if we're not already on clean dashboard URL
      if (paymentParam || txHash) {
        router.replace("/dashboard");
      }
      return;
    }

    // Process new successful payment
    if (paymentParam === "success" && txHash) {
      // Mark as processed immediately to prevent double processing
      processedTxHashRef.current = txHash;
      setSessionStorage(STORAGE_KEYS.payment.processedTxHash, txHash);

      // Clean up URL immediately
      router.replace("/dashboard");

      // Trigger celebration and toast after a brief delay
      setTimeout(() => {
        if (processedTxHashRef.current === txHash) {
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
    }
  }, [searchParams, toast, router]);

  // Render celebration effect if needed
  return (
    <>
      {celebrationKey > 0 && (
        <CelebrationEffect
          key={celebrationKey}
          trigger={true}
          intensity="medium"
        />
      )}
    </>
  );
}

function DashboardContentInner() {
  const { isConnected } = useAccount();
  const router = useRouter();

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
      {/* Payment success handler - wrapped in Suspense to minimize blocking */}
      <Suspense fallback={null}>
        <PaymentSuccessHandler />
      </Suspense>

      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="visible"
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
  // Since we're using force-dynamic, render immediately
  // Only wrap the search params handler in Suspense
  return <DashboardContentInner />;
}
