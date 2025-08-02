// src/components/ParticlesBackground.tsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0f172a" },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: ["#ffffff", "#facc15"] },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: { min: 3, max: 8 }, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
}
