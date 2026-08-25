import { useState } from "react";

/**
 * A single memory card. If its photo is missing or fails to load, this
 * falls back to a tasteful typographic placeholder instead of a broken
 * image icon -- the layout never breaks either way.
 */
export default function MemoryCard({ image, number, title, text, position = 1 }) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(image) && !errored;

  return (
    <article className={`memory-card memory-card--pos-${position}`}>
      <div className="memory-card__frame">
        {showImage ? (
          <img
            src={image}
            alt={title}
            className="memory-card__image"
            loading="lazy"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="memory-card__placeholder" aria-hidden="true">
            <span className="memory-card__placeholder-number">{number}</span>
            <span className="memory-card__placeholder-ring" />
          </div>
        )}
        <div className="memory-card__overlay" />
      </div>

      <div className="memory-card__caption">
        <span className="memory-card__number" aria-hidden="true">
          {number}
        </span>
        <h3 className="memory-card__title">{title}</h3>
        <p className="memory-card__text">{text}</p>
      </div>
    </article>
  );
}
