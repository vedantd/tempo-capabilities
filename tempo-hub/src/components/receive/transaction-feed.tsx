"use client";

import { useIncomingTransactions } from "@/hooks/use-incoming-transactions";
import { Card, CardContent } from "@/components/ui/card";
import { SkeletonRow } from "@/components/ui/skeleton";
import { DollarSign, Clock, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { TOKEN_INFO } from "@/lib/constants/tokens";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { formatTokenBalance } from "@/lib/utils";

export function TransactionFeed() {
  const { transactions, isLoading, error } = useIncomingTransactions();

  if (isLoading) {
    return (
      <motion.div
        className="space-y-3"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div key={i} variants={staggerItem}>
            <SkeletonRow />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (error) {
    const isRateLimit =
      error.message?.includes("429") ||
      error.message?.includes("rate limit") ||
      error.message?.includes("rate limited");

    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          {isRateLimit ? (
            <>
              <p className="font-medium mb-2">Rate limit reached</p>
              <p className="text-sm">
                Too many requests. Transactions will resume automatically
                shortly.
              </p>
            </>
          ) : (
            <p>Error loading transactions: {error.message}</p>
          )}
        </CardContent>
      </Card>
    );
  }

  if (transactions.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          <DollarSign className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p className="font-medium">No incoming transactions yet</p>
          <p className="text-sm mt-1">
            Transactions will appear here when you receive payments
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      className="space-y-3"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {transactions.map((tx, index) => {
        const tokenInfo = TOKEN_INFO[tx.token as keyof typeof TOKEN_INFO];
        const timeAgo = formatDistanceToNow(new Date(tx.timestamp), {
          addSuffix: true,
        });

        return (
          <motion.div
            key={tx.id}
            variants={staggerItem}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:bg-card/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success/20 shrink-0">
                      <DollarSign className="h-5 w-5 text-success" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-lg">
                          +${formatTokenBalance(tx.formattedAmount)}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="font-mono truncate max-w-[120px]">
                            {tx.from.slice(0, 6)}...{tx.from.slice(-4)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{timeAgo}</span>
                        </div>
                      </div>
                      {tx.memo && (
                        <p className="text-sm text-muted-foreground mt-2 italic">
                          "{tx.memo}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
