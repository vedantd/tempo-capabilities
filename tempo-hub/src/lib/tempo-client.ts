'use client'

import { createPublicClient, http, createWalletClient, type Account } from 'viem'
import { tempoChain } from './wagmi'
import { TEMPO_RPC_URL } from './constants'
import { tempoActions } from 'tempo.ts/viem'

// Public client for read operations
export const publicClient = createPublicClient({
  chain: tempoChain,
  transport: http(TEMPO_RPC_URL),
}).extend(tempoActions())

// Helper to create wallet client with Tempo actions
export function createTempoWalletClient(account: Account) {
  return createWalletClient({
    account,
    chain: tempoChain,
    transport: http(TEMPO_RPC_URL),
  }).extend(tempoActions())
}

