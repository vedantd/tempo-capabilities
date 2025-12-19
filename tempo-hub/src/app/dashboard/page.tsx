"use client";

import { useAccount } from "wagmi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/contexts/toast-context";
import Link from "next/link";
import { Header } from "@/components/layout";
import { AccountDisplay } from "@/components/auth";
import { TokenList, FaucetButton } from "@/components/wallet";
import { ActionButtons } from "@/components/dashboard/action-buttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClientOnly } from "@/components/client-only";
import {
  pageVariants,
  pageTransition,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

function DashboardContent() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (searchParams.get("payment") === "success") {
      toast({
        title: "Payment sent successfully!",
        description: "Your transaction has been finalized.",
        variant: "success",
        duration: 5000,
      });
      // Clean up URL
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
        <div className="text-center">
          <p className="text-muted-foreground">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Welcome Section */}
          <motion.div variants={staggerItem} className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your stablecoin balances and send payments
            </p>
          </motion.div>

          {/* Account Card - Mobile View */}
          <motion.div variants={staggerItem} className="md:hidden">
            <AccountDisplay />
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={staggerItem}>
            <ActionButtons />
          </motion.div>

          {/* Balances Section */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Your Balances</h2>
                <p className="text-sm text-muted-foreground">
                  TIP-20 stablecoin holdings
                </p>
              </div>
              <FaucetButton />
            </div>

            <TokenList />
          </motion.div>

          {/* Info Card */}
          <motion.div variants={staggerItem}>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg">About Tempo</CardTitle>
                <CardDescription>
                  Key features of the Tempo blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                      1
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Instant Finality
                      </strong>{" "}
                      — Transactions confirm in ~0.5 seconds with no
                      reorganizations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                      2
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Pay Fees in Stablecoins
                      </strong>{" "}
                      — No ETH needed, pay gas in any supported stablecoin
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                      3
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Native TIP-20 Tokens
                      </strong>{" "}
                      — Extended ERC-20 with memos, rewards, and compliance
                      features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                      4
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Passkey Authentication
                      </strong>{" "}
                      — Hardware-backed security without seed phrases
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}

export default function DashboardPage() {
  return (
    <ClientOnly>
      <DashboardContent />
    </ClientOnly>
  );
}
