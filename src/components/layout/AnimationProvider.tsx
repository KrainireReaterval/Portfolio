'use client'

/**
 * AnimationProvider Component
 *
 * Provides AnimatePresence context for page transitions
 * Must be a Client Component because AnimatePresence uses hooks
 *
 * WHY A SEPARATE COMPONENT?
 * - Root layout must be Server Component for metadata
 * - AnimatePresence must be Client Component
 * - Solution: Nest Client Component inside Server Layout
 */

import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  return (
    <AnimatePresence
      /**
       * MODE: "wait"
       *
       * Waits for exit animation to complete before showing new page
       * Creates cleaner transitions (no overlap)
       *
       * OPTIONS:
       * - "sync": Exit and enter at same time (can feel janky)
       * - "wait": Exit finishes, then enter starts (smooth)
       * - "popLayout": For shared layout animations (advanced)
       */
      mode="wait"
      /**
       * INITIAL: false
       *
       * Prevents animation on first page load
       * Users don't want to wait for animation on initial visit
       * Animations only happen when navigating between pages
       */
      initial={false}
    >
      {children}
    </AnimatePresence>
  )
}

/**
 * COMPONENT ARCHITECTURE:
 *
 * Server Layout (layout.tsx)
 *   └─> AnimationProvider (Client Component) ← YOU ARE HERE
 *       └─> PageTransition (Client Component)
 *           └─> Page Content
 *
 * DATA FLOW:
 * - Server Layout: Handles metadata, fonts, scripts
 * - AnimationProvider: Provides animation context
 * - PageTransition: Animates specific page
 * - Page Content: Your actual content
 *
 * WHY THIS STRUCTURE?
 * - Keeps most of app as Server Components (faster)
 * - Only animation logic runs on client
 * - Best of both worlds: performance + interactivity
 */
