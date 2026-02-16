import { useEffect, useRef, useState } from "react";
import prevButton from "../../assets/buttons/prev.png";
import nextButton from "../../assets/buttons/next.png";
import playButton from "../../assets/buttons/play.png";
import pauseButton from "../../assets/buttons/pause.png";

function Player({ tracks, running }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [current, setCurrent] = useState(() => {
    const saved = localStorage.getItem("track");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("track", current);
  }, [current]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (!playing || !running) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  }, [playing, running, current]);

  const next = () => {
    setCurrent((c) => (c + 1) % tracks.length);
  };

  const prev = () => {
    setCurrent((c) => (c === 0 ? tracks.length - 1 : c - 1));
  };

  const toggle = () => {
    setPlaying((p) => !p);
  };

  return (
    <>
      <div style={playerStyle}>
        <button
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={prev}
          style={btnStyle}
        >
          <img src={prevButton} alt="prev"></img>
        </button>
        <button
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={toggle}
          style={btnStyle}
        >
          <img
            src={playing ? pauseButton : playButton}
            alt={playing ? "pause" : "play"}
            style={{
              width: 32,
              height: 32,
              pointerEvents: "none", 
            }}
          />
        </button>
        <button
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={next}
          style={btnStyle}
        >
          <img src={nextButton} alt="next"></img>
        </button>
      </div>

      <audio ref={audioRef} src={tracks[current]} onEnded={next} />
    </>
  );
}

const playerStyle = {
  position: "fixed",
  top: 10,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: 14,
  border: "2px solid #2f2f2f",
  borderRadius: 14,
  background: "transparent",
  backdropFilter: "blur(2px)",
  zIndex: 20,
};

const btnStyle = {
  background: "transparent",
  border: "none",
  fontSize: 22,
  cursor: "pointer",
};

export default Player;
