"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { TOKENS, TOKEN_INFO } from "@/lib/constants/tokens";
import type { TransactionType } from "@/types/transactions";

interface TransactionFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  typeFilter: TransactionType | "all";
  onTypeFilterChange: (type: TransactionType | "all") => void;
  tokenFilter: string | "all";
  onTokenFilterChange: (token: string | "all") => void;
}

export function TransactionFilters({
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  tokenFilter,
  onTokenFilterChange,
}: TransactionFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by note, address, or hash..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Type Filter */}
      <Select
        value={typeFilter}
        onValueChange={(value) =>
          onTypeFilterChange(value as TransactionType | "all")
        }
      >
        <SelectTrigger className="w-[140px]">
          <Filter className="h-4 w-4 mr-2" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="sent">Sent</SelectItem>
          <SelectItem value="received">Received</SelectItem>
        </SelectContent>
      </Select>

      {/* Token Filter */}
      <Select
        value={tokenFilter}
        onValueChange={(value) => onTokenFilterChange(value)}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="All Tokens" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Tokens</SelectItem>
          {Object.entries(TOKENS).map(([key, address]) => (
            <SelectItem key={key} value={address}>
              {TOKEN_INFO[address as keyof typeof TOKEN_INFO]?.symbol || key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
