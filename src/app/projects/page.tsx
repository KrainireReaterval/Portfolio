/**
 * Projects Page
 *
 * Displays all projects in a grid layout
 * This is a Server Component (default in Next.js App Router)
 */

import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Section } from '@/components/layout/Section'
import { PageTransition } from '@/components/ui/PageTransition'
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data'
import { SITE_URL } from '@/lib/seo/config'
import type { Metadata } from 'next'

/**
 * PAGE METADATA - Enhanced SEO
 *
 * Overrides the default metadata from layout.tsx
 * Includes Open Graph and Twitter cards for social sharing
 */
export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of web development projects, 3D experiments, and interactive experiences. Featuring Next.js, React, Three.js, and modern web technologies.',
  /**
   * OPEN GRAPH (for Facebook, LinkedIn, Discord)
   *
   * When someone shares /projects on social media,
   * this controls what the preview card looks like
   */
  openGraph: {
    title: 'Projects | Your Name',
    description: 'Explore my portfolio of web development and creative coding projects.',
    url: `${SITE_URL}/projects`,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/og-projects.jpg`, // TODO: Create this image
        width: 1200,
        height: 630,
        alt: 'Projects Portfolio',
      },
    ],
  },
  /**
   * TWITTER CARD
   *
   * Controls Twitter/X link previews
   */
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Your Name',
    description: 'Explore my portfolio of web development and creative coding projects.',
    images: [`${SITE_URL}/images/og-projects.jpg`],
  },
}

export default function ProjectsPage() {
  return (
    <PageTransition variant="slide">
      <main className="projects-page">
      {/*
        BREADCRUMB STRUCTURED DATA

        Tells Google about page hierarchy
        Shows breadcrumbs in search results: Home > Projects
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Projects', url: '/projects' },
            ])
          ),
        }}
      />

      {/*
        PAGE HEADER
        Introduces the page content
      */}
      <Section className="pt-32">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-6xl font-bold text-gray-900">Projects</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A collection of my work spanning web development, 3D graphics,
            and interactive experiences. Each project represents a unique
            challenge and learning opportunity.
          </p>

          {/* Project count */}
          <p className="text-sm text-gray-500">
            Showing <strong className="text-gray-900">{projects.length}</strong> projects
          </p>
        </div>
      </Section>

      {/*
        PROJECTS GRID SECTION

        We'll add filters here in Iteration 2
        For now, just displaying all projects
      */}
      <Section className="py-16">
        {/*
          GRID LAYOUT

          grid-cols-1: 1 column on mobile
          md:grid-cols-2: 2 columns on tablets
          lg:grid-cols-3: 3 columns on desktops
          gap-8: Space between cards
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*
            MAPPING PROJECTS TO CARDS

            .map() transforms each project object into a ProjectCard component

            IMPORTANT:
            - key={project.id}: Required for React list rendering
            - Must be unique and stable (don't use array index!)
            - Helps React efficiently update the DOM
          */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/*
          EMPTY STATE

          Shows when no projects exist (won't show now, but good practice)
        */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found.</p>
          </div>
        )}
      </Section>
    </main>
    </PageTransition>
  )
}

/**
 * WHY SERVER COMPONENT?
 *
 * This page has NO 'use client' directive, making it a Server Component
 *
 * BENEFITS:
 * ✅ Faster initial load (HTML sent from server)
 * ✅ Better SEO (content in HTML source)
 * ✅ Smaller JavaScript bundle
 * ✅ Can access backend directly (if needed later)
 *
 * WHEN TO USE CLIENT COMPONENT?
 * - Need useState, useEffect
 * - Browser APIs (localStorage, etc.)
 * - Event handlers (we'll add these in Iteration 2 for filters)
 *
 * NEXT.JS ROUTING:
 * - This file is at: app/projects/page.tsx
 * - URL becomes: /projects
 * - Automatic routing based on folder structure!
 *
 * FILE STRUCTURE FOR ROUTING:
 * app/
 * ├── page.tsx           → /
 * ├── projects/
 * │   └── page.tsx       → /projects
 * ├── blog/
 * │   └── page.tsx       → /blog
 * └── about/
 *     └── page.tsx       → /about
 *
 * DYNAMIC ROUTES (Next Iteration):
 * app/projects/[id]/page.tsx → /projects/anything
 *
 * COMPONENT COMMUNICATION:
 * - projects (data) → ProjectsPage (parent) → ProjectCard (child)
 * - Data flows down through props
 * - ProjectCard receives one project at a time
 * - ProjectsPage handles the list
 *
 * NEXT ITERATION:
 * We'll add client-side filtering and sorting!
 */
