import { useEffect, useState } from "react";
import Scene from "../components/Scene";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * SCENE 01 -- THE OPENING
 * A quiet, self-paced title sequence: eyebrow, headline, and subtitle
 * arrive one at a time, then the Begin control appears last.
 */
export default function OpeningScene({ config, onBegin }) {
  const reducedMotion = usePrefersReducedMotion();
  const [step, setStep] = useState(reducedMotion ? 4 : 0);

  useEffect(() => {
    // Synchronizes with an external system (the OS-level reduced-motion
    // preference, which can change after mount) -- an effect is the
    // right tool here even though the initial value is also set eagerly.
    if (reducedMotion) {
      setStep(4);
      return;
    }
    const timers = [
      setTimeout(() => setStep(1), 700),
      setTimeout(() => setStep(2), 2300),
      setTimeout(() => setStep(3), 4500),
      setTimeout(() => setStep(4), 6400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  return (
    <Scene id="opening" ariaLabel="Opening" className="opening-scene" fade={false}>
      <span className="scene-marker">Scene 01 &middot; Opening</span>

      <div className="opening-scene__inner">
        <p className={`reveal-up opening-scene__eyebrow ${step >= 1 ? "is-visible" : ""}`}>
          {config.eyebrow}
        </p>

        <h1 className={`reveal-up opening-scene__title pre-line ${step >= 2 ? "is-visible" : ""}`}>
          {config.title}
        </h1>

        <p className={`reveal-up opening-scene__subtitle pre-line ${step >= 3 ? "is-visible" : ""}`}>
          {config.subtitle}
        </p>

        <button
          type="button"
          className={`film-button opening-scene__begin reveal-up ${step >= 4 ? "is-visible" : ""}`}
          onClick={onBegin}
          tabIndex={step >= 4 ? 0 : -1}
        >
          <span>{config.beginLabel}</span>
          <span className="film-button__arrow" aria-hidden="true">
            &rarr;
          </span>
        </button>
      </div>
    </Scene>
  );
}
