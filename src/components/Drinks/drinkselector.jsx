import { useState } from "react";

function DrinkSelector({ drinks, onConfirm, onClose }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? drinks.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === drinks.length - 1 ? 0 : prev + 1));
  };

  const drink = drinks[index];

  return (
    <div style={mainWindow}>
      <div style={base}>
        <button onClick={onClose} style={closeButton}>
          x
        </button>
        <div style={{ margin: 20, marginBottom: 8 }}>Select your drink</div>
        <div style={mainPart}>
          <button onClick={prev} style={slideButton}>
            {"<"}
          </button>
          <div>
            <img
              src={drink.image}
              width={320}
              height={180}
              style={{ borderRadius: 28 }}
              alt={drink.id}
            ></img>
          </div>
          <button onClick={next} style={slideButton}>
            {">"}
          </button>
        </div>
        <div style={{ marginTop: 5, marginBottom: 20 }}>{drink.id}</div>
        <button onClick={() => onConfirm(drink.id)} style={confirmButton}>
          CONFIRM
        </button>
      </div>
    </div>
  );
}

const mainWindow = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
};

const base = {
  position: "relative",
  border: "2px solid #2f2f2f",
  borderRadius: 20,
  background: "#eaddd7",
  width: "450px",
};

const closeButton = {
  position: "absolute",
  border: "2px solid #2f2f2f",
  borderRadius: 4,
  right: 8,
  top: 8,
  background: "transparent",
};

const mainPart = {
  display: "grid",
  gridTemplateColumns: "auto 320px auto",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
};

const slideButton = {
  background: "transparent",
  border: "0",
  width: "40px",
};

const confirmButton = {
  position: "absolute",
  border: "2px solid #2f2f2f",
  right: 8,
  bottom: 8,
  background: "transparent",
  borderRadius: 8,
  padding: 6,
};

export default DrinkSelector;
