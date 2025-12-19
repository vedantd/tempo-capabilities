'use client'

import { useAccount } from 'wagmi'
import { useQuery } from '@tanstack/react-query'
import { formatUnits } from 'viem'
import { TOKENS, type TokenAddress } from '@/lib/constants/tokens'
import { publicClient } from '@/lib/tempo-client'

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
  // Use SDK's token.getBalance and token.getMetadata
  const [balance, metadata] = await Promise.all([
    publicClient.token.getBalance({
      account: accountAddress,
      token: tokenAddress as `0x${string}`,
    }),
    publicClient.token.getMetadata({
      token: tokenAddress as `0x${string}`,
    }),
  ])
  
  return {
    address: tokenAddress,
    name: metadata.name,
    symbol: metadata.symbol,
    decimals: metadata.decimals,
    balance,
    formatted: formatUnits(balance, metadata.decimals),
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

