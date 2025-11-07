/**
 * Section Component - Reusable container for content sections
 *
 * This is a "wrapper component" that provides consistent spacing
 * and layout for different sections of your homepage
 */

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode     // Content inside the section
  id?: string            // Optional ID for anchor links (#projects)
  className?: string     // Optional additional classes
  background?: 'default' | 'dark' | 'accent'  // Background variants
}

export function Section({
  children,
  id,
  className = '',
  background = 'default',
}: SectionProps) {
  // Background variant styles
  const backgroundStyles = {
    default: 'bg-white',
    dark: 'bg-gray-900 text-white',
    accent: 'bg-gradient-to-br from-blue-50 to-indigo-50',
  }

  return (
    <section
      id={id}
      className={`py-24 px-6 ${backgroundStyles[background]} ${className}`}
    >
      {/*
        py-24 = vertical padding (top and bottom)
        px-6 = horizontal padding (left and right)
        Background styles change based on variant prop
      */}

      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}

/**
 * TYPESCRIPT BENEFITS:
 *
 * interface SectionProps defines what this component accepts:
 * - children: Required (what goes inside)
 * - id, className, background: Optional
 *
 * TypeScript will warn you if you forget children or use wrong background value!
 *
 * USAGE EXAMPLE:
 * <Section id="projects" background="dark">
 *   <h2>My Projects</h2>
 *   <p>Project content here...</p>
 * </Section>
 */
