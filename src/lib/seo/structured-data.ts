/**
 * Structured Data (JSON-LD) Helpers
 *
 * JSON-LD = JavaScript Object Notation for Linked Data
 * Helps search engines understand your content better
 *
 * WHY USE STRUCTURED DATA?
 * - Rich snippets in Google (star ratings, dates, etc.)
 * - Better understanding of your content
 * - Improved click-through rates
 * - Voice search optimization
 */

import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './config'

/**
 * UNDERSTANDING JSON-LD:
 *
 * JSON-LD tells search engines:
 * - What type of thing this is (Person, Organization, Article, etc.)
 * - Properties of that thing (name, url, description, etc.)
 * - Relationships between things
 *
 * Google uses this to create:
 * - Knowledge panels
 * - Rich search results
 * - Featured snippets
 */

/**
 * Website/Organization Schema
 *
 * Tells Google about your portfolio as a whole
 * Shows up in knowledge panels and search
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    /**
     * Potential Action: Search
     * Enables Google's "Search this site" feature
     */
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Person Schema
 *
 * Tells Google about you as a person
 * Helps with personal branding and knowledge panels
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name', // TODO: Replace
    url: SITE_URL,
    image: `${SITE_URL}/images/profile.jpg`, // TODO: Add your photo
    jobTitle: 'Creative Developer & Designer',
    description: SITE_DESCRIPTION,
    /**
     * Same As: Links to your profiles
     * Helps Google connect your online presence
     */
    sameAs: [
      'https://github.com/yourusername', // TODO: Replace
      'https://linkedin.com/in/yourprofile',
      'https://twitter.com/yourhandle',
    ],
    /**
     * Works For: Organization you work for
     * Optional - only if employed
     */
    // worksFor: {
    //   '@type': 'Organization',
    //   name: 'Company Name',
    // },
  }
}

/**
 * BreadcrumbList Schema
 *
 * Shows breadcrumb navigation in search results
 * Example: Home > Projects > Project Name
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

/**
 * Article Schema (for blog posts)
 *
 * Tells Google this is an article/blog post
 * Enables article rich snippets (date, author, etc.)
 */
export function generateArticleSchema({
  title,
  description,
  publishedTime,
  modifiedTime,
  image,
  url,
  tags,
}: {
  title: string
  description: string
  publishedTime: string // ISO format: '2024-03-15'
  modifiedTime?: string
  image?: string
  url: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || `${SITE_URL}/images/og-default.jpg`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: 'Your Name', // TODO: Replace
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Your Name',
      url: SITE_URL,
    },
    url: `${SITE_URL}${url}`,
    keywords: tags?.join(', '),
  }
}

/**
 * Helper: Insert JSON-LD Script
 *
 * This is how you add JSON-LD to a page
 * Returns a script element with structured data
 *
 * USAGE in Server Component:
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
 * />
 */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data)
}

/**
 * USAGE EXAMPLES:
 *
 * 1. In layout.tsx (site-wide):
 * <JsonLd data={generateWebsiteSchema()} />
 * <JsonLd data={generatePersonSchema()} />
 *
 * 2. In blog post page:
 * <JsonLd data={generateArticleSchema({ ... })} />
 *
 * 3. In projects page:
 * <JsonLd data={generateBreadcrumbSchema([
 *   { name: 'Home', url: '/' },
 *   { name: 'Projects', url: '/projects' }
 * ])} />
 *
 * TESTING:
 * 1. Google Rich Results Test:
 *    https://search.google.com/test/rich-results
 * 2. Schema Markup Validator:
 *    https://validator.schema.org/
 *
 * BENEFITS:
 * - Rich snippets in search results
 * - Better click-through rates (20-30% increase typical)
 * - Knowledge panels for personal brand
 * - Voice search optimization
 */
