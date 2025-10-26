'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="group bg-white border border-border rounded-custom overflow-hidden shadow-soft hover:shadow-[0_16px_48px_rgba(44,44,44,0.15)] hover:-translate-y-2 hover:border-accent transition-all duration-300 ease-out h-full flex flex-col">
          {/* Thumbnail with Category Badge */}
          <div className="relative aspect-video w-full overflow-hidden bg-soft-beige">
            {/* TODO: Add actual project images to /public/assets/images/projects/ */}
            {/* For now, using placeholder - replace thumbnail path in markdown frontmatter */}
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />

            {/* Fallback gradient background if image doesn't exist */}
            <div className="absolute inset-0 bg-gradient-accent -z-10" />

            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-block bg-accent text-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-inter text-xl font-bold text-fg mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            <p className="font-inter text-base text-muted leading-relaxed mb-4 line-clamp-3 flex-grow">
              {project.description}
            </p>

            <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              <span>View Project</span>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
