import { forwardRef, useState } from "react";
import Scene from "../components/Scene";

/**
 * SCENE 02 -- THE QUESTION
 * A small, playful beat. Either answer leads forward -- "Maybe not..."
 * just gets a gentle, knowing reply first.
 */
const QuestionScene = forwardRef(function QuestionScene({ config, onContinue }, ref) {
  const [answer, setAnswer] = useState(null);

  return (
    <Scene ref={ref} id="question" ariaLabel="A question, before we begin" className="question-scene">
      <span className="scene-marker">Scene 02 &middot; The Question</span>

      <div className="question-scene__inner">
        <p className="question-scene__eyebrow">{config.eyebrow}</p>
        <h2 className="question-scene__title">{config.title}</h2>

        <div className="question-scene__stage" aria-live="polite">
          {!answer ? (
            <div className="question-scene__actions" role="group" aria-label="Your answer">
              <button type="button" className="film-button" onClick={() => setAnswer("yes")}>
                {config.yesText}
              </button>
              <button
                type="button"
                className="film-button film-button--ghost"
                onClick={() => setAnswer("no")}
              >
                {config.noText}
              </button>
            </div>
          ) : (
            <div className="question-scene__response reveal-up is-visible">
              <p className="question-scene__response-text pre-line">
                {answer === "no" ? config.teasingText : config.yesResponse}
              </p>
              <button
                type="button"
                className="film-button film-button--ghost question-scene__continue"
                onClick={onContinue}
              >
                <span>{config.continueLabel}</span>
                <span className="film-button__arrow" aria-hidden="true">
                  &rarr;
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </Scene>
  );
});

export default QuestionScene;
