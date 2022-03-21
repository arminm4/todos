import React, { useReducer, useState } from "react";
import Todo from "../components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const ACTIONS = {
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

function DoneList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: name });
    setName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <span className="mb-5 mt-3 d-flex justify-content-center">
          <Link to="/">
            <input
              className="btn btn-warning fw-bolder text-decoration-none"
              type="button"
              value="کار‌های انجام نشده"
            />
          </Link>
        </span>
      </form>
      {(todos?.length > 0 &&
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })) || <h3>کاری یافت نشد</h3>}
    </>
  );
}

export default DoneList;
