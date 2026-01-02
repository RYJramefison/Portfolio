"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,

        particles: {
          number: {
            value: 35,
            density: { enable: true, area: 800 },
          },
          color: {
            value: "#e5e7eb",
          },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.4, max: 0.9 },
          },
          size: {
            value: { min: 1.5, max: 3 },
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 1,
            outModes: { default: "out" },
          },
          links: { enable: false },
        },
      }}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
}
