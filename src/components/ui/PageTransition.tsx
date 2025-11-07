'use client'

/**
 * PageTransition Component
 *
 * Animates page transitions when navigating between routes
 * Uses Framer Motion for smooth, performant animations
 *
 * ANIMATION PRINCIPLES:
 * - Only animates opacity and transform (GPU accelerated)
 * - Short duration (300ms) feels responsive
 * - Respects prefers-reduced-motion automatically
 */

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: ReactNode
  variant?: 'fade' | 'slide' | 'scale'
}

/**
 * ANIMATION VARIANTS
 *
 * Define different animation styles
 * Each variant has initial, animate, and exit states
 */
const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
}

export function PageTransition({ children, variant = 'slide' }: PageTransitionProps) {
  /**
   * usePathname Hook
   *
   * Gets current route pathname
   * Framer Motion uses this as a key to detect route changes
   * When key changes, exit animation plays, then entry animation
   */
  const pathname = usePathname()

  return (
    <motion.div
      /**
       * KEY PROP - Critical for Page Transitions
       *
       * When key changes, Framer Motion:
       * 1. Plays exit animation on old component
       * 2. Unmounts old component
       * 3. Mounts new component
       * 4. Plays initial → animate on new component
       */
      key={pathname}
      /**
       * ANIMATION STATES
       *
       * initial: State when component first mounts
       * animate: State to animate to
       * exit: State when component unmounts
       */
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      exit={variants[variant].exit}
      /**
       * TRANSITION CONFIGURATION
       *
       * duration: How long animation takes (seconds)
       * ease: Easing function for smooth motion
       *
       * COMMON EASING FUNCTIONS:
       * - linear: Constant speed (feels robotic)
       * - easeIn: Slow start, fast end
       * - easeOut: Fast start, slow end (most natural)
       * - easeInOut: Slow start and end (smooth)
       */
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1], // Custom bezier (smooth + snappy)
      }}
      /**
       * STYLE - Forces GPU Acceleration
       *
       * will-change tells browser this will animate
       * Browser optimizes by creating a new layer
       * Results in smoother 60fps animations
       *
       * CAUTION: Don't overuse!
       * Too many will-change layers = worse performance
       */
      style={{
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * PERFORMANCE EXPLANATION:
 *
 * Why This Is Fast:
 * ✅ Only animates opacity and transform
 * ✅ Both run on GPU (compositor thread)
 * ✅ Doesn't block JavaScript execution
 * ✅ Short duration (300ms) feels instant
 * ✅ will-change hint optimizes rendering
 *
 * What Would Be Slow:
 * ❌ Animating width/height (triggers layout)
 * ❌ Animating colors (triggers paint)
 * ❌ Long duration (>500ms feels sluggish)
 * ❌ Many simultaneous animations
 *
 * ACCESSIBILITY:
 *
 * Framer Motion automatically detects prefers-reduced-motion
 * If user has motion sensitivity:
 * - Animations are instant (no transition)
 * - Still functional, just no animation
 *
 * Test in DevTools:
 * 1. Open Chrome DevTools
 * 2. Cmd+Shift+P → "Emulate reduced motion"
 * 3. Animations should disappear
 *
 * USAGE:
 *
 * Wrap any page content:
 * <PageTransition variant="slide">
 *   <YourPageContent />
 * </PageTransition>
 *
 * NEXT ITERATION:
 * We'll add scroll-triggered animations for elements!
 */
