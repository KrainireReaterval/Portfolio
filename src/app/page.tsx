/**
 * Homepage - The main landing page of your portfolio
 *
 * This is a Server Component by default (no 'use client')
 * Server Components are faster because they render on the server
 * We'll add 'use client' only to components that need interactivity
 */

import { Hero } from '@/components/layout/Hero'
import { Section } from '@/components/layout/Section'
import { PageTransition } from '@/components/ui/PageTransition'

export default function Home() {
  return (
    <PageTransition variant="fade">
      <main className="main">
      {/*
        <main> is semantic HTML for the primary content
        Each page should have exactly one <main> element
      */}

      {/* HERO SECTION - First thing users see */}
      <Hero />

      {/* FEATURED WORK SECTION - Showcase best projects */}
      <Section id="featured-work" background="default">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Featured Work</h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Selected projects that showcase my approach to design and development.
        </p>

        {/* Placeholder for project cards - we'll build these later */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors">
            <p className="text-gray-400 font-medium">Project 1</p>
          </div>
          <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors">
            <p className="text-gray-400 font-medium">Project 2</p>
          </div>
          <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors">
            <p className="text-gray-400 font-medium">Project 3</p>
          </div>
        </div>
      </Section>

      {/* ABOUT SECTION - Brief introduction */}
      <Section id="about" background="dark">
        <h2 className="text-5xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I'm a creative developer who bridges the gap between design and code.
            With a background in both visual design and software engineering,
            I create digital experiences that are both beautiful and functional.
          </p>
          <p>
            Currently exploring the intersection of 3D graphics, interaction design,
            and web performance.
          </p>
        </div>
      </Section>

      {/* CTA SECTION - Encourage engagement */}
      <Section id="cta" background="accent">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-gray-900">Let's work together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's chat about how we can bring it to life.
          </p>
          <a
            href="/connect"
            className="inline-block px-10 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-all hover:scale-105 mt-4"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </main>
    </PageTransition>
  )
}

/**
 * STRUCTURE EXPLANATION:
 *
 * 1. Component Imports:
 *    - @ alias points to /src (configured in tsconfig.json)
 *    - Makes imports cleaner: @/components instead of ../../../components
 *
 * 2. Layout Pattern:
 *    - Hero: Full-height landing section
 *    - Sections: Modular content blocks
 *    - Each section has a clear purpose
 *
 * 3. Semantic HTML:
 *    - <main>: Primary content
 *    - <section>: Distinct content areas
 *    - <h2>: Section headings (h1 is in Hero)
 *
 * 4. Class Naming:
 *    - Descriptive, not generic
 *    - section-title, cta-button, etc.
 *    - We'll style these with Tailwind in Iteration 2
 *
 * 5. Accessibility:
 *    - id attributes allow #anchor-links
 *    - Proper heading hierarchy (h1 → h2)
 *    - Semantic elements help screen readers
 *
 * NEXT ITERATION:
 * We'll replace these className strings with Tailwind utility classes
 * for beautiful, responsive styling!
 */
