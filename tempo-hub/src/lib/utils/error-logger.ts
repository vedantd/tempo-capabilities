/**
 * Centralized error logging utility
 * Provides consistent error logging across the application
 * Supports future integration with error reporting services (e.g., Sentry)
 */

interface ErrorContext {
  component?: string
  hook?: string
  action?: string
  metadata?: Record<string, unknown>
}

/**
 * Logs an error with optional context
 * @param error - The error to log
 * @param context - Optional context information
 */
export function logError(error: Error | unknown, context?: ErrorContext | string): void {
  const errorObj = error instanceof Error ? error : new Error(String(error))
  
  // Build context string
  let contextStr = ''
  if (typeof context === 'string') {
    contextStr = context
  } else if (context) {
    const parts: string[] = []
    if (context.component) parts.push(`Component: ${context.component}`)
    if (context.hook) parts.push(`Hook: ${context.hook}`)
    if (context.action) parts.push(`Action: ${context.action}`)
    if (context.metadata) {
      parts.push(`Metadata: ${JSON.stringify(context.metadata)}`)
    }
    contextStr = parts.join(', ')
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    if (contextStr) {
      console.error(`[Error] ${contextStr}:`, errorObj)
    } else {
      console.error('[Error]:', errorObj)
    }
  }
  
  // TODO: Integrate with error reporting service (e.g., Sentry)
  // if (process.env.NODE_ENV === 'production') {
  //   errorReportingService.captureException(errorObj, { extra: context })
  // }
}

/**
 * Logs a warning message
 * @param message - The warning message
 * @param context - Optional context information
 */
export function logWarning(message: string, context?: ErrorContext | string): void {
  if (process.env.NODE_ENV === 'development') {
    const contextStr = typeof context === 'string' ? context : JSON.stringify(context)
    console.warn(`[Warning] ${contextStr ? `${contextStr}: ` : ''}${message}`)
  }
}

