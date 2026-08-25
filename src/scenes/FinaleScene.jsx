import { forwardRef, useMemo } from "react";
import Scene from "../components/Scene";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

function createStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1 + Math.random() * 1.6,
    delay: Math.random() * 6,
    duration: 3.5 + Math.random() * 4,
  }));
}

/**
 * SCENE 05 -- THE FINAL REVEAL
 * The payoff. A slow, staggered reveal over a warm golden glow and a
 * quiet scatter of drifting stars.
 */
const FinaleScene = forwardRef(function FinaleScene({ config }, ref) {
  const reducedMotion = usePrefersReducedMotion();
  const stars = useMemo(() => createStars(reducedMotion ? 16 : 48), [reducedMotion]);
  const titleLines = config.title.split("\n");

  // Hand-timed pacing so the reveal reads as one deliberate sequence:
  // pretitle -> headline (line by line) -> name -> message -> signature.
  const titleStart = 0.4;
  const titleStep = 0.16;
  const nameDelay = titleStart + titleLines.length * titleStep + 0.25;
  const messageDelay = nameDelay + 0.35;
  const signatureDelay = messageDelay + 0.55;

  return (
    <Scene ref={ref} id="finale" ariaLabel="Happy Raksha Bandhan" className="finale-scene">
      <span className="scene-marker">Scene 05 &middot; The Finale</span>

      <div className="finale-scene__stars" aria-hidden="true">
        {stars.map((s) => (
          <span
            key={s.id}
            className="finale-scene__star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="finale-scene__inner">
        <p className="finale-scene__pretitle reveal-child" style={{ "--delay": "0.05s" }}>
          {config.preTitle}
        </p>

        <h2 className="finale-scene__title">
          {titleLines.map((line, i) => (
            <span
              key={line}
              className="finale-scene__title-line reveal-child"
              style={{ "--delay": `${titleStart + i * titleStep}s` }}
            >
              {line}
            </span>
          ))}
        </h2>

        <p className="finale-scene__name reveal-child" style={{ "--delay": `${nameDelay}s` }}>
          {config.name}
        </p>

        <p
          className="finale-scene__message reveal-child pre-line"
          style={{ "--delay": `${messageDelay}s` }}
        >
          {config.message}
        </p>

        <p
          className="finale-scene__signature reveal-child"
          style={{ "--delay": `${signatureDelay}s` }}
        >
          {config.signature}
        </p>
      </div>
    </Scene>
  );
});

export default FinaleScene;
