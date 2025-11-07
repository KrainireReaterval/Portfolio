'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * FadeIn Component
 *
 * Wraps any content and makes it fade in when it appears on screen
 * Great for project cards, text sections, images
 */

interface FadeInProps {
  children: ReactNode
  delay?: number      // Optional delay before animation starts (in seconds)
  duration?: number   // How long the animation takes (in seconds)
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      // Initial state = invisible and slightly below
      initial={{
        opacity: 0,
        y: 20, // 20px below its final position
      }}
      // Animate to this state = fully visible at normal position
      animate={{
        opacity: 1,
        y: 0,
      }}
      // Transition controls the animation behavior
      transition={{
        duration,    // How long it takes
        delay,       // Wait before starting
        ease: 'easeOut', // Easing function (starts fast, ends slow)
      }}
    >
      {children}
    </motion.div>
  )
}
