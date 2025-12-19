"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare } from "lucide-react";

interface MemoInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function MemoInput({ value, onChange }: MemoInputProps) {
  // Calculate remaining bytes (max 32 bytes for TIP-20 memo)
  const maxBytes = 32;
  const usedBytes = new TextEncoder().encode(value).length;
  const remaining = maxBytes - usedBytes;
  const isOverLimit = remaining < 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow typing but show warning if over limit
    const newBytes = new TextEncoder().encode(newValue).length;
    if (newBytes <= maxBytes) {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="note" className="flex items-center gap-2">
        <MessageSquare className="h-4 w-4" />
        Note
        <span className="text-xs text-muted-foreground font-normal">
          (optional)
        </span>
      </Label>
      <Input
        id="note"
        value={value}
        onChange={handleChange}
        placeholder="Add a note..."
        className={isOverLimit ? "border-destructive" : ""}
      />
      {remaining <= 6 && (
        <div className="text-xs">
          <span
            className={`${
              remaining <= 5 || isOverLimit
                ? "text-destructive"
                : "text-amber-500"
            }`}
          >
            {remaining} characters remaining
          </span>
        </div>
      )}
    </div>
  );
}
