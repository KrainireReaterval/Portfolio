/**
 * Reusable Button Component
 *
 * Demonstrates:
 * - Using the cn() utility for conditional classes
 * - TypeScript types for props
 * - Variants (different button styles)
 * - Icon support with lucide-react
 */

import { cn } from '@/lib/utils/cn'
import { LucideIcon } from 'lucide-react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

// Define available button variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: LucideIcon  // Optional icon component
  iconPosition?: 'left' | 'right'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  children,
  className,
  ...props
}: ButtonProps) {
  // Base styles that apply to all buttons
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-600',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:ring-slate-400',
    outline:
      'border-2 border-slate-300 bg-transparent hover:bg-slate-50 focus-visible:ring-slate-400',
    ghost: 'bg-transparent hover:bg-slate-100 focus-visible:ring-slate-400',
  }

  // Size-specific styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  // Icon sizes matching button sizes
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className // Allows parent components to override styles
      )}
      {...props} // Spreads remaining HTML button attributes (onClick, disabled, etc.)
    >
      {/* Render icon on left if specified */}
      {Icon && iconPosition === 'left' && <Icon size={iconSizes[size]} />}

      {children}

      {/* Render icon on right if specified */}
      {Icon && iconPosition === 'right' && <Icon size={iconSizes[size]} />}
    </button>
  )
}
