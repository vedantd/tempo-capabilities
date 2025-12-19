"use client";

import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Droplets, Loader2, Check, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useDemoMode } from "@/contexts/demo-context";
import { DemoBadge } from "@/components/demo/demo-badge";
import { TEMPO_RPC_URL } from "@/lib/constants";

async function requestFaucet(
  address: string
): Promise<{ success: boolean; message: string }> {
  const response = await fetch(TEMPO_RPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "tempo_fundAddress",
      params: [address],
      id: 1,
    }),
  });

  if (!response.ok) {
    throw new Error("Faucet request failed");
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message || "Faucet request failed");
  }

  return { success: true, message: "Tokens received!" };
}

export function FaucetButton() {
  const { address } = useAccount();
  const { isDemoMode } = useDemoMode();
  const queryClient = useQueryClient();
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate, isPending, error, reset } = useMutation({
    mutationFn: () => requestFaucet(address!),
    onSuccess: () => {
      setShowSuccess(true);
      // Refresh balances after faucet
      queryClient.invalidateQueries({ queryKey: ["tokenBalances"] });
      // Reset success state after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        reset();
      }, 3000);
    },
    onError: () => {
      // Reset error after 5 seconds
      setTimeout(() => reset(), 5000);
    },
  });

  if (!address || !isDemoMode) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-2">
        <DemoBadge />
      </div>
      <Button
        onClick={() => mutate()}
        disabled={isPending || showSuccess}
        variant="outline"
        className="w-full border-primary/50 hover:bg-primary/10"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Requesting...
          </>
        ) : showSuccess ? (
          <>
            <Check className="mr-2 h-4 w-4 text-success" />
            Tokens Received!
          </>
        ) : (
          <>
            <Droplets className="mr-2 h-4 w-4" />
            Get Test Tokens
          </>
        )}
      </Button>

      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
}
