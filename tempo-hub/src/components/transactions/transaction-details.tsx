"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Layers,
  Coins,
  Clock,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { TOKEN_INFO } from "@/lib/constants/tokens";
import { TEMPO_EXPLORER_URL } from "@/lib/constants";
import { truncateAddress } from "@/lib/utils/address";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import type { TempoTransaction } from "@/types/transactions";
import { cn, formatTokenBalance } from "@/lib/utils";

interface TransactionDetailsProps {
  transaction: TempoTransaction;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransactionDetails({
  transaction,
  open,
  onOpenChange,
}: TransactionDetailsProps) {
  const { copied: copiedFrom, copy: copyFrom } = useCopyToClipboard();
  const { copied: copiedTo, copy: copyTo } = useCopyToClipboard();
  const { copied: copiedHash, copy: copyHash } = useCopyToClipboard();

  const tokenInfo =
    TOKEN_INFO[transaction.token.toLowerCase() as keyof typeof TOKEN_INFO];
  const isSent = transaction.type === "sent";
  const timestamp = transaction.blockTimestamp
    ? new Date(Number(transaction.blockTimestamp) * 1000)
    : new Date(transaction.timestamp);

  const copyToClipboard = (text: string, type: "from" | "to" | "hash") => {
    if (type === "from") copyFrom(text);
    else if (type === "to") copyTo(text);
    else copyHash(text);
  };

  const getCopiedState = (type: "from" | "to" | "hash") => {
    if (type === "from") return copiedFrom;
    if (type === "to") return copiedTo;
    return copiedHash;
  };

  const explorerUrl = `${TEMPO_EXPLORER_URL}/tx/${transaction.hash}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Transaction Details
            {isSent ? (
              <Badge variant="destructive">Sent</Badge>
            ) : (
              <Badge variant="default" className="bg-success">
                Received
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>
            Complete information about this Tempo transaction
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Amount */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Amount</div>
            <div
              className={cn(
                "text-2xl font-bold",
                isSent ? "text-destructive" : "text-success"
              )}
            >
              {isSent ? "-" : "+"}$
              {formatTokenBalance(transaction.formattedAmount)}
            </div>
          </div>

          {/* Note */}
          {transaction.memo && (
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground mb-2">Note</div>
              <p className="text-base font-medium">
                &ldquo;{transaction.memo}&rdquo;
              </p>
            </div>
          )}

          {/* Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2">From</div>
              <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
                <code className="text-xs font-mono flex-1 truncate">
                  {transaction.from}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => copyToClipboard(transaction.from, "from")}
                >
                  {getCopiedState("from") ? (
                    <Check className="h-4 w-4 text-success" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">To</div>
              <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
                <code className="text-xs font-mono flex-1 truncate">
                  {transaction.to}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => copyToClipboard(transaction.to, "to")}
                >
                  {getCopiedState("to") ? (
                    <Check className="h-4 w-4 text-success" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Transaction Hash */}
          <div>
            <div className="text-sm text-muted-foreground mb-2">
              Transaction Hash
            </div>
            <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
              <code className="text-xs font-mono flex-1 truncate">
                {transaction.hash}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => copyToClipboard(transaction.hash, "hash")}
              >
                {getCopiedState("hash") ? (
                  <Check className="h-4 w-4 text-success" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => window.open(explorerUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tempo-Specific Details */}
          <div className="space-y-3">
            <div className="text-sm font-semibold">Tempo-Specific Details</div>

            <div className="grid grid-cols-2 gap-4">
              {transaction.blockNumber && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    Block Number
                  </div>
                  <div className="text-sm font-mono">
                    #{transaction.blockNumber.toString()}
                  </div>
                </div>
              )}

              <div>
                <div className="text-xs text-muted-foreground mb-1">
                  Timestamp
                </div>
                <div className="text-sm">
                  {formatDistanceToNow(timestamp, { addSuffix: true })}
                </div>
              </div>

              {transaction.gasUsed && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    Gas Used
                  </div>
                  <div className="text-sm font-mono">
                    {transaction.gasUsed.toString()}
                  </div>
                </div>
              )}

              {transaction.finalityTime && (
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    Finality Time
                  </div>
                  <div className="text-sm text-success font-semibold">
                    <Clock className="h-3 w-3 inline mr-1" />
                    {transaction.finalityTime}ms
                  </div>
                </div>
              )}
            </div>

            {/* Tempo Features */}
            <div className="flex flex-wrap gap-2 pt-2">
              {transaction.sponsored && (
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  Sponsored Transaction
                </Badge>
              )}
              {transaction.batchCalls && transaction.batchCalls > 1 && (
                <Badge variant="secondary" className="gap-1">
                  <Layers className="h-3 w-3" />
                  Batch Calls: {transaction.batchCalls}
                </Badge>
              )}
              {transaction.feeToken && (
                <Badge variant="outline" className="gap-1">
                  <Coins className="h-3 w-3" />
                  Fee Token: USD
                </Badge>
              )}
              {transaction.transactionType === "tempo" && (
                <Badge variant="outline">Tempo Transaction (0x76)</Badge>
              )}
              {transaction.nonceKey && (
                <Badge variant="outline">
                  Nonce Key: {transaction.nonceKey.toString()}
                </Badge>
              )}
            </div>
          </div>

          {/* Explorer Link */}
          <div className="pt-4 border-t">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(explorerUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View on Explorer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
