import React from "react";

const Todo = (props) => {
  const { todo, dispatch } = props;
  return (
    <div
      style={{
        border: "2px solid rgb(234 241 255 / 50%)",
        borderRadius: "6px",
      }}
      className="w-75 mx-auto d-flex justify-content-between mt-4"
    >
      <span className="p-1 lead fw-bolder">
        {todo.complete ? (
          <del style={{ color: "red" }}>
            <span style={{ color: "black" }}>{todo.name}</span>
          </del>
        ) : (
          todo.name
        )}
      </span>
      <span>
        <button
          style={{
            marginLeft: "8px",
            marginRight: "8px",
          }}
          className="btn btn-warning fw-bolder"
          onClick={(e) => dispatch({ type: "TOGGLE", payload: todo.id })}
        >
          تغییر وضعیت
        </button>
        <button
          className="btn btn-danger fw-bolder"
          onClick={(e) => dispatch({ type: "REMOVE", payload: todo.id })}
        >
          حذف
        </button>
      </span>
    </div>
  );
};
export default Todo;
