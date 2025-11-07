'use client' // This tells Next.js to run this component in the browser (3D needs browser APIs)

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

/**
 * A simple rotating 3D cube
 * This demonstrates the basics of React Three Fiber
 */
export function RotatingCube() {
  // useRef lets us reference the 3D mesh directly (needed for animation)
  const meshRef = useRef<Mesh>(null)

  // useFrame runs on every frame (60fps), perfect for animations
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the cube on X and Y axes
      // delta = time since last frame (ensures smooth animation regardless of FPS)
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    // mesh = 3D object
    <mesh ref={meshRef}>
      {/* boxGeometry = the shape (width, height, depth) */}
      <boxGeometry args={[1, 1, 1]} />

      {/* meshStandardMaterial = how light bounces off the surface */}
      <meshStandardMaterial
        color="#4f46e5" // Indigo color
        metalness={0.5}  // How metallic it looks (0-1)
        roughness={0.3}  // How rough/smooth the surface is (0-1)
      />
    </mesh>
  )
}
