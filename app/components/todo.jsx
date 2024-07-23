"use client";

import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then(setTodo);
  }, []);

  return <div>todo.title </div>;
}
