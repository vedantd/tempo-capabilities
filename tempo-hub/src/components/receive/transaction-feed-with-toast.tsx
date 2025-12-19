"use client";

import { useEffect, useRef, useState } from "react";
import { useIncomingTransactions } from "@/hooks/use-incoming-transactions";
import { useToast } from "@/contexts/toast-context";
import { TransactionFeed } from "./transaction-feed";
import { TOKEN_INFO } from "@/lib/constants/tokens";
import { formatTokenBalance } from "@/lib/utils";
import { CelebrationEffect } from "@/components/ui/celebration-effect";

export function TransactionFeedWithToast() {
  const { transactions } = useIncomingTransactions();
  const { toast } = useToast();
  const lastTxIdRef = useRef<string | null>(null);
  const [celebrationKey, setCelebrationKey] = useState(0);

  useEffect(() => {
    if (transactions.length > 0) {
      const latestTx = transactions[0];
      // Only show toast for new transactions (not on initial load)
      if (lastTxIdRef.current !== null && latestTx.id !== lastTxIdRef.current) {
        lastTxIdRef.current = latestTx.id;

        // Extract transaction hash from txId (format: "hash-logIndex")
        const txHash = latestTx.id.split("-")[0];
        const tokenInfo = TOKEN_INFO[latestTx.token as keyof typeof TOKEN_INFO];

        // Trigger celebration by incrementing key
        setCelebrationKey((prev) => prev + 1);

        toast({
          title: `Received $${formatTokenBalance(latestTx.formattedAmount)}`,
          description:
            latestTx.memo ||
            `From ${latestTx.from.slice(0, 6)}...${latestTx.from.slice(-4)}`,
          variant: "success",
          duration: 4000,
          txHash, // Pass txHash to prevent duplicates
        });
      } else if (lastTxIdRef.current === null) {
        // Initialize with first transaction (don't show toast)
        lastTxIdRef.current = latestTx.id;
      }
    }
  }, [transactions, toast]);

  return (
    <>
      <CelebrationEffect
        key={celebrationKey}
        trigger={true}
        intensity="medium"
      />
      <TransactionFeed />
    </>
  );
}
