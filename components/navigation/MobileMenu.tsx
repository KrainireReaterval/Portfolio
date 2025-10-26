'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cross2Icon } from '@radix-ui/react-icons';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
];

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-dark-charcoal/40 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-soft-beige shadow-[-4px_0_24px_rgba(44,44,44,0.15)] z-50 overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex justify-end p-8">
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 text-fg hover:text-accent transition-colors duration-300 rounded-lg hover:bg-accent/10"
              >
                <Cross2Icon className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation items */}
            <nav className="px-6 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                  isMobile
                  onClick={onClose}
                />
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
