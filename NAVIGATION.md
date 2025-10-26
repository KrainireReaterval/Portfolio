# Navigation System Documentation

## Overview

A fully responsive navigation system with smooth animations, scroll detection, and mobile drawer menu.

## Components Created

### 1. Navbar.tsx
**Location**: [components/navigation/Navbar.tsx](components/navigation/Navbar.tsx)

Main navigation component with responsive layout and scroll detection.

**Features**:
- Fixed positioning with backdrop blur effect
- Scroll detection (adds shadow after 50px scroll)
- Desktop horizontal navigation (≥768px)
- Mobile hamburger menu (<768px)
- Active route highlighting
- Smooth transitions

**Desktop Layout**:
- Height: 80px
- Logo: "Krista" in Crimson Text font (24px, weight 600)
- Navigation links: Horizontal, 32px gap between items
- Hover effect: Color transitions to accent (#d4a574)

**Mobile Layout**:
- Height: 64px
- Logo: "Krista" (20px)
- Hamburger menu icon (24px)

### 2. MobileMenu.tsx
**Location**: [components/navigation/MobileMenu.tsx](components/navigation/MobileMenu.tsx)

Mobile drawer menu with Framer Motion animations.

**Features**:
- Slide-in animation from right (300ms ease-out)
- Backdrop overlay with blur
- Body scroll lock when open
- ESC key to close
- Click outside to close
- Width: 280px
- Background: soft-beige (#f5f2ed)

**Interactions**:
- Open: Slide in from right + backdrop fade in
- Close: Slide out to right + backdrop fade out
- Prevents body scroll when open
- Accessible with ARIA labels

### 3. NavLink.tsx
**Location**: [components/navigation/NavLink.tsx](components/navigation/NavLink.tsx)

Reusable navigation link component for both desktop and mobile.

**Props**:
- `href`: Link destination
- `label`: Link text
- `isActive`: Whether this is the current page
- `isMobile`: Use mobile styling
- `onClick`: Optional click handler (for closing mobile menu)

**Desktop Style**:
- Font: Inter, 14px, uppercase, tracking-wide
- Color: warm-gray (#6b6b6b)
- Hover: accent color (#d4a574)
- Active: fg color with 2px accent underline (4px below text)

**Mobile Style**:
- Font: Inter, 18px
- Minimum tap area: 56px height
- Full width blocks
- Active: accent background with white text
- Hover: accent/10 background

## Navigation Items

Order (left to right on desktop, top to bottom on mobile):
1. HOME - `/`
2. PROJECTS - `/projects`
3. KNOWLEDGE - `/knowledge`
4. WRITING - `/writing`
5. ABOUT - `/about`

## Usage

### Basic Implementation (Already Done)

The Navbar is already integrated in [app/layout.tsx](app/layout.tsx):

```tsx
import Navbar from '@/components/navigation/Navbar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

### Adding New Navigation Items

Edit the `navigationItems` array in both:
- [components/navigation/Navbar.tsx:14](components/navigation/Navbar.tsx#L14)
- [components/navigation/MobileMenu.tsx:10](components/navigation/MobileMenu.tsx#L10)

```typescript
const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  // Add new items here
];
```

### Customizing Styles

All colors use Tailwind custom classes from [tailwind.config.ts](tailwind.config.ts):

- `bg-glass` - Backdrop blur background
- `text-fg` - Foreground text
- `text-accent` - Accent color
- `text-warm-gray` - Muted gray
- `bg-soft-beige` - Mobile menu background
- `shadow-soft` - Soft shadow on scroll

## Accessibility Features

✓ **ARIA Labels**:
- Hamburger button: "Open navigation menu"
- Close button: "Close navigation menu"
- Navigation landmarks with `role="navigation"`

✓ **Keyboard Navigation**:
- Tab through all links
- ESC key closes mobile menu
- Focus visible states with accent color outline

✓ **Screen Readers**:
- Semantic HTML (`<nav>`, `<header>`)
- Proper link text
- Hidden spacer div has `aria-hidden="true"`

✓ **Mobile UX**:
- Minimum 56px tap targets
- Body scroll lock prevents background scrolling
- Smooth animations (reduced motion support can be added)

## Animations

### Framer Motion Animations

**Mobile Drawer**:
```typescript
// Slide in from right
initial={{ x: '100%' }}
animate={{ x: 0 }}
exit={{ x: '100%' }}
transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
```

**Backdrop Overlay**:
```typescript
// Fade in/out
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.2 }}
```

### CSS Transitions

- Link hover: `transition-colors duration-300`
- Scroll shadow: `transition-all duration-200`
- Logo hover: `transition-colors duration-300`

## Responsive Breakpoints

Using Tailwind's `md:` prefix:

- **Mobile**: < 768px
  - Shows hamburger menu
  - Height: 64px (h-16)
  - Logo: 20px (text-xl)

- **Desktop**: ≥ 768px
  - Shows horizontal navigation
  - Height: 80px (h-20)
  - Logo: 24px (text-2xl)

## Scroll Behavior

**Detection**:
```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  };
  // ...
}, []);
```

**Effects when scrolled > 50px**:
- Adds `shadow-soft` class
- Stronger backdrop blur effect

## Technical Implementation

### State Management

**Navbar.tsx**:
- `isScrolled` - Tracks scroll position > 50px
- `isMobileMenuOpen` - Controls mobile menu visibility
- `pathname` - Current route from `usePathname()`

**MobileMenu.tsx**:
- Body scroll lock with `document.body.style.overflow`
- ESC key listener for closing
- AnimatePresence for exit animations

### Performance

✓ **Passive scroll listener**:
```typescript
window.addEventListener('scroll', handleScroll, { passive: true });
```

✓ **Next.js Link** component for instant navigation

✓ **CSS backdrop-blur** for performant blur effect

✓ **Framer Motion** hardware-accelerated animations

## Browser Support

- Modern browsers with backdrop-filter support
- Fallback: Semi-transparent background
- Mobile Safari: Full support
- Chrome/Firefox/Edge: Full support

## Testing Checklist

✓ Desktop navigation displays correctly (≥768px)
✓ Mobile hamburger menu appears (<768px)
✓ Active route is highlighted
✓ Links navigate correctly
✓ Mobile menu opens/closes smoothly
✓ Backdrop overlay works
✓ Body scroll locks when mobile menu is open
✓ ESC key closes mobile menu
✓ Click outside closes mobile menu
✓ Scroll adds shadow effect (>50px)
✓ Logo hover transitions to accent color
✓ Link hover transitions to accent color
✓ Active link shows underline (desktop)
✓ Active link shows accent background (mobile)
✓ Accessibility: ARIA labels present
✓ Accessibility: Keyboard navigation works
✓ Build succeeds without errors

## Future Enhancements (Optional)

- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] Skip to content link
- [ ] Submenu support for Projects categories
- [ ] Search functionality
- [ ] Theme toggle (dark mode)
- [ ] i18n language switcher
- [ ] Progress bar on page transitions

---

**Navigation system is fully functional and ready to use!** 🎉

Visit http://localhost:3000 to see it in action.
