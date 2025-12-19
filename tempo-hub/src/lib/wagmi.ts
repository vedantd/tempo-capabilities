'use client'

import { createConfig, http } from 'wagmi'
import { tempo } from 'tempo.ts/chains'
import { KeyManager, webAuthn } from 'tempo.ts/wagmi'
import { metaMask } from 'wagmi/connectors'
import { TOKENS } from '@/lib/constants/tokens'

// Re-export token types for backward compatibility
export type { TokenAddress } from '@/lib/constants/tokens'
export { TOKENS, TOKEN_INFO } from '@/lib/constants/tokens'

// Tempo chain configuration
export const tempoChain = tempo({ feeToken: TOKENS.alphaUSD })

export const config = createConfig({
  chains: [tempoChain],
  connectors: [
    webAuthn({
      keyManager: KeyManager.localStorage(),
      // rpId must match the domain - 'localhost' for local development
      rpId: 'localhost',
    }),
    metaMask(),
  ],
  multiInjectedProviderDiscovery: true,
  transports: {
    [tempoChain.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

