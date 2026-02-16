import { useState } from "react";

function ToDoList({onClose}) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text,
        done: false,
      },
    ]);

    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={toDoStyle}>
      <button onClick={onClose} style={closeButton}>X</button>

      <h3 style={{ margin: 3, fontWeight: "normal" }}>To-Do List</h3>

      <div style={newTaskStyle}>
        <input
          style={inputTask}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
        />
        <button style={addTaskStyle} onClick={addTask}>
          +
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tasks.map((t) => (
          <div key={t.id} style={todoRow}>
            <button onClick={() => deleteTask(t.id)} style={deleteButtonStyle}>
              X
            </button>

            <div
              style={{
                ...textStyle,
                position: "relative",
              }}
            >
              {t.text}
              {t.done && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    width: "80%",
                    height: 3,
                    backgroundColor: "#000000",
                    transform: "translateY(-50%)",
                    borderRadius: 1,
                  }}
                />
              )}
            </div>

            <button onClick={() => toggleTask(t.id)} style={tickButtonStyle}>
              {t.done ? "✔" : ""}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
const closeButton = {
  width: 36,
  margin: 5,
  background: "transparent",
  border: "none",
  cursor: "pointer",
};

const deleteButtonStyle = {
  width: 36,
  height: 36,
  borderRadius: 8,
  border: "2px solid #2f2f2f",
  background: "transparent",
  cursor: "pointer"
};

const toDoStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  border: "2px solid #2f2f2f",
  borderRadius: 20,
  background: "#eaddd7",
  fontSize: 19,
  textAlign: "center",
  width: 300,
  fontWeight: "normal",
};

const newTaskStyle = {
  display: "flex",
  gap: 8,
  padding: "0 12px",
};

const inputTask = {
  background: "transparent",
  border: "2px solid #2f2f2f",
  borderRadius: 10,
  fontSize: 21,
  flex: 1,
  minWidth: 0,
};

const addTaskStyle = {
  background: "transparent",
  border: "2px solid #2f2f2f",
  borderRadius: 6,
  width: 40,
  height: 40,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 21,
  cursor: "pointer",
};

const todoRow = {
  display: "grid",
  gridTemplateColumns: "36px 1fr 36px",
  alignItems: "center",
  gap: 8,
  padding: "0 12px",
  marginBottom: 8,
};

const tickButtonStyle = {
  background: "transparent",
  border: "2px solid #2f2f2f",
  borderRadius: 6,
  width: 40,
  height: 40,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 21,
  cursor: "pointer",
};

const textStyle = {
  background: "transparent",
  border: "2px solid #2f2f2f",
  borderRadius: 10,
  fontSize: 21,
  flex: 1,
  minWidth: 0,
};

export default ToDoList;
