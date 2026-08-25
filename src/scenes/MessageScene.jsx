import { forwardRef } from "react";
import Scene from "../components/Scene";
import CinematicText from "../components/CinematicText";

// Cycling patterns so each line gets its own size and horizontal offset
// without needing to hand-author every single one in the config.
const SIZE_PATTERN = ["sm", "md", "md", "lg", "lg", "xl", "xl"];
const OFFSET_PATTERN = ["none", "left", "none", "right", "none", "left", "none"];

/**
 * SCENE 04 -- THE EMOTIONAL MESSAGE
 * The heart of the film. Each line is its own beat, revealed independently
 * as it scrolls into view, growing larger and more offset as it builds.
 */
const MessageScene = forwardRef(function MessageScene({ config }, ref) {
  return (
    <Scene ref={ref} id="message" ariaLabel="A message" className="message-scene" fade={false}>
      <span className="scene-marker scene-marker--sticky">Scene 04 &middot; The Message</span>

      <div className="message-scene__lines">
        <CinematicText text={config.eyebrow} size="xs" className="message-scene__eyebrow-line" />

        {config.lines.map((line, i) => (
          <CinematicText
            key={line}
            text={line}
            size={SIZE_PATTERN[i % SIZE_PATTERN.length]}
            offset={OFFSET_PATTERN[i % OFFSET_PATTERN.length]}
          />
        ))}
      </div>
    </Scene>
  );
});

export default MessageScene;
