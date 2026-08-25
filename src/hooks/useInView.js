import { useEffect, useRef, useState } from "react";

/**
 * Reports whether the returned ref's element is currently in the viewport.
 * Falls back to "true" if IntersectionObserver isn't available so content
 * never gets stuck hidden.
 */
export function useInView({ threshold = 0.3, once = true, rootMargin = "0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, once, rootMargin]);

  return [ref, inView];
}
