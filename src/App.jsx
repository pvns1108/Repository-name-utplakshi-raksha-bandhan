import { useRef } from "react";
import AmbientBackground from "./components/AmbientBackground";
import MusicButton from "./components/MusicButton";
import OpeningScene from "./scenes/OpeningScene";
import QuestionScene from "./scenes/QuestionScene";
import MemoriesScene from "./scenes/MemoriesScene";
import MessageScene from "./scenes/MessageScene";
import FinaleScene from "./scenes/FinaleScene";
import { siteConfig } from "./data/siteConfig";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import "./styles.css";

export default function App() {
  const reducedMotion = usePrefersReducedMotion();

  const questionRef = useRef(null);
  const memoriesRef = useRef(null);
  const messageRef = useRef(null);
  const finaleRef = useRef(null);

  // Smoothly advances the film to the next scene, then moves keyboard /
  // screen-reader focus there so navigating by button feels the same as
  // navigating by scroll.
  const goTo = (ref) => {
    const node = ref.current;
    if (!node) return;
    node.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    window.setTimeout(
      () => node.focus({ preventScroll: true }),
      reducedMotion ? 0 : 650,
    );
  };

  return (
    <>
      <a className="skip-link" href="#finale">
        Skip to the end
      </a>

      <AmbientBackground />
      <MusicButton src={siteConfig.music.enabled ? siteConfig.music.src : null} />

      <main id="main-content">
        <OpeningScene config={siteConfig.opening} onBegin={() => goTo(questionRef)} />

        <QuestionScene
          ref={questionRef}
          config={siteConfig.question}
          onContinue={() => goTo(memoriesRef)}
        />

        <MemoriesScene ref={memoriesRef} items={siteConfig.memories} />

        <MessageScene ref={messageRef} config={siteConfig.message} />

        <FinaleScene ref={finaleRef} config={siteConfig.finale} />
      </main>
    </>
  );
}
