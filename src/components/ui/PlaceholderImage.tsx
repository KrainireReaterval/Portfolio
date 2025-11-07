/**
 * PlaceholderImage Component
 *
 * Generates placeholder images for development
 * Replace with real images in production
 */

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  seed?: string  // For consistent colors
}

export function PlaceholderImage({
  width,
  height,
  text = 'Project Image',
  seed = 'default',
}: PlaceholderImageProps) {
  /**
   * Generate consistent color from seed
   * Same seed = same color every time
   */
  const hashCode = (str: string) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    return hash
  }

  const stringToColor = (str: string) => {
    const hash = hashCode(str)
    const hue = hash % 360
    return `hsl(${hue}, 70%, 60%)`
  }

  const bgColor = stringToColor(seed)

  /**
   * Using data URL for inline SVG
   * This avoids needing external image files during development
   */
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text
        x="50%"
        y="50%"
        font-family="system-ui, sans-serif"
        font-size="18"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `

  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`

  return dataUrl
}

/**
 * USAGE IN DEVELOPMENT:
 *
 * Instead of:
 * coverImage: '/images/projects/my-project.jpg'
 *
 * Use:
 * coverImage: PlaceholderImage({ width: 800, height: 600, text: 'My Project', seed: 'project-1' })
 *
 * OR use a placeholder service:
 * coverImage: 'https://placehold.co/800x600/png'
 *
 * This component is mainly for understanding image optimization
 * In production, you'll use real images from:
 * - /public/images/ folder
 * - CDN (Cloudinary, ImgIX)
 * - CMS (Contentful, Sanity)
 */
