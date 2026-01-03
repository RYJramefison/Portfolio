'use client'

import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'

export default function SnowParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="citation-snow"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: {
            value: 14,
            density: { enable: true, area: 900 },
          },
          color: {
            value: ["#60a5fa", "#a78bfa", "#f4f4f4", "#f472b6"],
          },
          opacity: {
            value: { min: 0.25, max: 0.6 },
          },
          size: {
            value: { min: 1.5, max: 3 },
          },
          move: {
            enable: true,
            direction: 'bottom',
            speed: 0.8,
            outModes: { default: 'out' },
          },
          links: { enable: false },
        },
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}
