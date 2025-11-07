'use client'

/**
 * Scene Component - WebGL Canvas Wrapper
 *
 * This creates the 3D rendering context and sets up the environment
 * Think of it like a <canvas> element with superpowers
 */

import { Canvas } from '@react-three/fiber'
import { ReactNode, Suspense } from 'react'

interface SceneProps {
  children: ReactNode
  className?: string
  camera?: {
    position?: [number, number, number]
    fov?: number
  }
}

export function Scene({
  children,
  className,
  camera = { position: [0, 0, 5], fov: 50 }
}: SceneProps) {
  return (
    <Canvas
      className={className}
      camera={camera}
      /**
       * dpr (Device Pixel Ratio) Settings
       *
       * Controls rendering resolution
       * - [1, 2] means: minimum 1x, maximum 2x pixel density
       *
       * WHY LIMIT TO 2?
       * - iPhone 15 Pro has 3x pixel density
       * - Rendering at 3x = 9x more pixels (3² = 9)
       * - Most users can't tell the difference between 2x and 3x
       * - Limiting to 2x saves battery and improves performance
       *
       * PERFORMANCE TIP:
       * Set to [1, 1] on low-end devices for 60fps
       */
      dpr={[1, 2]}

      /**
       * Performance Mode
       *
       * 'demand' = only re-render when something changes
       * Default is continuous (60fps always, even when nothing moves)
       *
       * WHY 'demand'?
       * - Saves battery on mobile
       * - Reduces CPU/GPU usage
       * - Still smooth because we invalidate on animation
       *
       * DOWNSIDE:
       * - Need to manually trigger re-renders
       * - We'll use useFrame which handles this automatically
       */
      // frameloop="demand" // Uncomment for even better performance

      /**
       * gl (WebGL Renderer) Settings
       *
       * These control how Three.js renders the scene
       */
      gl={{
        antialias: true,  // Smooth edges (slight performance cost)
        alpha: true,      // Transparent background
        /**
         * powerPreference
         *
         * 'default' = balanced performance
         * 'high-performance' = use discrete GPU on laptops
         * 'low-power' = use integrated GPU (battery saving)
         *
         * We use default because:
         * - Automatic selection works well
         * - 'high-performance' drains battery
         */
        powerPreference: 'default',
      }}
    >
      {/**
       * Suspense Boundary
       *
       * Shows fallback while 3D content loads
       * Required if you're loading 3D models (we'll add this in Stage 3)
       *
       * For now it just prevents errors if child components suspend
       */}
      <Suspense fallback={null}>
        {/*
          LIGHTING SETUP

          Two-light setup is standard for 3D:
          1. Ambient: Base lighting from all directions
          2. Directional: Main light source with shadows
        */}

        {/*
          Ambient Light
          - Illuminates everything equally
          - No shadows
          - Prevents pure black areas
          - intensity: 0.4 = subtle base lighting
        */}
        <ambientLight intensity={0.4} />

        {/*
          Directional Light
          - Like sunlight (parallel rays)
          - Creates depth through shadows
          - position: Top-right-front
          - intensity: 1.0 = strong main light
        */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.0}
          castShadow={false}  // Shadows are expensive, we don't need them yet
        />

        {/* Your 3D objects render here */}
        {children}
      </Suspense>
    </Canvas>
  )
}

/**
 * PERFORMANCE BREAKDOWN:
 *
 * Settings that HELP performance:
 * ✅ dpr={[1, 2]} - Caps pixel density
 * ✅ Suspense - Prevents render blocking
 * ✅ castShadow={false} - Shadows are expensive
 *
 * Settings that HURT performance:
 * ❌ antialias: true - Small cost, but worth it for quality
 * ❌ alpha: true - Small cost for transparent background
 *
 * NET RESULT:
 * Should easily hit 60fps on most devices with simple geometry
 *
 * HOW TO MEASURE:
 * 1. Open Chrome DevTools
 * 2. Performance tab → Record
 * 3. Interact with 3D
 * 4. Stop recording
 * 5. Look for "Frames" - aim for green (60fps)
 *
 * NEXT STAGE:
 * We'll add mouse tracking and make the geometry respond to cursor!
 */
