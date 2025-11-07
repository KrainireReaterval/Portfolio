/**
 * Default SEO Configuration
 *
 * This file contains your site-wide SEO defaults
 * Individual pages can override these values
 *
 * Note: Next.js 13+ uses the Metadata API instead of next-seo
 * This config is for reference and helper functions
 */

// TODO: Replace these with your actual information
export const SITE_URL = 'https://yourportfolio.com' // Your custom domain from CNAME
export const SITE_NAME = 'Your Name - Portfolio'
export const SITE_DESCRIPTION =
  'Portfolio showcasing projects, research, and writings by [Your Name]. Focused on [your specialties].'
export const TWITTER_HANDLE = '@yourhandle' // TODO: Replace with your Twitter handle
export const SITE_KEYWORDS = [
  'portfolio',
  'web development',
  'design',
  'projects',
  // TODO: Add more relevant keywords
]

/**
 * Default Open Graph image configuration
 */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/images/og-default.jpg`,
  width: 1200,
  height: 630,
  alt: SITE_NAME,
}

/**
 * Default metadata that can be spread into page metadata
 */
export const defaultMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`, // Example: "Projects | Your Name - Portfolio"
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: 'Your Name' }], // TODO: Replace
  creator: 'Your Name',
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
}
