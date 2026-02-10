import { useState, useEffect } from "react"; //variables de estado y efecto para el temporizador

function Timer({showOptions}) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showSetUp, setShowSetUp] = useState(true);

  const [timeInput, setTimeInput] = useState("");
  const [task, setTask] = useState("");

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const formatTimeInput = (value) => {
    const padded = value.padStart(6, "0");

    const h = padded.slice(0, 2);
    const m = padded.slice(2, 4);
    const s = padded.slice(4, 6);

    return `${h}:${m}:${s}`;
  };

  //Baja el tiempo hasta llegar a 0
  useEffect(() => {
    if (!isRunning || seconds <= 0) {
      setShowSetUp(true);
      setTimeInput("");
      setTask("");
      setIsRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // se limpia cada vez que se cierra la pagina
  }, [isRunning, seconds]); //se llama al inicio y cada vez que cambia el estado de isRunning

  const handleConfirm = () => {
    const padded = timeInput.padStart(6, "0");

    const hours = Number(padded.slice(0, 2));
    const minutes = Number(padded.slice(2, 4));
    const secondsValue = Number(padded.slice(4, 6));

    const total = hours * 3600 + minutes * 60 + secondsValue;

    if (total <= 0) return;

    setSeconds(total);
    setShowSetUp(false);
    setIsRunning(true);
  };

  return (
    <>
      {!showOptions && showSetUp && (
        <div style={overlayStyle}>
          <div style={extraWindowStyle}>
            <p style={{ marginTop: 30, marginBottom: 0 }}>
              {" "}
              How much time do you want to focus?
            </p>

            <input
              type="text"
              inputMode="numeric"
              placeholder="00:00:00"
              value={formatTimeInput(timeInput)}
              onKeyDown={(e) => {
                if (e.key >= "0" && e.key <= "9") {
                  // añadir número al final
                  setTimeInput((prev) => {
                    const newValue = (prev + e.key).slice(-6); // máximo 6 dígitos
                    return newValue;
                  });
                  e.preventDefault();
                } else if (e.key === "Backspace") {
                  // eliminar el último número
                  setTimeInput((prev) => prev.slice(0, -1));
                  e.preventDefault();
                }
              }}
              style={inputStyle}
              readOnly
            />

            <div style={{ marginTop: 30 }}>
              <div>
                <p style={{ margin: 0 }}>What do you want to do?</p>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    marginLeft: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={taskInputStyle}
                  />
                  <button onClick={handleConfirm} style={confirmStyle}>
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {
        <div style={timerBoxStyle}>
          {task && <div style={taskStyle}>{task}</div>}

          <div style={timeStyle}>{formatTime(seconds)}</div>
        </div>
      }
    </>
  );
}

/* estilos rápidos */
const overlayStyle = {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const timerBoxStyle = {
  position: "fixed",
  bottom: 20,
  left: 20,
  padding: 12,
  borderRadius: 10,
  background: "transparent",
  width: 300, // ancho fijo
  height: 120, // alto fijo
};

const timeStyle = {
  border: "2px solid #2f2f2f",
  borderRadius: 28,
  padding: "10px 16px",
  fontSize: 58,
  fontWeight: "lighter",
  background: "transparent",
  padding: 20,
};

const taskStyle = {
  position: "absolute",
  top: -40,
  left: "50%",
  transform: "translateX(-50%)",
  padding: "0 6px",
  whiteSpace: "nowrap",

  textAlign: "center",
  fontSize: 58,
  background: "transparent",
};

const extraWindowStyle = {
  border: "2px solid #2f2f2f",
  borderRadius: 28,
  textAlign: "center",
  background: "#eaddd7",
  width: 700,
  fontSize: 28,
  outline: "none", // quita el borde de foco azul
  boxShadow: "none", // quita cualquier sombra
  padding: 20,
};

const inputStyle = {
  border: "2px solid #2f2f2f",
  borderRadius: 8,
  textAlign: "center",
  background: "transparent",
  fontSize: 28,
  outline: "none", // quita el borde de foco azul
  boxShadow: "none", // quita cualquier sombra
  width: "20%",
};

const taskInputStyle = {
  borderRadius: 8,
  textAlign: "center",
  background: "transparent",
  fontSize: 28,
  outline: "none", // quita el borde de foco azul
  boxShadow: "none", // quita cualquier sombra
  border: "2px solid #2f2f2f",
  width: "30%",
};

const confirmStyle = {
  borderRadius: 8,
  border: "2px solid #2f2f2f",
  background: "transparent",
  fontSize: 20,
};

export default Timer;
