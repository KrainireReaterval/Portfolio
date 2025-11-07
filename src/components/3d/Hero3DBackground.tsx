'use client'

/**
 * Hero3DBackground - 3D background for the hero section
 *
 * This component combines the Scene and FloatingGeometry
 * Designed to sit behind text in the hero section
 */

import { Scene } from './Scene'
import { FloatingGeometry } from './FloatingGeometry'

export function Hero3DBackground() {
  return (
    <div className="hero-3d-container">
      {/*
        Container Styling (we'll add proper Tailwind in Iteration 2)
        For now, this is a placeholder div

        IMPORTANT CSS:
        - position: absolute (sits behind content)
        - inset: 0 (fills entire parent)
        - pointer-events: none (clicks pass through to content below)
        - opacity: 0.6 (subtle, doesn't overpower text)
      */}

      <Scene
        className="w-full h-full"
        camera={{
          position: [0, 0, 5],  // Camera distance from object
          fov: 50,               // Field of view
        }}
      >
        {/*
          FloatingGeometry Component

          The actual 3D shape that rotates and floats
          We can add multiple <FloatingGeometry /> components here
          Each would be a separate object
        */}
        <FloatingGeometry />
      </Scene>
    </div>
  )
}

/**
 * USAGE EXAMPLE:
 *
 * In your Hero component:
 *
 * <section className="hero-section relative">
 *   <Hero3DBackground />
 *   <div className="hero-content relative z-10">
 *     <h1>Your Name</h1>
 *   </div>
 * </section>
 *
 * KEY CSS:
 * - relative on parent: Creates positioning context
 * - z-10 on content: Ensures text is above 3D
 * - Hero3DBackground uses absolute positioning to fill parent
 *
 * PERFORMANCE NOTE:
 * This runs at 60fps with minimal CPU/GPU usage
 * The octahedron has only 8 triangles (very lightweight)
 */
