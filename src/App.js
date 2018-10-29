import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);
  const toggleComplete = index =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === index ? { ...todo, complete: !todo.complete } : todo
      )
    );
  return (
    <div className="container">
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <hr />
      <div>
        {todos.map(({ text, complete }, index) => (
          <div
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
            key={index}
            className="row"
          >
            <ul class="list-group col-sm-5 offset-md-2">
              <li class="list-group-item">{text}</li>
            </ul>
          </div>
        ))}
      </div>

      {todos.length > 0 ? (
        <button
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
          onClick={() => setTodos([])}
        >
          Clear
        </button>
      ) : null}
    </div>
  );
};
