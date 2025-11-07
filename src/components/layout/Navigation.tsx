/**
 * Navigation Component - Site-wide navigation bar
 *
 * This will be fixed to the top of the page
 * We're using semantic HTML <nav> element for accessibility
 */

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      {/*
        Fixed positioning keeps nav at top when scrolling
        bg-white/80 = white background with 80% opacity
        backdrop-blur-md = blur content behind for frosted glass effect
        z-50 = high z-index so nav stays above other content
      */}

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name on the left */}
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
          YN
        </Link>

        {/* Navigation links on the right */}
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          <li>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/researches" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Research
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/connect"
              className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors font-medium"
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

/**
 * WHAT'S HAPPENING HERE:
 *
 * 1. Link vs <a>:
 *    - Link does client-side navigation (no page reload)
 *    - Faster user experience
 *    - Automatically prefetches pages on hover
 *
 * 2. Semantic HTML:
 *    - <nav> for navigation
 *    - <ul> and <li> for list of links
 *    - Better for screen readers and SEO
 *
 * 3. Class naming:
 *    - Descriptive names (nav-container, nav-links)
 *    - Makes styling easier in the next iteration
 */
