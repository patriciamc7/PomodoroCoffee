import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer/timer";
import Settings from "./components/Settings/settings";
import DrinkSelector from "./components/Drinks/drinkselector";
import ToDoList from "./components/Tasks/todolist";
import Player from "./components/Audio/player";

import coffee from "./assets/coffee.png";
import tea from "./assets/tea.png";
import water from "./assets/water.png";
import bubbletea from "./assets/bubbletea.png";
import cola from "./assets/cola.png";
import matcha from "./assets/matcha.png";
import strawberry from "./assets/strawberry.png";

import lofi1 from "./assets/sounds/lofi1.mp3";
import lofi2 from "./assets/sounds/lofi2.mp3";
import lofi3 from "./assets/sounds/lofi3.mp3";
import lofi4 from "./assets/sounds/lofi4.mp3";

function App() {
  const [background, setBackground] = useState("Coffee");

  const [showOptions, setShowOptions] = useState(false);
  const [showDrinkSelector, setShowDrinkSelector] = useState(false);
  const [showToDoList, setShowToDoList] = useState(false);
  const [showChangeSetUp, setChangeSetUp] = useState(false);

  const [timerRunning, setTimerRunning] = useState(false);

  const tracks = [lofi1, lofi2, lofi3, lofi4];

  const drinks = [
    { id: "Coffee", image: coffee },
    { id: "Tea", image: tea },
    { id: "Water", image: water },
    { id: "Bubble tea", image: bubbletea },
    { id: "Cola", image: cola },
    { id: "Strawberry Milk", image: strawberry },
    { id: "Matcha", image: matcha },
  ];

  const handleClick = () => {
    setShowOptions((prev) => !prev);
  };

  const currentDrink = drinks.find((d) => d.id === background);
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        backgroundImage: currentDrink ? `url(${currentDrink.image})` : none,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div>
        <button style={optionStyle} onClick={handleClick}>
          Options
        </button>
      </div>

      {showOptions && (
        <Settings
          onOpenDrinkSelector={() => {
            setShowDrinkSelector(true);
            setShowOptions(false);
          }}
          onOpenToDoList={() => {
            setShowToDoList(true);
            setShowOptions(false);
          }}
          onOpenTimerSetUp={() => {
            setChangeSetUp(true);
            setShowOptions(false);
          }}
        />
      )}

      {showToDoList && <ToDoList />}

      <Timer
        showOptions={showOptions}
        showToDoList={showToDoList}
        showDrinkSelector={showDrinkSelector}
        showChangeSetUp={showChangeSetUp}
        onSetUpEnded={() => setChangeSetUp(false)}
        onRunningChange={setTimerRunning}
      />

      {showDrinkSelector && (
        <DrinkSelector
          drinks={drinks}
          onClose={() => {
            setShowDrinkSelector(false);
            setChangeSetUp(true);
          }}
          onConfirm={(drinkId) => {
            setBackground(drinkId);
            setShowDrinkSelector(false);
            setChangeSetUp(true);
          }}
        />
      )}

      <Player tracks={tracks} running={timerRunning} />
    </div>
  );
}

const optionStyle = {
  position: "fixed",
  right: "10px",
  padding: "10px 10px",
  margin: "10px",
  background: "transparent",
  border: "2px solid #2f2f2f",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 28,
  zIndex: 9999,
};

export default App;
