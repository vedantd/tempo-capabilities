"use client";

import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { Copy, LogOut, Check, Fingerprint, Wallet } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { truncateAddress } from "@/lib/utils/address";

export function AccountDisplay() {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { copied, copy } = useCopyToClipboard();

  if (!address) return null;

  const truncatedAddress = truncateAddress(address);
  const isPasskey = connector?.id === "webAuthn";

  const copyAddress = () => {
    copy(address);
  };

  return (
    <div className="flex items-center gap-2.5 px-3 py-1.5 bg-card rounded-lg border border-border shadow-sm">
      {/* Connection indicator */}
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/20 shrink-0">
        {isPasskey ? (
          <Fingerprint className="w-4 h-4 text-success" />
        ) : (
          <Wallet className="w-4 h-4 text-success" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-medium text-muted-foreground mb-0.5 leading-tight">
          {isPasskey ? "Passkey Account" : connector?.name || "Connected"}
        </p>
        <p className="font-mono text-xs font-semibold truncate leading-tight">
          {truncatedAddress}
        </p>
      </div>

      <div className="flex items-center gap-0.5 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={copyAddress}
          className="h-7 w-7"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-success" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => disconnect()}
          className="h-7 w-7"
        >
          <LogOut className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}
