import { forwardRef, useEffect, useRef, useState } from "react";

/**
 * A full-height "scene" in the film. Fades its contents in the first time it
 * enters the viewport, and forwards its DOM node so App can scroll to it and
 * move focus there for keyboard and screen-reader users.
 */
const Scene = forwardRef(function Scene(
  { id, as: Tag = "section", ariaLabel, className = "", fade = true, children },
  forwardedRef,
) {
  const localRef = useRef(null);
  const [inView, setInView] = useState(!fade);

  useEffect(() => {
    if (!fade) return;
    const node = localRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [fade]);

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const classes = [
    "scene",
    fade ? "scene--fade" : "",
    inView ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} ref={setRefs} aria-label={ariaLabel} className={classes} tabIndex={-1}>
      {children}
    </Tag>
  );
});

export default Scene;
