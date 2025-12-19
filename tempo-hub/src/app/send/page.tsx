"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout";
import { ModernSendForm } from "@/components/payments/modern-send-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ClientOnly } from "@/components/client-only";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/lib/motion";

function SendContent() {
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
    <motion.div
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Back Button */}
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>

          {/* Modern Send Form */}
          <ModernSendForm />

          {/* Help Text */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Need test tokens?{" "}
              <Link href="/dashboard" className="text-primary hover:underline">
                Get them from the faucet
              </Link>
            </p>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default function SendPage() {
  return (
    <ClientOnly>
      <SendContent />
    </ClientOnly>
  );
}
