'use client'

import { useAccount, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Copy, LogOut, Check, Fingerprint, Wallet } from 'lucide-react'
import { useState } from 'react'

export function AccountDisplay() {
  const { address, connector } = useAccount()
  const { disconnect } = useDisconnect()
  const [copied, setCopied] = useState(false)
  
  if (!address) return null
  
  const truncatedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`
  const isPasskey = connector?.id === 'webAuthn'
  
  const copyAddress = async () => {
    await navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
      {/* Connection indicator */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success/20">
        {isPasskey ? (
          <Fingerprint className="w-5 h-5 text-success" />
        ) : (
          <Wallet className="w-5 h-5 text-success" />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">
          {isPasskey ? 'Passkey Account' : connector?.name || 'Connected'}
        </p>
        <p className="font-mono font-medium truncate">{truncatedAddress}</p>
      </div>
      
      <Button variant="ghost" size="icon" onClick={copyAddress} className="shrink-0">
        {copied ? (
          <Check className="h-4 w-4 text-success" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
      
      <Button variant="ghost" size="icon" onClick={() => disconnect()} className="shrink-0">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  )
}

