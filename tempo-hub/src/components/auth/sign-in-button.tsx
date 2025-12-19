"use client";

import { useConnect, useConnectors } from "wagmi";
import { Button } from "@/components/ui/button";
import { LogIn, Loader2 } from "lucide-react";

export function SignInButton() {
  const { connect, isPending, error } = useConnect();
  const connectors = useConnectors();

  // Find the webAuthn connector
  const webAuthnConnector =
    connectors.find((c) => c.id === "webAuthn") || connectors[0];

  const handleSignIn = () => {
    if (!webAuthnConnector) return;
    // No capabilities = sign-in flow (use existing passkey)
    connect({ connector: webAuthnConnector });
  };

  if (!webAuthnConnector || webAuthnConnector.id !== "webAuthn") {
    return null;
  }

  return (
    <div className="space-y-2">
      <Button
        onClick={handleSignIn}
        disabled={isPending || !webAuthnConnector}
        variant="outline"
        size="lg"
        className="w-full border-primary/50 hover:bg-primary/10"
        aria-label={
          isPending ? "Signing in with FaceID" : "Sign in with FaceID"
        }
        aria-busy={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            <span>Signing in...</span>
          </>
        ) : (
          <>
            <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
            <span>Sign In with FaceID</span>
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
