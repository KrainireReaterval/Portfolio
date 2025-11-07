/**
 * Test Page for 3D Components
 *
 * This page lets you see the 3D shape in isolation
 * Visit /test-3d to see it
 */

import { Scene } from '@/components/3d/Scene'
import { FloatingGeometry } from '@/components/3d/FloatingGeometry'

export default function Test3DPage() {
  return (
    <main className="test-3d-page">
      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        {/* Instructions */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
            zIndex: 10,
            fontFamily: 'monospace',
            background: 'rgba(0,0,0,0.5)',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <h1 style={{ marginBottom: '10px', fontSize: '24px' }}>
            3D Test Page
          </h1>
          <p style={{ marginBottom: '5px' }}>
            ✅ If you see a rotating shape, Stage 1 works!
          </p>
          <p style={{ marginBottom: '5px' }}>
            📊 Open DevTools → Performance to check FPS
          </p>
          <p style={{ marginBottom: '5px' }}>
            🎯 Target: 60 FPS (green in performance graph)
          </p>
          <p style={{ marginBottom: '5px', fontSize: '12px', opacity: 0.7 }}>
            The shape should rotate smoothly and float up/down
          </p>
        </div>

        {/* 3D Scene */}
        <Scene>
          <FloatingGeometry />
        </Scene>
      </div>
    </main>
  )
}

/**
 * HOW TO TEST:
 *
 * 1. Run: npm run dev
 * 2. Visit: http://localhost:3000/test-3d
 * 3. You should see:
 *    - Purple gradient background
 *    - Blue/indigo rotating octahedron
 *    - Smooth floating motion
 *
 * PERFORMANCE TESTING:
 *
 * Chrome DevTools:
 * 1. Open DevTools (F12 or Cmd+Option+I)
 * 2. Click "Performance" tab
 * 3. Click Record (●) button
 * 4. Wait 3-5 seconds
 * 5. Stop recording
 * 6. Look at "Frames" section:
 *    - Green = 60fps (perfect!)
 *    - Yellow = 30-60fps (okay)
 *    - Red = <30fps (needs optimization)
 *
 * COMMON ISSUES:
 *
 * ❌ White screen:
 *    - Check console for errors
 *    - Make sure Three.js is installed (npm install three)
 *
 * ❌ Shape not visible:
 *    - Camera might be too close/far
 *    - Check Scene camera position
 *
 * ❌ Low FPS (<60):
 *    - Try detail=0 in octahedronGeometry (fewer triangles)
 *    - Reduce dpr to [1, 1] in Scene.tsx
 *
 * ✅ Everything works:
 *    - Move to Stage 2 (mouse interactivity)!
 */
