import React, { useState } from "react";

export default function useTodo(td) {
  const [todo, setTodo] = useState(td);
  const addTodo = (title, text) => {
    setTodo((prev) => [...prev, { title, text }]);
  }
  const deleteTodo = (title) => {
    setTodo((prev) => prev.filter((todo) => todo.title !== title));
  };
  return [todo, addTodo, deleteTodo];
}