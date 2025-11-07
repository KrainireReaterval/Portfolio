/**
 * cn (classNames) Utility
 *
 * Combines clsx and tailwind-merge for the perfect className helper
 *
 * Usage examples:
 * cn('text-red-500', 'font-bold') → 'text-red-500 font-bold'
 * cn('text-red-500', 'text-blue-500') → 'text-blue-500' (last wins)
 * cn('btn', { active: true, disabled: false }) → 'btn active'
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  // clsx combines the classes
  // twMerge resolves conflicts (e.g., multiple text-* classes)
  return twMerge(clsx(inputs))
}
