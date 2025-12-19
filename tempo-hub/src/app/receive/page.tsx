"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout";
import { QRCode } from "@/components/receive/qr-code";
import { TransactionFeedWithToast } from "@/components/receive/transaction-feed-with-toast";
import { SimulateReceive } from "@/components/receive/simulate-receive";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Copy, Check, QrCode } from "lucide-react";
import { ClientOnly } from "@/components/client-only";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

function ReceiveContent() {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const { copied, copy: copyToClipboard } = useCopyToClipboard();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  if (!isConnected || !address) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" label="Redirecting..." />
      </div>
    );
  }

  const copyAddress = () => {
    copyToClipboard(address);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Back Button */}
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>

          {/* Header */}
          <motion.div variants={staggerItem} className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Receive Payments
            </h1>
            <p className="text-muted-foreground">
              Share your address or scan QR code
            </p>
          </motion.div>

          {/* Address Card */}
          <motion.div variants={staggerItem}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Your Address
                </CardTitle>
                <CardDescription>
                  Share this address to receive payments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* QR Code */}
                <div className="flex justify-center">
                  <QRCode value={address} size={240} />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                    <code className="flex-1 font-mono text-sm break-all">
                      {address}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyAddress}
                      className="shrink-0"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    {copied ? "Address copied!" : "Click to copy address"}
                  </p>
                </div>

                {/* Simulation (Demo Mode Only) */}
                <SimulateReceive />
              </CardContent>
            </Card>
          </motion.div>

          {/* Transaction Feed */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">
                Recent Incoming Transactions
              </h2>
              <p className="text-sm text-muted-foreground">
                Live updates of payments received to this address
              </p>
            </div>
            <TransactionFeedWithToast />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default function ReceivePage() {
  return (
    <ClientOnly>
      <ReceiveContent />
    </ClientOnly>
  );
}
