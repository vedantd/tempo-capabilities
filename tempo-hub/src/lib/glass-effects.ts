/**
 * Glassmorphism Effects Utilities
 * Reusable helpers for creating glass effects
 */

import { cn } from './utils'

/**
 * Glass layer classes with different blur levels
 */
export const glassLayers = {
  heavy: 'backdrop-blur-md bg-white/5',
  medium: 'backdrop-blur-sm bg-white/10',
  light: 'backdrop-blur-xs bg-white/15',
  border: 'border border-white/20',
} as const

/**
 * Glass container with multiple layers
 */
export function getGlassContainerClasses(variant: 'heavy' | 'medium' | 'light' = 'medium') {
  return cn(
    'relative overflow-hidden',
    glassLayers[variant],
    glassLayers.border,
    'shadow-lg shadow-black/10'
  )
}

/**
 * Glass overlay for depth
 */
export function getGlassOverlayClasses() {
  return cn(
    'absolute inset-0',
    'bg-gradient-to-br from-white/10 via-transparent to-transparent',
    'pointer-events-none'
  )
}

/**
 * Glow effect classes
 */
export function getGlowClasses(color: 'primary' | 'emerald' | 'blue' = 'primary') {
  const colors = {
    primary: 'shadow-primary/50',
    emerald: 'shadow-emerald-500/50',
    blue: 'shadow-blue-500/50',
  }
  
  return cn(
    'shadow-2xl',
    colors[color],
    'transition-shadow duration-300'
  )
}

/**
 * 3D transform styles
 */
export function get3DTransformStyles() {
  return {
    perspective: '1000px',
    transformStyle: 'preserve-3d' as const,
  }
}

/**
 * Particle position generator
 */
export function generateParticlePositions(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
  }))
}

