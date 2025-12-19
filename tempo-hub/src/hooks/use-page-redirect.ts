/**
 * Custom hook for page redirects with query parameters
 * Provides consistent redirect behavior
 */

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

interface RedirectOptions {
  path: string
  params?: Record<string, string>
  replace?: boolean
  delay?: number
}

/**
 * Hook for handling page redirects
 * @param condition - Condition to check before redirecting
 * @param options - Redirect options
 */
export function usePageRedirect(
  condition: boolean,
  options: RedirectOptions
): void {
  const router = useRouter()
  const { path, params, replace = false, delay = 0 } = options

  useEffect(() => {
    if (!condition) return

    const redirect = () => {
      const queryString = params
        ? '?' + new URLSearchParams(params).toString()
        : ''
      const fullPath = `${path}${queryString}`

      if (replace) {
        router.replace(fullPath)
      } else {
        router.push(fullPath)
      }
    }

    if (delay > 0) {
      const timer = setTimeout(redirect, delay)
      return () => clearTimeout(timer)
    } else {
      redirect()
    }
  }, [condition, path, params, replace, delay, router])
}

/**
 * Hook for handling redirects based on search params
 * Useful for handling success/error redirects
 */
export function useSearchParamRedirect(
  paramName: string,
  redirectPath: string,
  options?: { replace?: boolean; delay?: number }
): void {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { replace = true, delay = 0 } = options || {}

  useEffect(() => {
    const paramValue = searchParams.get(paramName)
    if (!paramValue) return

    const redirect = () => {
      if (replace) {
        router.replace(redirectPath)
      } else {
        router.push(redirectPath)
      }
    }

    if (delay > 0) {
      const timer = setTimeout(redirect, delay)
      return () => clearTimeout(timer)
    } else {
      redirect()
    }
  }, [paramName, redirectPath, replace, delay, router, searchParams])
}

