"use client";
import React, { useState } from "react";
import { addTodo } from "../actions";
export default function TodoFormCS() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("task", task);
    formData.append("dueDate", dueDate);
    addTodo(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-5">Add A New To-Do</h1>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="task" className="block text-sm font-medium mb-1">
              Task:
            </label>
            <input
              type="text"
              onChange={(e) => setTask(e.target.value)}
              name="task"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Enter the task..."
            />
          </div>

          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium mb-2">
              Due Date:
            </label>
            <input
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              name="dueDate"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
