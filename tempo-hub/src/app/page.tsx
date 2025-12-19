"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  SignUpButton,
  SignInButton,
  ConnectWalletButton,
} from "@/components/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Shield, Clock, DollarSign } from "lucide-react";
import {
  pageVariants,
  pageTransition,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

export default function LandingPage() {
  const { isConnected } = useAccount();
  const router = useRouter();

  // Redirect to dashboard if already connected
  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  return (
    <motion.main
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md space-y-8"
        >
          {/* Logo & Title */}
          <motion.div variants={staggerItem} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-4"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight">TempoHub</h1>
            <p className="text-lg text-muted-foreground">
              Payments with passkey security
            </p>
          </motion.div>

          {/* Auth Card */}
          <motion.div variants={staggerItem}>
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">Get Started</CardTitle>
                <CardDescription>
                  Create or access your account with FaceID
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <SignUpButton />
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      or
                    </span>
                  </div>
                </div>
                <SignInButton />
                <div className="pt-4">
                  <ConnectWalletButton />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            <FeatureCard
              icon={<Shield className="w-5 h-5" />}
              title="Secure"
              description="Hardware-backed passkeys"
            />
            <FeatureCard
              icon={<Clock className="w-5 h-5" />}
              title="Fast"
              description="~0.5s finality"
            />
            <FeatureCard
              icon={<DollarSign className="w-5 h-5" />}
              title="Gasless"
              description="No ETH needed"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="py-6 text-center text-sm text-muted-foreground border-t border-border/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          Built on{" "}
          <span className="text-primary font-medium">Tempo Blockchain</span>
        </p>
      </motion.footer>
    </motion.main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card/30 border border-border/30">
      <div className="text-primary mb-2">{icon}</div>
      <p className="font-medium text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
