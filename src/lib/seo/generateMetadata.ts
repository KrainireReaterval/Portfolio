/**
 * Helper function to generate metadata for individual pages
 *
 * Next.js 13+ uses the Metadata API instead of next-seo components
 * This helper makes it easy to create consistent metadata across pages
 */

import { Metadata } from 'next'

interface GenerateMetadataParams {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
}

const SITE_URL = 'https://yourportfolio.com' // TODO: Replace with your domain
const SITE_NAME = 'Your Name - Portfolio'

/**
 * Generates Next.js metadata object for a page
 *
 * Usage example:
 * export const metadata = generateMetadata({
 *   title: 'My Projects',
 *   description: 'A collection of my best work',
 *   path: '/projects',
 * })
 */
export function generateMetadata({
  title,
  description,
  path,
  image = '/images/og-default.jpg',
  keywords = [],
}: GenerateMetadataParams): Metadata {
  const url = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return {
    // Page title
    title,

    // Meta description
    description,

    // Keywords for SEO
    keywords: keywords.join(', '),

    // Author information
    authors: [{ name: 'Your Name' }], // TODO: Replace

    // Canonical URL
    alternates: {
      canonical: url,
    },

    // Open Graph metadata (Facebook, LinkedIn, Discord)
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    // Twitter metadata
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@yourhandle', // TODO: Replace
    },

    // Robots meta tag (controls search engine crawling)
    robots: {
      index: true,  // Allow indexing
      follow: true, // Follow links on this page
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
