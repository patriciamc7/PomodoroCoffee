import { useState } from "react"; //variables de estado y efecto para el temporizador

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return; // No agregar tareas vacías

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(), // Genera un ID único para cada tarea
        text,
        done: false, // Estado de la tarea (completada o no)
      },
    ]);

    setText(""); // Limpiar el campo de texto después de agregar la tarea
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div style={toDoStyle}>
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
                    height: 3, // grosor de la línea
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
};

const todoRow = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
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
