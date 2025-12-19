"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Loader2,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ArrowLeft,
  Fingerprint,
  Send,
  Clock,
} from "lucide-react";
import { type TransactionStatus as TxStatus } from "@/hooks/use-send-payment";
import { TEMPO_EXPLORER_URL } from "@/lib/constants";

interface TransactionStatusProps {
  status: TxStatus;
  txHash: `0x${string}` | undefined;
  error: Error | null;
  onReset: () => void;
}

const STATUS_CONFIG = {
  idle: {
    icon: null,
    title: "",
    description: "",
  },
  preparing: {
    icon: <Loader2 className="h-16 w-16 animate-spin text-primary" />,
    title: "Preparing Transaction...",
    description: "Building your payment",
  },
  signing: {
    icon: <Fingerprint className="h-16 w-16 animate-pulse text-primary" />,
    title: "Confirm with FaceID",
    description: "Authenticate to sign the transaction",
  },
  sending: {
    icon: <Send className="h-16 w-16 animate-bounce text-primary" />,
    title: "Sending Payment...",
    description: "Broadcasting to the network",
  },
  confirming: {
    icon: <Clock className="h-16 w-16 animate-pulse text-primary" />,
    title: "Confirming...",
    description: "Waiting for finality",
  },
  success: {
    icon: <CheckCircle2 className="h-16 w-16 text-success" />,
    title: "Payment Sent!",
    description: "Finalized in ~0.5 seconds",
  },
  error: {
    icon: <XCircle className="h-16 w-16 text-destructive" />,
    title: "Transaction Failed",
    description: "Something went wrong",
  },
};

export function TransactionStatus({
  status,
  txHash,
  error,
  onReset,
}: TransactionStatusProps) {
  const config = STATUS_CONFIG[status];
  const explorerUrl = txHash ? `${TEMPO_EXPLORER_URL}/tx/${txHash}` : null;

  if (status === "idle") {
    return null;
  }

  return (
    <Card className="border-border/50">
      <CardContent className="pt-8 pb-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Status Icon */}
          <div className="relative">
            {config.icon}
            {status === "success" && (
              <div className="absolute -inset-4 bg-success/20 rounded-full animate-ping" />
            )}
          </div>

          {/* Status Text */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{config.title}</h3>
            <p className="text-muted-foreground">
              {error ? error.message : config.description}
            </p>
          </div>

          {/* Transaction Hash */}
          {txHash && (
            <div className="w-full p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">
                Transaction Hash
              </p>
              <p className="font-mono text-sm break-all">
                {txHash.slice(0, 10)}...{txHash.slice(-8)}
              </p>
            </div>
          )}

          {/* Explorer Link */}
          {explorerUrl && status === "success" && (
            <a
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              View on Explorer
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {/* Finality Badge */}
          {status === "success" && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success/10 text-success rounded-full text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Final - No confirmations needed
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={onReset}
              variant={status === "error" ? "default" : "outline"}
              size="lg"
              className="min-w-[160px]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {status === "error" ? "Try Again" : "Send Another"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
