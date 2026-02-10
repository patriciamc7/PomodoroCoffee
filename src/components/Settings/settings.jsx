function Settings({ onOpenDrinkSelector, onOpenToDoList, onOpenTimerSetUp }) {
  return (
    <div style={settingsStyle}>
      <div>
        <button style={buttonStyle} onClick={onOpenTimerSetUp}>
          Change Timer
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
  paddingTop: 70,
};

const buttonStyle = {
  border: "2px solid #2f2f2f",
  borderRadius: 8,
  background: "transparent",
  outline: "none", // quita el borde de foco azul
  boxShadow: "none", // quita cualquier sombra
};

export default Settings;
