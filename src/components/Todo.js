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
            <span style={{ color: "gray" }}>{todo.name}</span>
          </del>
        ) : (
          todo.name
        )}
      </span>
      <span>
        <input
          style={{
            marginLeft: "8px",
            marginRight: "8px",
            marginTop: "0px",
            width: "38px",
            height: "38px",
          }}
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked={todo.complete ? true : false}
          onChange={(e) => dispatch({ type: "TOGGLE", payload: todo.id })}
        />
        <button
          className="btn btn-danger fw-bolder"
          onClick={(e) => dispatch({ type: "REMOVE", payload: todo.id })}
        >
          <i class="fa fa-trash bg-danger"></i>
        </button>
      </span>
    </div>
  );
};
export default Todo;
