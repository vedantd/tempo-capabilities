"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout";
import { AccountDisplay } from "@/components/auth";
import { TokenList, FaucetButton } from "@/components/wallet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, ArrowRight } from "lucide-react";
import { ClientOnly } from "@/components/client-only";

function DashboardContent() {
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
        <div className="text-center">
          <p className="text-muted-foreground">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your stablecoin balances and send payments
            </p>
          </div>

          {/* Account Card - Mobile View */}
          <div className="md:hidden">
            <AccountDisplay />
          </div>

          {/* Quick Actions */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold">Ready to send?</h2>
                  <p className="text-sm text-muted-foreground">
                    Transfer stablecoins instantly with ~0.5s finality
                  </p>
                </div>
                <Link href="/send">
                  <Button className="group">
                    <Send className="mr-2 h-4 w-4" />
                    Send Payment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Balances Section */}
          <div className="space-y-4">
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
          </div>

          {/* Info Card */}
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
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ClientOnly>
      <DashboardContent />
    </ClientOnly>
  );
}
