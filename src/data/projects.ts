/**
 * Mock Project Data
 *
 * This file contains sample projects for development
 * Later, you can replace this with:
 * - JSON files
 * - Database queries
 * - CMS API calls
 */

import { Project } from '@/types'

/**
 * PROJECTS ARRAY
 *
 * Each project follows the Project interface from types/index.ts
 * This ensures type safety across the app
 */
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern, headless e-commerce platform built with Next.js',
    longDescription: `
      A full-stack e-commerce platform featuring:
      - Server-side rendering for SEO
      - Real-time inventory management
      - Stripe payment integration
      - Admin dashboard with analytics

      Built with Next.js 14, TypeScript, Prisma, and PostgreSQL.
      Deployed on Vercel with 99.9% uptime.
    `,
    coverImage: 'https://placehold.co/800x600/6366f1/white?text=E-Commerce+Platform',
    images: [
      'https://placehold.co/1200x800/6366f1/white?text=Dashboard',
      'https://placehold.co/1200x800/6366f1/white?text=Product+Page',
      'https://placehold.co/1200x800/6366f1/white?text=Checkout',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    date: '2024-03-15',
    category: 'web',
  },
  {
    id: '3d-portfolio',
    title: '3D Interactive Portfolio',
    description: 'A creative portfolio website with Three.js integration',
    longDescription: `
      An immersive portfolio experience combining 2D and 3D elements.
      Features include:
      - WebGL-powered 3D scenes
      - Smooth scroll animations
      - Interactive particle systems
      - Responsive design across all devices

      Technologies: React Three Fiber, Framer Motion, Tailwind CSS
    `,
    coverImage: 'https://placehold.co/800x600/8b5cf6/white?text=3D+Portfolio',
    images: [
      'https://placehold.co/1200x800/8b5cf6/white?text=3D+Scene',
      'https://placehold.co/1200x800/8b5cf6/white?text=Interactions',
    ],
    tags: ['Three.js', 'React', 'WebGL', 'Framer Motion'],
    demoUrl: 'https://portfolio-demo.example.com',
    githubUrl: 'https://github.com/yourusername/3d-portfolio',
    featured: true,
    date: '2024-02-20',
    category: 'web',
  },
  {
    id: 'ai-image-generator',
    title: 'AI Image Generator',
    description: 'Text-to-image generation using Stable Diffusion API',
    longDescription: `
      An intuitive interface for AI-powered image generation.
      Key features:
      - Real-time prompt suggestions
      - Style presets and customization
      - Image history and favorites
      - Batch generation support

      Powered by Stable Diffusion API with custom fine-tuning.
    `,
    coverImage: 'https://placehold.co/800x600/ec4899/white?text=AI+Generator',
    images: ['https://placehold.co/1200x800/ec4899/white?text=Generated+Images'],
    tags: ['AI', 'Next.js', 'OpenAI', 'TypeScript'],
    demoUrl: 'https://ai-demo.example.com',
    featured: false,
    date: '2024-01-10',
    category: 'web',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates',
    longDescription: `
      A Trello-inspired task management tool with real-time collaboration.
      Features:
      - Drag-and-drop task boards
      - Real-time multiplayer updates
      - Team workspaces
      - Activity tracking and notifications

      Built with Next.js, Supabase, and WebSockets.
    `,
    coverImage: 'https://placehold.co/800x600/10b981/white?text=Task+Manager',
    images: [],
    tags: ['Next.js', 'Supabase', 'WebSockets', 'React DnD'],
    githubUrl: 'https://github.com/yourusername/task-app',
    featured: false,
    date: '2023-12-05',
    category: 'web',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Real-time weather visualization with interactive maps',
    longDescription: `
      A beautiful weather dashboard with data visualization.
      Features:
      - 7-day forecast
      - Interactive weather maps
      - Historical data charts
      - Location-based alerts

      Uses OpenWeatherMap API and Chart.js for visualizations.
    `,
    coverImage: 'https://placehold.co/800x600/f59e0b/white?text=Weather+Dashboard',
    images: [],
    tags: ['React', 'Chart.js', 'API', 'TypeScript'],
    demoUrl: 'https://weather-demo.example.com',
    featured: false,
    date: '2023-11-20',
    category: 'web',
  },
  {
    id: 'mobile-fitness-app',
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile app for workout tracking',
    longDescription: `
      A comprehensive fitness tracking application.
      Features:
      - Workout logging and history
      - Progress tracking with charts
      - Custom exercise library
      - Social sharing

      Built with React Native and Expo.
    `,
    coverImage: 'https://placehold.co/800x600/ef4444/white?text=Fitness+App',
    images: [],
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    githubUrl: 'https://github.com/yourusername/fitness-app',
    featured: false,
    date: '2023-10-15',
    category: 'mobile',
  },
]

/**
 * HELPER FUNCTIONS
 *
 * These make it easier to work with project data
 */

/**
 * Get all featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

/**
 * Get project by ID
 * Used for dynamic project detail pages
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category)
}

/**
 * Get all unique tags from all projects
 * Useful for filter UI
 */
export function getAllTags(): string[] {
  const allTags = projects.flatMap((project) => project.tags)
  return Array.from(new Set(allTags)).sort()
}

/**
 * Get all unique categories
 */
export function getAllCategories(): Project['category'][] {
  const categories = projects.map((project) => project.category)
  return Array.from(new Set(categories))
}

/**
 * TYPE SAFETY BENEFITS:
 *
 * Because we typed projects as Project[], TypeScript will:
 * - Warn if we forget required fields
 * - Autocomplete property names
 * - Catch typos in category names
 * - Ensure date format is consistent
 *
 * Try removing a required field and see the error!
 */
