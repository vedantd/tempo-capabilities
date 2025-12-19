"use client";

import { useConnect, useConnectors } from "wagmi";
import { Button } from "@/components/ui/button";
import { Fingerprint, Loader2 } from "lucide-react";

export function SignUpButton() {
  const { connect, isPending, error } = useConnect();
  const connectors = useConnectors();

  // Find the webAuthn connector (it's typically the first one)
  const webAuthnConnector =
    connectors.find((c) => c.id === "webAuthn") || connectors[0];

  const handleSignUp = () => {
    if (!webAuthnConnector) return;
    connect({
      connector: webAuthnConnector,
      capabilities: { type: 'sign-up' },
    });
  };

  if (!webAuthnConnector || webAuthnConnector.id !== "webAuthn") {
    return null;
  }

  return (
    <div className="space-y-2">
      <Button
        onClick={handleSignUp}
        disabled={isPending || !webAuthnConnector}
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        aria-label={
          isPending
            ? "Creating account with FaceID"
            : "Create account with FaceID"
        }
        aria-busy={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            <span>Creating account...</span>
          </>
        ) : (
          <>
            <Fingerprint className="mr-2 h-5 w-5" aria-hidden="true" />
            <span>Create with FaceID</span>
          </>
        )}
      </Button>

      {error && (
        <p
          className="text-sm text-destructive text-center"
          role="alert"
          aria-live="polite"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
