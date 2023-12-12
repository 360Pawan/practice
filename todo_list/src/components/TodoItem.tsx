const TodoItem = ({
  id,
  title,
  isCompleted,
  dueDate,
  markTodoStatus,
  deleteTodo,
}: {
  id: number;
  title: string;
  isCompleted: boolean;
  dueDate: string;
  markTodoStatus: (status: boolean, id: number) => void;
  deleteTodo: (id: number) => void;
}) => {
  return (
    <div className="flex items-center w-full mb-3 gap-2">
      <input
        id={JSON.stringify(id)}
        name={title}
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => markTodoStatus(e.target.checked, id)}
        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
      />
      <label htmlFor={JSON.stringify(id)} className="ml-3 block text-gray-900">
        <span
          className={`text-lg font-medium ${isCompleted ? "line-through" : ""}`}
        >
          {title}
        </span>
        <span
          className={`text-sm font-light text-gray-500 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {" "}
          Due on {dueDate}
        </span>
      </label>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Edit
      </button>
      <button
        type="button"
        onClick={() => deleteTodo(id)}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
