'use client'

import { TOKENS, TOKEN_INFO, type TokenAddress } from '@/lib/wagmi'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DollarSign } from 'lucide-react'

interface FeeTokenSelectorProps {
  label: string
  value: TokenAddress
  onChange: (value: TokenAddress) => void
  showIcon?: boolean
}

// Token colors for visual distinction
const TOKEN_COLORS: Record<string, string> = {
  pathUSD: 'bg-blue-500',
  AlphaUSD: 'bg-purple-500',
  BetaUSD: 'bg-emerald-500',
  ThetaUSD: 'bg-amber-500',
}

export function FeeTokenSelector({ 
  label, 
  value, 
  onChange, 
  showIcon = true 
}: FeeTokenSelectorProps) {
  const selectedInfo = TOKEN_INFO[value]
  
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        {showIcon && <DollarSign className="h-4 w-4" />}
        {label}
      </Label>
      <Select value={value} onValueChange={(v) => onChange(v as TokenAddress)}>
        <SelectTrigger className="w-full">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${TOKEN_COLORS[selectedInfo?.symbol] || 'bg-gray-500'}`} />
              <span className="font-medium">{selectedInfo?.symbol}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {(Object.entries(TOKENS) as [string, TokenAddress][]).map(([key, address]) => {
            const info = TOKEN_INFO[address]
            return (
              <SelectItem key={address} value={address}>
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${TOKEN_COLORS[info.symbol] || 'bg-gray-500'}`} />
                  <span className="font-medium">{info.symbol}</span>
                  <span className="text-muted-foreground text-sm">{info.name}</span>
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

