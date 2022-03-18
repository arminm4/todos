import "./App.css";
import React, { useReducer, useState } from "react";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";

const ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  TOGGLE: "TOGGLE",
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload)];
    case ACTIONS.REMOVE:
      return todos.filter((todo) => todo.id !== action.payload);
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, complete: !todo.complete };
        return todo;
      });
    default:
      return todos;
  }
};
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: name });
    setName("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <span className="mb-5 mt-3 d-flex justify-content-center">
          <input
            className="form-control w-75 ms-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"کار‌های امروزت رو بنویس"}
          />
          <input
            className="btn btn-primary fw-bolder"
            type="button"
            onClick={(e) => console.log("clicked")}
            value="انجام شده‌ها"
          />
        </span>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default App;
