"use client";

import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Coins,
  Clock,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn, formatTokenBalance } from "@/lib/utils";
import { TOKEN_INFO } from "@/lib/constants/tokens";
import { truncateAddress } from "@/lib/utils/address";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import type { TempoTransaction } from "@/types/transactions";
import { TransactionDetails } from "./transaction-details";

interface TransactionCardProps {
  transaction: TempoTransaction;
}

export const TransactionCard = memo(function TransactionCard({
  transaction,
}: TransactionCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { copied, copy } = useCopyToClipboard();

  const tokenInfo =
    TOKEN_INFO[transaction.token.toLowerCase() as keyof typeof TOKEN_INFO];
  const isSent = transaction.type === "sent";
  const timeAgo = transaction.blockTimestamp
    ? formatDistanceToNow(new Date(Number(transaction.blockTimestamp) * 1000), {
        addSuffix: true,
      })
    : formatDistanceToNow(new Date(transaction.timestamp), { addSuffix: true });

  const copyHash = () => {
    copy(transaction.hash);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          className={cn(
            "hover:bg-card/50 transition-all cursor-pointer",
            expanded && "bg-card/80"
          )}
          onClick={() => setExpanded(!expanded)}
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              {/* Transaction Type Icon */}
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full shrink-0",
                  isSent ? "bg-destructive/20" : "bg-success/20"
                )}
              >
                {isSent ? (
                  <ArrowUpRight
                    className={cn(
                      "h-6 w-6",
                      isSent ? "text-destructive" : "text-success"
                    )}
                  />
                ) : (
                  <ArrowDownLeft className="h-6 w-6 text-success" />
                )}
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p
                        className={cn(
                          "font-semibold text-lg",
                          isSent ? "text-destructive" : "text-success"
                        )}
                      >
                        {isSent ? "-" : "+"}$
                        {formatTokenBalance(transaction.formattedAmount)}
                      </p>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="font-mono truncate">
                        {isSent
                          ? `To: ${truncateAddress(transaction.to)}`
                          : `From: ${truncateAddress(transaction.from)}`}
                      </span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{timeAgo}</span>
                      </div>
                    </div>

                    {/* Note - Prominently Displayed */}
                    {transaction.memo && (
                      <div className="mb-2 p-2 bg-muted/50 rounded-md border border-border/50">
                        <p className="text-sm font-medium text-foreground">
                          &ldquo;{transaction.memo}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Tempo-Specific Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      {transaction.sponsored && (
                        <Badge variant="secondary" className="gap-1">
                          <Sparkles className="h-3 w-3" />
                          Sponsored
                        </Badge>
                      )}
                      {transaction.batchCalls && transaction.batchCalls > 1 && (
                        <Badge variant="secondary" className="gap-1">
                          <Layers className="h-3 w-3" />
                          Batch ({transaction.batchCalls})
                        </Badge>
                      )}
                      {transaction.feeToken && (
                        <Badge variant="outline" className="gap-1">
                          <Coins className="h-3 w-3" />
                          Fee: USD
                        </Badge>
                      )}
                      {transaction.transactionType === "tempo" && (
                        <Badge variant="outline" className="gap-1">
                          Tempo Tx
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyHash();
                      }}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded(!expanded);
                      }}
                    >
                      {expanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-border/50 mt-3">
                        <div className="space-y-2 text-xs text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Transaction Hash:</span>
                            <span className="font-mono">
                              {transaction.hash.slice(0, 10)}...
                              {transaction.hash.slice(-8)}
                            </span>
                          </div>
                          {transaction.blockNumber && (
                            <div className="flex justify-between">
                              <span>Block:</span>
                              <span>#{transaction.blockNumber.toString()}</span>
                            </div>
                          )}
                          {transaction.gasUsed && (
                            <div className="flex justify-between">
                              <span>Gas Used:</span>
                              <span>{transaction.gasUsed.toString()}</span>
                            </div>
                          )}
                          {transaction.finalityTime && (
                            <div className="flex justify-between">
                              <span>Finality:</span>
                              <span className="text-success">
                                {transaction.finalityTime}ms
                              </span>
                            </div>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDetails(true);
                          }}
                        >
                          View Full Details
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Transaction Details Modal */}
      <TransactionDetails
        transaction={transaction}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
});
