'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/**
 * ScrollReveal Component
 *
 * Content appears when user scrolls it into view
 * Perfect for long pages like blog posts or project descriptions
 *
 * Uses Intersection Observer API under the hood (framer-motion handles this)
 */

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      // Initial state (before scrolling into view)
      initial={{ opacity: 0, y: 50 }}

      // whileInView = animate when element is visible in viewport
      whileInView={{ opacity: 1, y: 0 }}

      // viewport settings
      viewport={{
        once: true,  // Only animate once (don't re-animate when scrolling back up)
        amount: 0.3, // Trigger when 30% of the element is visible
      }}

      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
