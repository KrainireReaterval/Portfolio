/**
 * Next.js Configuration
 *
 * This file configures Next.js behavior
 */

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /**
   * IMAGE OPTIMIZATION CONFIGURATION
   *
   * Next.js Image component requires explicit permission
   * to load images from external domains
   *
   * WHY?
   * - Security: Prevents loading images from untrusted sources
   * - Performance: Only optimizes images from known domains
   * - Cost control: Image optimization uses server resources
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**', // Allows all paths
      },
      // Add your own image CDN here when you have one:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'res.cloudinary.com',
      // },
    ],

    /**
     * DEVICE SIZES
     *
     * Defines breakpoints for responsive images
     * Next.js generates optimized images for each size
     */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    /**
     * IMAGE SIZES
     *
     * For images using "sizes" prop
     * These are widths in pixels
     */
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    /**
     * FORMATS
     *
     * Modern image formats to use
     * - WebP: Better compression than JPEG (25-35% smaller)
     * - AVIF: Even better than WebP (50% smaller) but slower to encode
     */
    formats: ['image/webp'],
    // formats: ['image/avif', 'image/webp'], // Uncomment for AVIF support
  },
}

export default nextConfig

/**
 * UNDERSTANDING IMAGE OPTIMIZATION:
 *
 * When you use <Image src="https://placehold.co/800x600" />:
 *
 * 1. Next.js intercepts the request
 * 2. Downloads original image (800x600)
 * 3. Converts to WebP (smaller file)
 * 4. Generates multiple sizes (640w, 750w, 1080w, etc.)
 * 5. Serves optimal size based on device
 * 6. Caches result for future requests
 *
 * EXAMPLE:
 * - Mobile (375px screen): Gets 640w image in WebP
 * - Desktop (1920px screen): Gets 1920w image in WebP
 * - Retina displays: Gets 2x size automatically
 *
 * BENEFITS:
 * - 30-50% smaller file sizes
 * - Faster page loads
 * - Better Core Web Vitals scores
 * - Automatic lazy loading
 *
 * COST:
 * - First request is slow (needs to optimize)
 * - Subsequent requests are fast (cached)
 * - Uses server CPU during optimization
 *
 * FOR PRODUCTION:
 * Consider using an image CDN like:
 * - Cloudinary (generous free tier)
 * - ImgIX (professional features)
 * - Uploadcare (easy integration)
 */
