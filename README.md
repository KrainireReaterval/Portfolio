##  Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router for file-based routing
- **React 19** - UI library for building components
- **TypeScript** - Type-safe JavaScript for fewer bugs

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **clsx + tailwind-merge** - Smart class name handling

### 3D Graphics
- **Three.js** - WebGL 3D library
- **React Three Fiber** - React wrapper for Three.js
- **@react-three/drei** - Useful 3D helpers and components

### Animations
- **Framer Motion** - Production-ready animation library

### SEO & Performance
- **next-seo** - SEO metadata management
- Built-in Next.js optimizations (Image, Font, Script components)

### UI Components
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage (/)
│   │   ├── layout.tsx         # Root layout (wraps all pages)
│   │   ├── projects/          # Projects page (/projects)
│   │   ├── researches/        # Research page (/researches)
│   │   ├── blog/              # Blog (/blog)
│   │   └── connect/           # Connect page (/connect)
│   │
│   ├── components/            # Reusable components
│   │   ├── 3d/               # Three.js/R3F components
│   │   ├── ui/               # UI components (Button, Card, etc.)
│   │   ├── forms/            # Form components
│   │   └── layout/           # Layout components (Header, Footer)
│   │
│   ├── lib/                   # Utility functions
│   │   ├── utils/            # Helper functions
│   │   └── seo/              # SEO configuration
│   │
│   └── types/                 # TypeScript type definitions
│
├── public/                    # Static assets
│   └── images/               # Images organized by section
│
└── Configuration files
    ├── package.json          # Dependencies
    ├── tsconfig.json         # TypeScript config
    ├── next.config.ts        # Next.js config
    ├── tailwind.config.ts    # Tailwind config
    └── postcss.config.mjs    # PostCSS config
```

##  Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

3. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

### Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run start` - Run production server
- `npm run lint` - Check code for errors

##  Key Concepts for Beginners

### File-Based Routing
Next.js creates routes automatically based on your file structure:
- `app/page.tsx` → `/` (homepage)
- `app/projects/page.tsx` → `/projects`
- `app/blog/[slug]/page.tsx` → `/blog/any-post-name` (dynamic route)

### Client vs Server Components
- **Server Components** (default): Render on server, better performance
- **Client Components** ('use client'): Run in browser, needed for interactivity

Use `'use client'` when you need:
- State (useState, useReducer)
- Effects (useEffect)
- Browser APIs (window, localStorage)
- Event handlers (onClick, onChange)
- 3D components (Three.js runs in browser)

### TypeScript Benefits
- **Autocomplete**: Your editor suggests available properties
- **Error prevention**: Catches typos before runtime
- **Documentation**: Types explain what data looks like

Example:
```typescript
interface Project {
  title: string
  date: string
}

// TypeScript knows project.title exists and is a string
const project: Project = { title: 'My App', date: '2024-03-15' }
```

##  Component Examples

### Using the Button Component
```tsx
import { Button } from '@/components/ui/Button'
import { ArrowRight, Mail } from 'lucide-react'

<Button variant="primary" size="md">
  Click Me
</Button>

<Button variant="outline" icon={Mail}>
  Contact Me
</Button>
```

### Using 3D Scene
```tsx
import { Scene } from '@/components/3d/Scene'
import { RotatingCube } from '@/components/3d/RotatingCube'

<Scene className="h-screen">
  <RotatingCube />
</Scene>
```

### Using Animations
```tsx
import { FadeIn } from '@/components/ui/FadeIn'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

<FadeIn delay={0.2}>
  <h1>Welcome to my portfolio</h1>
</FadeIn>

<ScrollReveal>
  <p>This appears when you scroll to it</p>
</ScrollReveal>
```

##  Configuration Checklist

Before deploying, update these files with your information:

- [ ] `/src/lib/seo/config.ts` - Site URL, name, social handles
- [ ] `/src/lib/seo/generateMetadata.ts` - Author name, Twitter handle
- [ ] `/src/app/layout.tsx` - Site metadata
- [ ] `/public/` - Add your favicon and OG images
- [ ] `CNAME` - Your custom domain (if using GitHub Pages)

##  Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion API](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

##  Next Steps

1. Customize the homepage (`src/app/page.tsx`)
2. Create page components for Projects, Research, Blog, Connect
3. Add your actual projects/content
4. Create a contact form with honeypot protection
5. Add custom 3D models or animations
6. Deploy to Vercel or your preferred platform
