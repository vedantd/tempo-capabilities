'use client'

import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Gift, Sparkles } from 'lucide-react'

interface SponsorToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function SponsorToggle({ checked, onChange }: SponsorToggleProps) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
      checked 
        ? 'bg-success/10 border-success/30' 
        : 'bg-muted/50 border-border'
    }`}>
      <div className="flex items-center gap-3">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
          checked ? 'bg-success/20' : 'bg-muted'
        }`}>
          {checked ? (
            <Sparkles className="h-5 w-5 text-success" />
          ) : (
            <Gift className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        <div>
          <Label htmlFor="sponsor" className="font-medium cursor-pointer">
            Gasless Transaction
          </Label>
          <p className="text-sm text-muted-foreground">
            {checked ? 'App is paying your fee!' : 'App pays the fee for you'}
          </p>
        </div>
      </div>
      <Switch
        id="sponsor"
        checked={checked}
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-success"
      />
    </div>
  )
}

