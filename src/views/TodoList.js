import React, { useReducer, useState } from "react";
import Todo from "../components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  TOGGLE: "TOGGLE",
};
function init(initialState) {
  return JSON.parse(localStorage.getItem("todos")) || initialState || [];
}
const reducer = (todos, action) => {
  let items = [];
  switch (action.type) {
    case ACTIONS.ADD:
      items = [...todos, newTodo(action.payload)];
      window.localStorage.setItem("todos", JSON.stringify(items));
      return items;
    case ACTIONS.REMOVE:
      items = todos.filter((todo) => todo.id !== action.payload);
      window.localStorage.setItem("todos", JSON.stringify(items));
      return items;
    case ACTIONS.TOGGLE:
      items = todos.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, complete: !todo.complete };
        return todo;
      });
      window.localStorage.setItem("todos", JSON.stringify(items));
      return items;
    default:
      return todos;
  }
};
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function TodoList({ initialState = [] }) {
  const [todos, dispatch] = useReducer(reducer, initialState, init);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: name });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span className="mb-5 mt-3 d-flex justify-content-center">
          <input
            className="form-control w-75 ms-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"کار‌های امروزت رو بنویس"}
          />
          <Link to="/done">
            <input
              className="btn btn-success fw-bolder text-decoration-none"
              type="button"
              value="کار‌های انجام شده"
            />
          </Link>
        </span>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default TodoList;
