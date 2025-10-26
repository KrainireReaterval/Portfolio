# Krista's Portfolio

A modern portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Typography**: Inter (sans-serif) + Crimson Text (serif)
- **Content**: Markdown with gray-matter
- **Animations**: Framer Motion
- **Icons**: Radix UI Icons

## Project Structure

```
/app                    # Next.js App Router pages
  /projects            # Projects listing and detail pages
    /[slug]           # Dynamic project pages
  /knowledge          # Knowledge base
  /writing            # Creative writing (uses Crimson Text)
  /about              # About page
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Homepage
  globals.css         # Global styles and Tailwind directives

/components            # React components
  /ui                 # Reusable UI components
  /projects           # Project-specific components
  /navigation         # Navigation components

/content              # Markdown content
  /projects          # Project case studies
  /knowledge         # Knowledge posts
  /writing           # Creative writing pieces

/public               # Static assets
  /assets
    /images
      /projects      # Project images
      /about         # About page images
      /writing       # Writing images
    /documents       # PDF and other documents

/lib                  # Utility functions
  utils.ts           # Class name utilities (cn)
  markdown.ts        # Markdown parsing and content fetching
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Custom Colors

The project uses a warm, professional color palette:

- **Background**: `#f8f6f3` (soft warm white)
- **Foreground**: `#2c2c2c` (dark charcoal)
- **Muted**: `#8a8a8a` (gray)
- **Accent**: `#d4a574` (warm gold)
- **Warm Gray**: `#6b6b6b`
- **Soft Beige**: `#f5f2ed`
- **Dark Charcoal**: `#1a1a1a`

## Typography

- **Inter**: Used for technical content, UI elements, and body text
- **Crimson Text**: Used for creative writing sections (serif font)

## Content Management

Content is managed through markdown files in the `/content` directory.

### Adding a New Project

Create a markdown file in `/content/projects/your-project.md`:

```markdown
---
title: "Your Project Title"
slug: "your-project"
category: "MVP"
thumbnail: "/assets/images/projects/your-project/hero.webp"
description: "Brief description"
figmaLink: "https://figma.com/..."
mvpLink: "https://example.com"
slides: 8
order: 1
featured: true
date: "2024-01-15"
---

# Your content here
```

### Content Types

- **Projects**: Case studies and portfolio work
- **Knowledge**: Technical articles and learnings
- **Writing**: Creative writing pieces (poems, stories, essays)

## Features

- SEO-optimized with metadata
- Responsive design (mobile-first)
- Image optimization with Next.js Image component
- Type-safe with TypeScript strict mode
- Markdown-based content management
- Font optimization with next/font

## Development Notes

- Use the `cn()` utility from `lib/utils.ts` for merging Tailwind classes
- Image assets should be placed in `/public/assets/images/`
- All routes use React Server Components by default
- Writing pages use the Crimson Text font for a literary feel

## License

Private portfolio project.
