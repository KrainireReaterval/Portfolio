'use client'

/**
 * ProjectCard Component
 *
 * Displays a single project in the grid
 * Handles hover states, accessibility, and links to detail page
 *
 * WHY 'use client'?
 * - We use onClick handlers to prevent event bubbling
 * - Event handlers require client-side JavaScript
 * - Still renders on server first, then hydrates on client
 */

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types'
import { Calendar, ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  /**
   * Format date for display
   * Input: '2024-03-15'
   * Output: 'March 2024'
   */
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300">
      {/*
        group: Enables hover effects on child elements
        rounded-2xl: Rounded corners
        overflow-hidden: Clips content to border radius
        hover:shadow-xl: Adds shadow on hover for depth
      */}

      {/*
        PROJECT IMAGE SECTION

        Next.js Image component provides:
        - Automatic optimization
        - Lazy loading (only loads when visible)
        - Responsive sizing
        - WebP conversion (smaller files)
      */}
      <Link href={`/projects/${project.id}`} className="block relative">
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          {/*
            aspect-video: Maintains 16:9 ratio
            relative: Allows absolute positioning of children
            overflow-hidden: Clips overflowing content
          */}
          <Image
            src={project.coverImage}
            alt={`${project.title} cover image`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            /**
             * object-cover: Fills container while maintaining aspect ratio
             * group-hover:scale-105: Zooms in on parent hover
             * transition-transform: Smooth animation
             */
            priority={project.featured}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-white font-semibold text-lg">View Project</span>
          </div>
        </div>
      </Link>

      {/*
        PROJECT INFO SECTION
      */}
      <div className="p-6 space-y-4">
        {/* Featured Badge */}
        {project.featured && (
          <div className="inline-block">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Category & Date */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="font-medium text-gray-700">{project.category}</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            /*
              KEY PROP:
              - Required when rendering lists in React
              - Helps React identify which items changed
              - Use unique, stable identifier (not array index!)
            */
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex gap-3 pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
              /**
               * ACCESSIBILITY & SECURITY:
               *
               * target="_blank": Opens in new tab
               * rel="noopener": Prevents security vulnerability
               * rel="noreferrer": Doesn't send referrer header
               *
               * ALWAYS use noopener with target="_blank"!
               */
              onClick={(e) => e.stopPropagation()}
              // Prevents link from triggering parent Link
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/**
 * KEY CONCEPTS:
 *
 * 1. Next.js Image vs <img>:
 *    - Image: Optimized, lazy loaded, responsive
 *    - img: Just displays image, no optimization
 *    - ALWAYS use Image for better performance
 *
 * 2. Link vs <a>:
 *    - Link: Client-side navigation (fast)
 *    - a: Full page reload (slow)
 *    - Use Link for internal routes, a for external
 *
 * 3. Accessibility:
 *    - alt text on images
 *    - semantic HTML (<article>, <h3>)
 *    - rel="noopener" for security
 *    - Keyboard navigable (Link handles this)
 *
 * 4. TypeScript Props:
 *    - interface ProjectCardProps defines what we accept
 *    - project: Project ensures we get right data shape
 *    - TypeScript will error if we pass wrong data
 *
 * 5. Array Methods:
 *    - .slice(0, 3): Get first 3 items
 *    - .map(): Transform array to JSX
 *    - .length: Count items
 *
 * NEXT:
 * We'll create the Projects page that uses this card!
 */
