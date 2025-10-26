'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  href,
  label,
  isActive,
  isMobile = false,
  onClick,
}: NavLinkProps) {
  if (isMobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'block w-full px-6 py-3 text-lg font-medium transition-colors duration-300 rounded-lg',
          'min-h-[56px] flex items-center',
          isActive
            ? 'bg-accent text-white'
            : 'text-fg hover:bg-accent/10 hover:text-accent'
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-medium tracking-wide transition-colors duration-300',
        'uppercase',
        isActive ? 'text-fg' : 'text-warm-gray hover:text-accent'
      )}
    >
      {label}
      {isActive && (
        <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-accent" />
      )}
    </Link>
  );
}
