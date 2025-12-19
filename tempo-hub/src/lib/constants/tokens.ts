/**
 * Token-related constants and configuration
 */

// Testnet tokens
export const TOKENS = {
  pathUSD: '0x20c0000000000000000000000000000000000000',
  alphaUSD: '0x20c0000000000000000000000000000000000001',
  betaUSD: '0x20c0000000000000000000000000000000000002',
  thetaUSD: '0x20c0000000000000000000000000000000000003',
} as const

export type TokenAddress = (typeof TOKENS)[keyof typeof TOKENS]

export const TOKEN_INFO: Record<TokenAddress, { symbol: string; name: string }> = {
  [TOKENS.pathUSD]: { symbol: 'pathUSD', name: 'Path USD' },
  [TOKENS.alphaUSD]: { symbol: 'AlphaUSD', name: 'Alpha USD' },
  [TOKENS.betaUSD]: { symbol: 'BetaUSD', name: 'Beta USD' },
  [TOKENS.thetaUSD]: { symbol: 'ThetaUSD', name: 'Theta USD' },
}

