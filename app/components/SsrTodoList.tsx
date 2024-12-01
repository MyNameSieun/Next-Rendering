import { Todo } from "../types/todo-types";
import TodoItem from "./TodoItem";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("http://localhost:4000/todos", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

const SsrTodoList = async () => {
  const todos = await fetchTodos();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default SsrTodoList;
