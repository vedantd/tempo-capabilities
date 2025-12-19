'use client'

import { Badge } from '@/components/ui/badge'
import { FlaskConical } from 'lucide-react'

export function DemoBadge() {
  return (
    <Badge variant="secondary" className="gap-1 text-xs">
      <FlaskConical className="h-3 w-3" />
      DEMO
    </Badge>
  )
}

