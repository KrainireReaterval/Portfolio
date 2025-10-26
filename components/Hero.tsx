'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-[90vh] flex items-center py-20 px-6"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-[280px] lg:h-[280px]">
                {/* TODO: Replace with actual profile photo */}
                {/* For now, using a placeholder - add your photo at /public/assets/images/about/profile.webp */}
                <div className="w-full h-full rounded-full border-4 border-accent bg-soft-beige flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(212,165,116,0.3)]">
                  {/* Placeholder - replace with actual image */}
                  <Image
                    src="/assets/images/about/profile.webp"
                    alt="Krista Liu - Product Designer and Storyteller"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 280px"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Fallback text if no image */}
                  <span className="text-6xl md:text-7xl lg:text-8xl font-crimson text-accent">
                    K
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-crimson text-3xl md:text-4xl lg:text-5xl font-semibold text-fg leading-tight mb-4">
              Krista is pleased to make your acquaintance.
            </h1>

            <h2 className="font-inter text-lg md:text-xl lg:text-2xl text-accent font-normal mb-8">
              Here&apos;s what you might find interesting
            </h2>

            <p className="font-inter text-base md:text-lg text-warm-gray leading-relaxed max-w-[600px] mx-auto lg:mx-0 mb-10">
              I&apos;m a product designer and storyteller who explores the intersection of
              technology and human experience. Through case studies, creative writing, and
              research, I document my journey of building meaningful digital experiences.
            </p>

            <Link
              href="/projects"
              className="inline-block bg-gradient-primary text-white font-inter font-semibold text-base px-12 py-4 rounded-custom shadow-soft hover:scale-105 hover:shadow-[0_12px_40px_rgba(212,165,116,0.3)] transition-all duration-300 ease-out"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
