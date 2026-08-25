import { forwardRef } from "react";
import Scene from "../components/Scene";
import MemoryCard from "../components/MemoryCard";
import ScrollIndicator from "../components/ScrollIndicator";

/**
 * SCENE 03 -- THE MEMORIES
 * An editorial, hand-placed grid rather than a uniform gallery. Each card
 * cycles through six position variants (see .memory-card--pos-N in CSS)
 * so the layout stays staggered even as the number of memories changes.
 */
const MemoriesScene = forwardRef(function MemoriesScene({ items }, ref) {
  return (
    <Scene ref={ref} id="memories" ariaLabel="Things worth remembering" className="memories-scene">
      <span className="scene-marker">Scene 03 &middot; The Memories</span>

      <div className="memories-scene__inner">
        <div className="memories-scene__heading">
          <p className="memories-scene__eyebrow">A few frames from the archive</p>
          <h2 className="memories-scene__title">Things worth remembering.</h2>
        </div>

        <div className="memories-grid">
          {items.map((item, i) => (
            <MemoryCard key={item.number ?? i} position={(i % 6) + 1} {...item} />
          ))}
        </div>
      </div>

      <ScrollIndicator label="Keep going" />
    </Scene>
  );
});

export default MemoriesScene;
