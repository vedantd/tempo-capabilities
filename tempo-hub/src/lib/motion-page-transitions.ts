/**
 * Page Transition Variants
 * Smooth, professional transitions for route changes
 */

import { Variants, Transition } from 'framer-motion'

// Page transition timing
export const PAGE_TRANSITION_DURATION = 0.25
export const PAGE_TRANSITION_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

// Base page transition variants
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
}

// Dashboard page transition (fade + slight scale)
export const dashboardPageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
  },
}

// Send page transition (slide from right)
export const sendPageVariants: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -20,
  },
}

// Receive page transition (slide from left)
export const receivePageVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 20,
  },
}

// Transactions page transition (fade + slide up)
export const transactionsPageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
}

// Page transition configuration
export const pageTransitionConfig: Transition = {
  duration: PAGE_TRANSITION_DURATION,
  ease: PAGE_TRANSITION_EASE,
}

// Reduced motion variants (for accessibility)
export const reducedMotionPageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

