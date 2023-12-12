import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";
import TodoItem from "./components/TodoItem";

export type TodoType = {
  id: number;
  title: string;
  isCompleted: boolean;
  dueDate: string;
};

function App() {
  const currentDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState(currentDate);
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userTodo = e.target.value;

    setTodo(userTodo);
  };

  const handleDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dueDate = e.target.value;

    setDueDate(dueDate);
  };

  const addTodoToList = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!todo) {
      toast.error("No todo to add.");
      return;
    }

    const list = [
      ...todoList,
      {
        id: new Date().getTime(),
        title: todo,
        isCompleted: false,
        dueDate: dueDate,
      },
    ];

    setTodo("");
    setTodoList(list);
    setDueDate(currentDate);

    toast.success("Todo added successfully.");
  };

  const markTodoStatus = (status: boolean, id: number) => {
    const updatedTodo = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: status };
      } else {
        return todo;
      }
    });

    setTodoList(updatedTodo);
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(newTodoList)
  };

  return (
    <>
      <div className="max-w-xl w-full mx-auto flex min-h-screen justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold">Todo List</h1>
        <form onSubmit={addTodoToList} className="my-6 w-full">
          <label htmlFor="success" className="block mb-2 text-sm font-medium">
            Add Todo
          </label>
          <div className="flex gap-4">
            <input
              value={todo}
              onChange={handleTodo}
              type="text"
              id="large-input"
              className="block w-4/6 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buy some groceries."
            />
            <input
              type="date"
              value={dueDate}
              onChange={handleDueDate}
              className="w-2/6 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Add Todo
          </button>
        </form>
        {todoList.length >= 1 ? (
          todoList.map((todo: TodoType) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              dueDate={todo.dueDate}
              markTodoStatus={markTodoStatus}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p className="w-full">Add some todo, They will be shown here.</p>
        )}
      </div>
      <Toaster />
    </>
  );
}

export default App;
