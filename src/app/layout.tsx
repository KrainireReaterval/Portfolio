/**
 * Root Layout - Wraps all pages in your application
 *
 * This component runs on EVERY page
 * Perfect place for: navigation, fonts, global styles, analytics
 */

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import { AnimationProvider } from '@/components/layout/AnimationProvider'
import { generateWebsiteSchema, generatePersonSchema } from '@/lib/seo/structured-data'
import { defaultMetadata } from '@/lib/seo/config'
import './globals.css'

// Font Configuration
// Next.js automatically optimizes and loads these fonts
const geistSans = Geist({
  variable: '--font-geist-sans', // Creates a CSS variable we can use
  subsets: ['latin'],            // Only load Latin characters (smaller file)
  display: 'swap',               // Show fallback font while loading (better UX)
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

/**
 * METADATA - SEO Configuration
 *
 * This object defines how your site appears in:
 * - Google search results
 * - Social media shares (Facebook, Twitter, LinkedIn)
 * - Browser tabs
 * - Bookmarks
 *
 * Uses spread operator to inherit defaults from config,
 * then customize for homepage
 */
export const metadata: Metadata = {
  ...defaultMetadata,
  // Homepage can override specific fields if needed
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/*
        scroll-smooth: Enables smooth scrolling for anchor links
        lang="en": Tells screen readers the language
      */}

      <head>
        {/*
          STRUCTURED DATA (JSON-LD)

          These scripts tell search engines about your site structure
          They don't render anything visible, just provide metadata

          dangerouslySetInnerHTML is safe here because:
          - We control the data (it's from our functions)
          - JSON.stringify escapes any dangerous characters
          - This is the official way to add JSON-LD
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*
          Font variables are applied here
          antialiased: Makes fonts look smoother on Mac/iOS
        */}

        {/* Navigation appears on every page */}
        <Navigation />

        {/*
          ANIMATION PROVIDER

          Wraps all page content with AnimatePresence context
          This enables page transition animations
          Must be Client Component (uses React hooks)
        */}
        <AnimationProvider>
          {/* Page content goes here (homepage, projects, blog, etc.) */}
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}

/**
 * WHY THIS STRUCTURE?
 *
 * 1. Font Loading:
 *    - next/font/google automatically optimizes fonts
 *    - Fonts are self-hosted (faster, better privacy)
 *    - display: 'swap' prevents invisible text during load
 *
 * 2. CSS Variables (--font-geist-sans):
 *    - Can be used in Tailwind: font-sans, font-mono
 *    - Consistent typography across the site
 *
 * 3. Metadata:
 *    - Template allows per-page titles
 *    - Description shows in Google search
 *    - Keywords help with SEO
 *
 * 4. Navigation Placement:
 *    - Outside {children} means it persists between pages
 *    - No re-render when navigating
 *    - Better performance
 */
