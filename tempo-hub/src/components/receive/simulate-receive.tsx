'use client'

import { useAccount } from 'wagmi'
import { useDemoMode } from '@/contexts/demo-context'
import { useIncomingTransactions } from '@/hooks/use-incoming-transactions'
import { useToast } from '@/contexts/toast-context'
import { Button } from '@/components/ui/button'
import { DemoBadge } from '@/components/demo/demo-badge'
import { Sparkles } from 'lucide-react'
import { TOKENS, TOKEN_INFO } from '@/lib/wagmi'
import { parseUnits } from 'viem'
import { type TokenAddress } from '@/lib/wagmi'

export function SimulateReceive() {
  const { address } = useAccount()
  const { isDemoMode } = useDemoMode()
  const { addTransaction } = useIncomingTransactions()
  const { toast } = useToast()

  if (!isDemoMode) return null

  const handleSimulate = () => {
    // Pick a random token
    const tokenAddresses = Object.values(TOKENS) as TokenAddress[]
    const randomToken = tokenAddresses[Math.floor(Math.random() * tokenAddresses.length)]
    const tokenInfo = TOKEN_INFO[randomToken]

    // Generate random amount between 10 and 1000
    const randomAmount = Math.random() * 990 + 10
    const amount = parseUnits(randomAmount.toFixed(6), 6)

    // Generate fake sender address
    const fakeSender = `0x${Array.from({ length: 40 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('')}` as `0x${string}`

    // Random memo (30% chance)
    const memos = [
      'Payment for services',
      'Thanks!',
      'Invoice #1234',
      'Refund',
      'Monthly subscription',
    ]
    const memo = Math.random() > 0.7 ? memos[Math.floor(Math.random() * memos.length)] : undefined

    // Create simulated transaction
    const simulatedTx = {
      id: `sim-${Date.now()}-${Math.random()}`,
      token: randomToken,
      tokenSymbol: tokenInfo.symbol,
      amount,
      formattedAmount: randomAmount.toFixed(6),
      from: fakeSender,
      to: address || '0x0000000000000000000000000000000000000000',
      memo,
      timestamp: Date.now(),
    }

    addTransaction(simulatedTx as any, true) // Show toast

    toast({
      title: `Received ${randomAmount.toFixed(2)} ${tokenInfo.symbol}`,
      description: memo || `From ${fakeSender.slice(0, 6)}...${fakeSender.slice(-4)}`,
      variant: 'success',
      duration: 5000,
    })
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <DemoBadge />
        <span className="text-sm text-muted-foreground">Demo feature</span>
      </div>
      <Button
        onClick={handleSimulate}
        variant="outline"
        className="w-full border-primary/50 hover:bg-primary/10"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Simulate Incoming Payment
      </Button>
    </div>
  )
}

