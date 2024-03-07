import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../store/slices/TodoSlice";

export default function Main() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    dispatch(addTodo({ text: input, id: Date.now() })); // Yeni bir id oluşturmak için Date.now() kullanıyoruz.
    setInput("");
  };

  const handleRemove = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        placeholder="Add To Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-button" disabled={input == ""} onClick={handleSubmit}>
        Add Todo
      </button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <span>{todo.text}</span>
            <button
              className="todo-remove-button"
              onClick={() => handleRemove(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
