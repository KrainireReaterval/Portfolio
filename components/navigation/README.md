# Navigation Components

## Component Architecture

```
<Navbar />
├── Desktop Navigation (≥768px)
│   ├── Logo: "Krista"
│   └── <NavLink /> × 5 (horizontal)
│
└── Mobile Navigation (<768px)
    ├── Logo: "Krista"
    ├── Hamburger Icon
    └── <MobileMenu />
        ├── Backdrop Overlay
        ├── Drawer (280px)
        │   ├── Close Icon
        │   └── <NavLink isMobile /> × 5 (vertical)
        └── Body Scroll Lock
```

## Files

### Navbar.tsx
Main navigation component with scroll detection and responsive layout.

**Exports**: `Navbar` (default)

**State**:
- `isScrolled`: boolean - Adds shadow when scrolled > 50px
- `isMobileMenuOpen`: boolean - Controls mobile menu
- `pathname`: string - Current route from Next.js

### MobileMenu.tsx
Mobile drawer menu with Framer Motion animations.

**Exports**: `MobileMenu` (default)

**Props**:
```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}
```

**Features**:
- Slide-in animation (300ms)
- Backdrop blur overlay
- Body scroll lock
- ESC key handler
- Click outside to close

### NavLink.tsx
Reusable link component for both desktop and mobile.

**Exports**: `NavLink` (default)

**Props**:
```typescript
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}
```

**Variants**:
- Desktop: Small, uppercase, underline on active
- Mobile: Large, full-width, background on active

### index.ts
Barrel export for clean imports.

**Exports**:
```typescript
export { Navbar, MobileMenu, NavLink };
```

## Quick Reference

### Colors Used
- `bg-glass` - rgba(255,255,255,0.7) - Navbar background
- `text-fg` - #2c2c2c - Primary text
- `text-accent` - #d4a574 - Hover/active state
- `text-warm-gray` - #6b6b6b - Default link color
- `bg-soft-beige` - #f5f2ed - Mobile menu background
- `border-border` - rgba(44,44,44,0.15) - Border color
- `shadow-soft` - 0 8px 32px rgba(44,44,44,0.1) - Shadow on scroll

### Fonts Used
- **Logo**: `font-crimson` (Crimson Text, serif)
- **Links**: `font-inter` (Inter, sans-serif)

### Breakpoint
- Mobile: `< 768px`
- Desktop: `≥ 768px` (Tailwind `md:` prefix)

### Heights
- Desktop navbar: `80px` (`h-20`)
- Mobile navbar: `64px` (`h-16`)
- Spacer div: Matches navbar height (prevents content overlap)

### Navigation Items
1. Home → `/`
2. Projects → `/projects`
3. Knowledge → `/knowledge`
4. Writing → `/writing`
5. About → `/about`

## Usage Example

```tsx
// Already integrated in app/layout.tsx
import Navbar from '@/components/navigation/Navbar';

<Navbar />
```

## Customization

### Change Logo Text
Edit [Navbar.tsx:61](Navbar.tsx#L61):
```tsx
<Link href="/" className="...">
  Your Name  {/* Change "Krista" to your name */}
</Link>
```

### Add Navigation Item
Edit `navigationItems` in both Navbar.tsx and MobileMenu.tsx:
```typescript
const navigationItems = [
  // ... existing items
  { href: '/contact', label: 'Contact' },
];
```

### Adjust Scroll Threshold
Edit [Navbar.tsx:33](Navbar.tsx#L33):
```typescript
setIsScrolled(scrollPosition > 100); // Change from 50 to 100
```

### Change Animation Speed
Edit [MobileMenu.tsx:63](MobileMenu.tsx#L63):
```typescript
transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
```

## Dependencies

- `next/navigation` - usePathname hook
- `next/link` - Link component
- `framer-motion` - Animations
- `@radix-ui/react-icons` - HamburgerMenuIcon, Cross2Icon
- `@/lib/utils` - cn() utility

## Accessibility

✓ Semantic HTML (`<nav>`, `<header>`)
✓ ARIA labels on buttons
✓ Keyboard navigation (Tab, ESC)
✓ Focus visible states
✓ Minimum 56px tap targets (mobile)
✓ Screen reader friendly

## Performance

✓ Passive scroll listener
✓ Hardware-accelerated animations
✓ Next.js Link prefetching
✓ Optimized re-renders with useEffect deps
