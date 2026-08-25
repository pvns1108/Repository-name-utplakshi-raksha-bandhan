import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function getInitial() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Tracks the user's OS-level "reduce motion" preference so scenes can
 * shorten or skip decorative animation while keeping the story intact.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(getInitial);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(QUERY);
    const handleChange = (event) => setReduced(event.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
      return () => mql.removeEventListener("change", handleChange);
    }
    // Safari < 14 fallback
    mql.addListener(handleChange);
    return () => mql.removeListener(handleChange);
  }, []);

  return reduced;
}
