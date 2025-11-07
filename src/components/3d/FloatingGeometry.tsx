'use client'

/**
 * FloatingGeometry - A simple 3D shape that floats and rotates
 *
 * WHY 'use client'?
 * - Three.js needs browser APIs (WebGL, requestAnimationFrame)
 * - React Three Fiber uses hooks (useState, useRef)
 * - 3D rendering must happen in the browser, not on the server
 */

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

/**
 * STAGE 1: Simple rotating geometry
 *
 * This component creates a single 3D shape that slowly rotates
 * We'll add interactivity in Stage 2
 */
export function FloatingGeometry() {
  // useRef creates a reference to the 3D mesh
  // Think of it like document.getElementById() but for React/Three.js
  const meshRef = useRef<Mesh>(null)

  /**
   * useFrame - The Animation Loop
   *
   * This hook runs on EVERY frame (60 times per second at 60fps)
   * It's React Three Fiber's version of requestAnimationFrame
   *
   * Parameters:
   * - state: Info about the scene (camera, clock, etc.)
   * - delta: Time since last frame in seconds (usually ~0.016 at 60fps)
   */
  useFrame((state, delta) => {
    // Only run if the mesh exists
    if (!meshRef.current) return

    /**
     * Rotation Animation
     *
     * We add a small amount to rotation each frame
     * delta ensures smooth animation regardless of frame rate
     *
     * Without delta: Fast computers = fast rotation, slow computers = slow rotation
     * With delta: Consistent speed on all computers
     */
    meshRef.current.rotation.x += delta * 0.2  // Rotate on X axis (pitch)
    meshRef.current.rotation.y += delta * 0.3  // Rotate on Y axis (yaw)

    /**
     * Floating Animation
     *
     * state.clock.elapsedTime = seconds since scene started
     * Math.sin creates a wave pattern (up and down)
     * This makes the object float smoothly
     */
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
  })

  return (
    /**
     * <mesh> - A 3D Object
     *
     * Combines geometry (shape) + material (appearance)
     * ref={meshRef} lets us access it in useFrame
     */
    <mesh ref={meshRef}>
      {/*
        GEOMETRY - The Shape

        octahedron = 8-sided diamond shape (looks tech-y and modern)
        args = [radius, detail]
        - radius: 1 unit (can be any size)
        - detail: 0 = basic shape, higher = more triangles (smoother but slower)

        OTHER OPTIONS:
        <boxGeometry args={[1, 1, 1]} /> - Cube
        <sphereGeometry args={[1, 32, 32]} /> - Sphere
        <torusGeometry args={[1, 0.3, 16, 100]} /> - Donut
      */}
      <octahedronGeometry args={[1, 0]} />

      {/*
        MATERIAL - How It Looks

        meshStandardMaterial = Realistic material that responds to lights
        - color: Hex color (like CSS)
        - metalness: 0 = plastic, 1 = metal
        - roughness: 0 = mirror, 1 = matte
        - wireframe: Shows just the triangles (great for debug)

        OTHER MATERIAL OPTIONS:
        <meshBasicMaterial /> - Flat color, no lighting (fastest)
        <meshPhongMaterial /> - Shiny, good for plastic
        <meshToonMaterial /> - Cartoon style with hard edges
      */}
      <meshStandardMaterial
        color="#6366f1"      // Indigo color
        metalness={0.7}      // Pretty metallic
        roughness={0.2}      // Fairly smooth/shiny
        wireframe={false}    // Set to true to see triangle structure
      />
    </mesh>
  )
}

/**
 * KEY CONCEPTS:
 *
 * 1. useFrame vs useEffect:
 *    - useFrame: Runs every frame (60fps) - for animations
 *    - useEffect: Runs once or when dependencies change - for setup
 *
 * 2. Why delta?
 *    - Frame rate varies (120fps on gaming monitor, 30fps on old phone)
 *    - delta = time since last frame
 *    - Multiplying by delta makes animation speed consistent
 *
 * 3. Mesh Reference:
 *    - meshRef.current = the actual Three.js Mesh object
 *    - We can modify its properties (position, rotation, scale)
 *    - Changes happen immediately on the GPU
 *
 * 4. Performance:
 *    - Simple geometry (low polygon count) = fast
 *    - Math in useFrame runs on CPU, rendering on GPU
 *    - Octahedron with detail=0 = only 8 triangles (very fast!)
 *
 * NEXT STAGE:
 * We'll add mouse tracking to make this interactive!
 */
