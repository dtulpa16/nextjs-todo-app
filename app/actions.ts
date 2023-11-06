"use server";
import axios from "axios";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const addTodo = async (data: FormData) => {
  // Logic to mutate form data...
  const task = data.get("task")?.toString();
  const dueDate = data.get("dueDate")?.toString();
  const newTodoBody = {
    task: task,
    dueDate: dueDate,
  };
  // Post new Todo to our mock database
  await axios.post("http://localhost:3000/api/todos", newTodoBody);
  // Refetch Todo's
  revalidateTag("ToDo");
  // Redirect them back to the Homepage
  redirect("/");
};