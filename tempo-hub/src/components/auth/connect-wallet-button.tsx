'use client'

import { useConnect, useConnectors } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Wallet, Loader2 } from 'lucide-react'

export function ConnectWalletButton() {
  const { connect, isPending, error } = useConnect()
  const connectors = useConnectors()
  
  // Find MetaMask or any injected connector
  const walletConnector = connectors.find(c => c.id === 'metaMask' || c.id === 'injected')
  
  const handleConnect = () => {
    if (!walletConnector) return
    connect({ connector: walletConnector })
  }
  
  if (!walletConnector) return null
  
  return (
    <div className="space-y-2">
      <Button 
        onClick={handleConnect}
        disabled={isPending}
        variant="ghost"
        size="lg"
        className="w-full text-muted-foreground hover:text-foreground"
      >
        {isPending ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Wallet className="mr-2 h-5 w-5" />
        )}
        Connect Wallet
      </Button>
      
      {error && (
        <p className="text-sm text-destructive text-center">
          {error.message}
        </p>
      )}
    </div>
  )
}

