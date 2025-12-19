/**
 * Framer Motion Variants & Utilities
 * Reusable animation configurations
 */

import { Variants, Transition } from 'framer-motion'
import { durations, easings } from './design-tokens'

// Page Transition Variants
export const pageVariants: Variants = {
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
    y: -20,
  },
}

export const pageTransition: Transition = {
  duration: durations.normal / 1000,
  ease: [0, 0, 0.2, 1] as [number, number, number, number],
}

// Fade Variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeTransition: Transition = {
  duration: durations.normal / 1000,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

// Slide Variants
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const slideTransition: Transition = {
  duration: durations.normal / 1000,
  ease: [0, 0, 0.2, 1] as [number, number, number, number],
}

// Scale Variants (for buttons, cards)
export const scaleVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
}

export const scaleTransition: Transition = {
  duration: durations.fast / 1000,
  ease: [0, 0, 0.2, 1] as [number, number, number, number],
}

// Button Press Animation
export const buttonPressVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 0 0 0px rgba(0, 0, 0, 0)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  tap: {
    scale: 0.98,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
}

// Card Hover Animation
export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -4,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
}

export const cardTransition: Transition = {
  duration: durations.normal / 1000,
  ease: [0, 0, 0.2, 1] as [number, number, number, number],
}

// Stagger Children Animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

// Input Focus Animation
export const inputFocusVariants: Variants = {
  unfocused: {
    scale: 1,
    borderColor: 'transparent',
  },
  focused: {
    scale: 1.01,
    borderColor: 'currentColor',
  },
}

// Success Animation
export const successVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
}

// Error Shake Animation
export const shakeVariants: Variants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: durations.normal / 1000,
    },
  },
}

// Common Transitions
export const transitions = {
  fast: {
    duration: durations.fast / 1000,
    ease: [0, 0, 0.2, 1] as [number, number, number, number],
  },
  normal: {
    duration: durations.normal / 1000,
    ease: [0, 0, 0.2, 1] as [number, number, number, number],
  },
  slow: {
    duration: durations.slow / 1000,
    ease: [0, 0, 0.2, 1] as [number, number, number, number],
  },
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  springBounce: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 15,
  },
}

// 3D Glassmorphism Variants
export const glass3DVariants: Variants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
  hover: {
    scale: 1.05,
    rotateX: -5,
    rotateY: 5,
    z: 20,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.95,
    rotateX: 0,
    rotateY: 0,
    z: 10,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
}

export const glass3DTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
}

// Glow Pulse Animation
export const glowPulseVariants: Variants = {
  rest: {
    opacity: 0.3,
    scale: 1,
  },
  hover: {
    opacity: 0.6,
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
}

// Particle Float Animation
export const particleFloatVariants: Variants = {
  float: {
    y: [0, -10, 0],
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Gradient Shift Animation
export const gradientShiftVariants: Variants = {
  rest: {
    backgroundPosition: '0% 50%',
  },
  hover: {
    backgroundPosition: '100% 50%',
    transition: {
      duration: 2,
      ease: 'linear',
    },
  },
}

