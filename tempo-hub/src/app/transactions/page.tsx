"use client";

import { useState, useMemo, useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useTransactionHistory } from "@/hooks/use-transaction-history";
import type { TransactionType, TempoTransaction } from "@/types/transactions";
import { TransactionCard } from "@/components/transactions/transaction-card";
import { TransactionFilters } from "@/components/transactions/transaction-filters";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton, SkeletonRow } from "@/components/ui/skeleton";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { History } from "lucide-react";
import { ClientOnly } from "@/components/client-only";
import { motion } from "framer-motion";
import {
  transactionsPageVariants,
  pageTransitionConfig,
} from "@/lib/motion-page-transitions";
import { staggerContainer, staggerItem } from "@/lib/motion";
import {
  STORAGE_KEYS,
  getSessionStorage,
  setSessionStorage,
} from "@/lib/utils/session-storage";
import { Button } from "@/components/ui/button";

interface FilterState {
  searchQuery: string;
  typeFilter: TransactionType | "all";
  tokenFilter: string | "all";
}

const INITIAL_TRANSACTIONS = 6;
const LOAD_MORE_INCREMENT = 10;

function TransactionsContent() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const { transactions, isLoading, error } = useTransactionHistory();

  // Redirect to landing if not connected
  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  // Load filter state from sessionStorage on mount
  const storedFilters = getSessionStorage<FilterState>(
    STORAGE_KEYS.filters.transactions
  );
  const [searchQuery, setSearchQuery] = useState(
    storedFilters?.searchQuery || ""
  );
  const [typeFilter, setTypeFilter] = useState<TransactionType | "all">(
    storedFilters?.typeFilter || "all"
  );
  const [tokenFilter, setTokenFilter] = useState<string | "all">(
    storedFilters?.tokenFilter || "all"
  );
  const [visibleCount, setVisibleCount] = useState(INITIAL_TRANSACTIONS);

  // Save filter state to sessionStorage when it changes
  useEffect(() => {
    const filterState: FilterState = {
      searchQuery,
      typeFilter,
      tokenFilter,
    };
    setSessionStorage(STORAGE_KEYS.filters.transactions, filterState);
  }, [searchQuery, typeFilter, tokenFilter]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(INITIAL_TRANSACTIONS);
  }, [searchQuery, typeFilter, tokenFilter]);

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    let filtered = transactions;

    // Type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((tx) => tx.type === typeFilter);
    }

    // Token filter
    if (tokenFilter !== "all") {
      filtered = filtered.filter(
        (tx) => tx.token.toLowerCase() === tokenFilter.toLowerCase()
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((tx) => {
        const memoMatch = tx.memo?.toLowerCase().includes(query);
        const fromMatch = tx.from.toLowerCase().includes(query);
        const toMatch = tx.to.toLowerCase().includes(query);
        const hashMatch = tx.hash.toLowerCase().includes(query);
        return memoMatch || fromMatch || toMatch || hashMatch;
      });
    }

    return filtered;
  }, [transactions, typeFilter, tokenFilter, searchQuery]);

  // Group by date for display
  const groupedTransactions = useMemo(() => {
    const groups: Record<string, TempoTransaction[]> = {};

    filteredTransactions.forEach((tx) => {
      const date = tx.blockTimestamp
        ? new Date(Number(tx.blockTimestamp) * 1000).toLocaleDateString()
        : new Date(tx.timestamp).toLocaleDateString();

      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(tx);
    });

    return Object.entries(groups).sort(
      ([a], [b]) => new Date(b).getTime() - new Date(a).getTime()
    ) as [string, TempoTransaction[]][];
  }, [filteredTransactions]);

  // Flatten grouped transactions for "Show More" functionality
  const flattenedTransactions = useMemo(() => {
    return groupedTransactions.flatMap(([date, txs]) =>
      txs.map((tx) => ({ ...tx, date }))
    );
  }, [groupedTransactions]);

  // Get visible transactions
  const visibleTransactions = useMemo(() => {
    return flattenedTransactions.slice(0, visibleCount);
  }, [flattenedTransactions, visibleCount]);

  // Re-group visible transactions by date for display
  const visibleGroupedTransactions = useMemo(() => {
    const groups: Record<string, TempoTransaction[]> = {};

    visibleTransactions.forEach((tx) => {
      const date =
        tx.date ||
        (tx.blockTimestamp
          ? new Date(Number(tx.blockTimestamp) * 1000).toLocaleDateString()
          : new Date(tx.timestamp).toLocaleDateString());

      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(tx);
    });

    return Object.entries(groups).sort(
      ([a], [b]) => new Date(b).getTime() - new Date(a).getTime()
    ) as [string, TempoTransaction[]][];
  }, [visibleTransactions]);

  const hasMore = visibleCount < flattenedTransactions.length;
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_INCREMENT);
  };

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <History className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Transaction History</h2>
        <p className="text-muted-foreground">
          Please connect your account to view transactions
        </p>
      </div>
    );
  }

  if (isLoading && transactions.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Transactions</h1>
        </div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-destructive">
            Error loading transactions: {error.message}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-muted-foreground mt-1">
            {filteredTransactions.length}{" "}
            {filteredTransactions.length === 1 ? "transaction" : "transactions"}
            {hasMore && (
              <span className="ml-2">
                (Showing {visibleCount} of {filteredTransactions.length})
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Filters */}
      <TransactionFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        tokenFilter={tokenFilter}
        onTokenFilterChange={setTokenFilter}
      />

      {/* Transaction List */}
      {filteredTransactions.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <History className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-lg font-semibold mb-2">
              No transactions found
            </h3>
            <p className="text-muted-foreground">
              {searchQuery || typeFilter !== "all" || tokenFilter !== "all"
                ? "Try adjusting your filters"
                : "Your transaction history will appear here"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="space-y-6">
            {visibleGroupedTransactions.map(([date, txs]) => (
              <div key={date}>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {date}
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">
                    {txs.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {txs.map((tx) => (
                    <TransactionCard key={tx.id} transaction={tx} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMore && (
            <div className="flex justify-center pt-6">
              <Button
                variant="outline"
                size="lg"
                onClick={handleShowMore}
                className="min-w-[200px]"
              >
                Show More (
                {Math.min(
                  LOAD_MORE_INCREMENT,
                  flattenedTransactions.length - visibleCount
                )}{" "}
                more)
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function TransactionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <ClientOnly>
        <TransactionsContent />
      </ClientOnly>
    </div>
  );
}
