'use client'

import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

interface DemoToggleProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label?: string
}

export function DemoToggle({ checked, onCheckedChange, label = 'Demo Mode' }: DemoToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <Switch
        id="demo-mode"
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={label}
      />
      <Label htmlFor="demo-mode" className="cursor-pointer">
        {label}
      </Label>
    </div>
  )
}

