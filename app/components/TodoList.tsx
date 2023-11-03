import React from "react";
import { toDo } from "../lib/types";
export default async function ToDoList() {
  const todos = await fetch("");
  const { data } = await todos.json();

  return (
    <div className="max-w-xl mx-auto pt-10">
      <h1 className="text-4xl font-bold mb-5">To-Do List</h1>
      <ul>
        {data.map((todo: toDo) => (
          <li
            key={todo.id}
            className="bg-gray-800 p-4 rounded-lg mb-2 flex justify-between"
          >
            <div>{todo.task}</div>
            <div className="bg-blue-600 px-2 py-1 rounded text-sm">
              {todo.dueDate}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
