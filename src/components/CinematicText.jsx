import { useInView } from "../hooks/useInView";

/**
 * A single line of text that fades and rises into place the moment it
 * enters the viewport. Used to pace out the emotional message scene one
 * line at a time instead of dumping a paragraph on screen.
 */
export default function CinematicText({
  text,
  size = "md",
  offset = "none",
  as: Tag = "p",
  className = "",
}) {
  const [ref, inView] = useInView({ threshold: 0.55 });

  const classes = [
    "cinematic-line",
    `cinematic-line--${size}`,
    offset !== "none" ? `cinematic-line--offset-${offset}` : "",
    inView ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="cinematic-line__row">
      <Tag ref={ref} className={classes}>
        {text}
      </Tag>
    </div>
  );
}
