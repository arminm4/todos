import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import TodoList from "./views/TodoList";
import DoneList from "./views/DoneList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/done" element={<DoneList />} />
      </Routes>
    </div>
  );
}

export default App;
