import axios from "axios";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

export default function TodoFormSS() {
  
  const addTodo = async (data: FormData) => {
    "use server"
    // Logic to mutate form data...
    const task = data.get("task")?.toString();
    const dueDate = data.get("dueDate")?.toString();
    const newTodoBody = {
      task: task,
      dueDate: dueDate,
    };
    // Post new Todo to our mock database
    await axios.post("http://localhost:3000/api/todos/", newTodoBody);
    // Refetch Todo's
    revalidateTag("ToDo");
    // Redirect them back to the Homepage
    redirect("/");
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-xl mx-auto px-4 w-full">
        <h1 className="text-4xl font-bold mb-5">Add A New To-Do</h1>
        {/* Invoke the action using the "action" attribute */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Task:</label>
            <input
              type="text"
              name="task"
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Enter the task..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Due Date:</label>
            <input
              type="date"
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
