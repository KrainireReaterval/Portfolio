import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BlogPreview from '@/components/BlogPreview';
import { getFeaturedProjects } from '@/lib/getProjects';
import { getLatestBlogPost } from '@/lib/getBlogPosts';

export const metadata: Metadata = {
  title: "Krista's Portfolio - Product Designer & Storyteller",
  description:
    "Product designer and storyteller exploring the intersection of technology and human experience through case studies, creative writing, and research.",
};

export default async function HomePage() {
  // Fetch data on the server
  const featuredProjects = await getFeaturedProjects();
  const latestPost = await getLatestBlogPost();

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="bg-gradient-accent py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <h2 className="font-crimson text-4xl md:text-5xl font-semibold text-fg text-center mb-12">
            Featured Work
          </h2>

          {/* Project Grid */}
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted font-inter text-lg">
              No featured projects yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview post={latestPost} />

      {/* Minimal Footer */}
      <footer className="bg-dark-charcoal py-12 px-6 text-center">
        <p className="font-inter text-sm text-muted">
          © {new Date().getFullYear()} Krista. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
