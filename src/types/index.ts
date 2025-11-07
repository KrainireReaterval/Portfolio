/**
 * TypeScript Type Definitions
 *
 * Defines the shape of your data structures
 * Helps prevent bugs and provides autocomplete in your editor
 */

// ===== PROJECT TYPES =====

/**
 * Represents a single project in your portfolio
 */
export interface Project {
  id: string            // Unique identifier (e.g., 'ecommerce-platform')
  title: string         // Project name
  description: string   // Short description (1-2 sentences)
  longDescription: string // Full description with details
  coverImage: string    // Path to cover image (e.g., '/images/projects/cover.jpg')
  images: string[]      // Array of additional images
  tags: string[]        // Technologies used (e.g., ['Next.js', 'TypeScript', 'Tailwind'])
  demoUrl?: string      // Optional live demo URL
  githubUrl?: string    // Optional GitHub repository URL
  featured: boolean     // Whether to show on homepage
  date: string          // Completion date (ISO format: '2024-03-15')
  category: ProjectCategory
}

export type ProjectCategory = 'web' | 'mobile' | 'design' | 'research' | 'other'

// ===== RESEARCH TYPES =====

/**
 * Represents a research paper or study
 */
export interface Research {
  id: string
  title: string
  abstract: string      // Research summary
  authors: string[]     // List of authors
  date: string          // Publication date
  tags: string[]        // Research topics/keywords
  pdfUrl?: string       // Link to PDF
  externalUrl?: string  // Link to publication (e.g., arXiv)
  coverImage?: string   // Visual representation
  featured: boolean
}

// ===== BLOG POST TYPES =====

/**
 * Represents a blog post
 */
export interface BlogPost {
  id: string            // URL slug (e.g., 'getting-started-with-nextjs')
  title: string
  excerpt: string       // Short preview (used in lists and SEO)
  content: string       // Full markdown content
  coverImage?: string
  date: string          // Publication date (ISO format)
  updatedAt?: string    // Last updated date
  tags: string[]        // Post categories/topics
  readingTime: number   // Estimated reading time in minutes
  featured: boolean     // Show on homepage
  published: boolean    // Draft vs published
}

// ===== SOCIAL LINKS =====

/**
 * Social media link for Connect page
 */
export interface SocialLink {
  platform: SocialPlatform
  url: string
  username: string      // Display name
  icon?: string         // Optional custom icon path
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'email'
  | 'instagram'
  | 'youtube'
  | 'dribbble'
  | 'behance'
  | 'other'

// ===== FORM TYPES =====

/**
 * Contact form submission data
 */
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot?: string     // Spam prevention field (should always be empty)
}

// ===== SEO TYPES =====

/**
 * Page metadata for SEO
 */
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url: string
}
