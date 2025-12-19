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

/**
 * Get the WebAuthn relying party ID (rpId)
 * rpId must match the current domain (without protocol, port, or path)
 * 
 * IMPORTANT: For production deployments, you MUST set NEXT_PUBLIC_WEBAUTHN_RP_ID
 * in your environment variables to match your deployment domain.
 * 
 * For Vercel:
 * 1. Go to Project Settings → Environment Variables
 * 2. Add: NEXT_PUBLIC_WEBAUTHN_RP_ID=your-app.vercel.app
 * 3. Use your actual Vercel domain (no https://, no www.)
 * 4. Redeploy after setting
 */
function getRpId(): string {
  // Use environment variable if explicitly set (REQUIRED for production)
  const envRpId = process.env.NEXT_PUBLIC_WEBAUTHN_RP_ID
  
  if (envRpId) {
    return envRpId
  }

  // For local development only - will fail in production if not set
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return 'localhost'
  }

  // Fallback - but this will cause errors in production
  // Log warning in browser console
  if (typeof window !== 'undefined') {
    console.warn(
      '⚠️ WebAuthn rpId not configured! Set NEXT_PUBLIC_WEBAUTHN_RP_ID environment variable.\n' +
      `Current domain: ${window.location.hostname}\n` +
      'See WEBAUTHN_SETUP.md for instructions.'
    )
    // Try to use current hostname as fallback (may work for some cases)
    return window.location.hostname
  }

  return 'localhost'
}

export const config = createConfig({
  chains: [tempoChain],
  connectors: [
    webAuthn({
      keyManager: KeyManager.localStorage(),
      // rpId must match the deployment domain
      // Set NEXT_PUBLIC_WEBAUTHN_RP_ID in Vercel environment variables
      rpId: getRpId(),
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

