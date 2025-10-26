'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import type { BlogPost } from '@/lib/types';

interface BlogPreviewProps {
  post: BlogPost | null;
}

export default function BlogPreview({ post }: BlogPreviewProps) {
  if (!post) {
    return null;
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="bg-bg py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-crimson text-4xl md:text-5xl font-semibold text-fg text-center mb-12"
        >
          Latest Thoughts
        </motion.h2>

        {/* Blog Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <Link href={`/knowledge`} className="block group">
            <article className="max-w-[800px] mx-auto bg-soft-beige border border-border rounded-custom p-8 md:p-10 shadow-soft hover:shadow-[0_12px_40px_rgba(44,44,44,0.12)] transition-shadow duration-300">
              {/* Post Title */}
              <h3 className="font-crimson text-2xl md:text-3xl font-semibold text-fg mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                {post.title}
              </h3>

              {/* Post Date */}
              <time
                dateTime={post.date}
                className="block font-inter text-sm text-muted mb-5"
              >
                {formatDate(post.date)}
              </time>

              {/* Post Excerpt */}
              <p className="font-inter text-base text-warm-gray leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-accent font-semibold text-base group-hover:gap-3 transition-all duration-200">
                <span>Read More</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </article>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
