import { useState } from "react";
import "./App.css";
import Item from "./components/Item/Item";
import List from "./components/List/List";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleInput = (evt) => {
    if (evt.code === "Enter") {
      const newObj = {
        id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
        text: evt.target.value,
        isComplated: false,
      };
      setTodos([...todos, newObj]);
      evt.target.value = "";
    }
  };

  localStorage.setItem("todos", JSON.stringify(todos));


  return (
    <>
      <h1 className="text-center p-2">Todo App</h1>
      <div className="app w-50 mx-auto mt-3 p-2">
        <button className="btn btn-outline-warning ms-4 text-dark">
          All <span>{todos.length}</span>
        </button>
        <button className="btn btn-outline-warning ms-4  text-dark">
          Complate <span>{todos.filter((e) => e.isComplated).length}</span>
        </button>
        <button className="btn btn-outline-warning ms-4  text-dark">
          Uncomplate <span>{todos.filter((e) => !e.isComplated).length}</span>
        </button>
        <input
          className="input__val d-block mt-3 mb-3 form-control"
          onKeyUp={handleInput}
          placeholder="Todoo..."
        />
        {todos.length > 0 && (
          <List>
            {todos.map((todo) => (
              <Item
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </List>
        )}
      </div>
    </>
  );
}

export default App;
