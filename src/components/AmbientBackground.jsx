import { useMemo } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function createParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * -24,
    duration: 20 + Math.random() * 16,
    size: 1 + Math.random() * 2.2,
    drift: -36 + Math.random() * 72,
    opacity: 0.15 + Math.random() * 0.35,
  }));
}

/**
 * A fixed, decorative backdrop shared by every scene: slow film grain,
 * a handful of drifting dust particles, and two soft glowing orbs. Purely
 * atmospheric -- always aria-hidden, never blocks pointer events, and backs
 * off substantially when the user prefers reduced motion.
 */
export default function AmbientBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const particles = useMemo(
    () => createParticles(reducedMotion ? 0 : 24),
    [reducedMotion],
  );

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__orb ambient__orb--one" />
      <div className="ambient__orb ambient__orb--two" />

      {particles.length > 0 && (
        <div className="ambient__particles">
          {particles.map((p) => (
            <span
              key={p.id}
              className="ambient__particle"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                "--drift": `${p.drift}px`,
              }}
            />
          ))}
        </div>
      )}

      <div className="ambient__grain" />
      <div className="ambient__vignette" />
    </div>
  );
}
