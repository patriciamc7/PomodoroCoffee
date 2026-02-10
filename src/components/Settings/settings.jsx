import { useState } from "react";

import Timer from "../Timer/timer";

function Settings({onOpenDrinkSelector, onOpenToDoList }) {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div style={settingsStyle}>
      <div>
        <button style={buttonStyle} onClick={() => setActiveComponent("timer")}>
          {" "}
          Change Timer{" "}
        </button>
      </div>

      <div>
        <button style={buttonStyle} onClick={onOpenDrinkSelector}>
          Change Drink
        </button>
      </div>

      <div>
        <button style={buttonStyle} onClick={onOpenToDoList}>
          Show To-Do List
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        {activeComponent === "timer" && <Timer />}
      </div>
    </div>
  );
}

const settingsStyle = {
  position: "fixed" /* fijo en la pantalla incluso al hacer scroll */,
  right: "0" /* pegado al borde derecho */,
  padding: "20px",
  width: 400,
  height: 500,
  border: "2px solid #2f2f2f",
  borderRadius: 28,
  background: "#eaddd7",
  fontSize: 28,
  outline: "none", // quita el borde de foco azul
  boxShadow: "none", // quita cualquier sombra
  justifyItems: "right",
  paddingTop: 60,
};

const buttonStyle = {
  border: "2px solid #2f2f2f",
  borderRadius: 8,
  background: "transparent",
  outline: "none", // quita el borde de foco azul
  boxShadow: "none", // quita cualquier sombra
};

export default Settings;
