"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import { AccountDisplay } from "@/components/auth";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { isConnected } = useAccount();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">TempoHub</span>
          </Link>

          {/* Navigation - only show when connected */}
          {isConnected && (
            <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
              <Link
                href="/dashboard"
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === "/dashboard"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Dashboard
              </Link>
              <Link
                href="/send"
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === "/send"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Send
              </Link>
              <Link
                href="/receive"
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === "/receive"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Receive
              </Link>
            </nav>
          )}

          {/* Account Display */}
          {isConnected && (
            <div className="hidden md:flex items-center py-2.5 shrink-0">
              <AccountDisplay />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
