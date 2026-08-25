import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/**
 * A floating soundtrack toggle. Music never autoplays -- it only starts
 * once she presses play. If the audio file is missing or fails to load,
 * the control quietly removes itself instead of showing a broken state.
 */
export default function MusicButton({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(Boolean(src));

  if (!src || !available) return null;

  const handleError = () => {
    setAvailable(false);
    setPlaying(false);
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      // Playback was blocked or the file couldn't be decoded -- fail quietly.
      setAvailable(false);
    }
  };

  return (
    <div className="music-control">
      <audio ref={audioRef} src={src} loop preload="none" onError={handleError} />
      <button
        type="button"
        className={`music-button ${playing ? "is-playing" : ""}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause soundtrack" : "Play soundtrack"}
      >
        <span className="music-button__icon" aria-hidden="true">
          {playing ? (
            <Pause size={13} strokeWidth={1.5} />
          ) : (
            <Play size={13} strokeWidth={1.5} />
          )}
        </span>
        <span className="music-button__label">
          {playing ? "Music on" : "Play soundtrack"}
        </span>
      </button>
    </div>
  );
}
