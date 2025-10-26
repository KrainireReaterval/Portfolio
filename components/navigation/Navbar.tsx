'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-200',
          'backdrop-blur-md bg-glass',
          'border-b border-border',
          isScrolled ? 'shadow-soft' : 'shadow-none'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-crimson text-xl md:text-2xl font-semibold text-fg hover:text-accent transition-colors duration-300"
            >
              Krista
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
              <ul className="flex items-center gap-8">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      label={item.label}
                      isActive={pathname === item.href}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Open navigation menu"
              className="md:hidden p-2 text-fg hover:text-accent transition-colors duration-300 rounded-lg hover:bg-accent/10"
            >
              <HamburgerMenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" aria-hidden="true" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        pathname={pathname}
      />
    </>
  );
}
