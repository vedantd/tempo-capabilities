'use client'

import { useAccount } from 'wagmi'
import { useQuery } from '@tanstack/react-query'
import { createPublicClient, http, formatUnits, erc20Abi } from 'viem'
import { tempoChain, TOKENS, TOKEN_INFO, type TokenAddress } from '@/lib/wagmi'
import { TEMPO_RPC_URL } from '@/lib/constants'

const client = createPublicClient({
  chain: tempoChain,
  transport: http(TEMPO_RPC_URL),
})

export interface TokenBalance {
  address: TokenAddress
  name: string
  symbol: string
  decimals: number
  balance: bigint
  formatted: string
}

async function fetchTokenBalance(
  tokenAddress: TokenAddress,
  accountAddress: `0x${string}`
): Promise<TokenBalance> {
  const info = TOKEN_INFO[tokenAddress]
  
  // Fetch balance using standard ERC20 balanceOf
  const balance = await client.readContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [accountAddress],
  })
  
  // TIP-20 tokens use 6 decimals
  const decimals = 6
  
  return {
    address: tokenAddress,
    name: info.name,
    symbol: info.symbol,
    decimals,
    balance,
    formatted: formatUnits(balance, decimals),
  }
}

export function useTokenBalances() {
  const { address } = useAccount()
  
  return useQuery({
    queryKey: ['tokenBalances', address],
    queryFn: async (): Promise<TokenBalance[]> => {
      if (!address) return []
      
      const tokenAddresses = Object.values(TOKENS) as TokenAddress[]
      
      const results = await Promise.all(
        tokenAddresses.map((tokenAddress) => 
          fetchTokenBalance(tokenAddress, address)
        )
      )
      
      return results
    },
    enabled: !!address,
    refetchInterval: 10000, // Refresh every 10s
    staleTime: 5000,
  })
}

export function useTokenBalance(tokenAddress: TokenAddress) {
  const { address } = useAccount()
  
  return useQuery({
    queryKey: ['tokenBalance', tokenAddress, address],
    queryFn: async (): Promise<TokenBalance | null> => {
      if (!address) return null
      return fetchTokenBalance(tokenAddress, address)
    },
    enabled: !!address,
    refetchInterval: 10000,
    staleTime: 5000,
  })
}

