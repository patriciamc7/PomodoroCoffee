import { useEffect, useRef, useState } from "react";

function Player({ tracks, running }) {
  const audioRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  // reproducir / pausar según estado
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
        <button onClick={prev} style={btnStyle}>
          ⏮
        </button>
        <button onClick={toggle} style={btnStyle}>
          {playing ? "⏸" : "▶"}
        </button>
        <button onClick={next} style={btnStyle}>
          ⏭
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
  padding: "8px 14px",
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
