'use client'

import Link from 'next/link'
import { useAccount } from 'wagmi'
import { AccountDisplay } from '@/components/auth'
import { Zap } from 'lucide-react'

export function Header() {
  const { isConnected } = useAccount()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">TempoHub</span>
          </Link>
          
          {/* Navigation - only show when connected */}
          {isConnected && (
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/dashboard" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Link 
                href="/send" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Send
              </Link>
            </nav>
          )}
          
          {/* Account Display */}
          {isConnected && (
            <div className="hidden md:block">
              <AccountDisplay />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

