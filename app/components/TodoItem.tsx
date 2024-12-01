"use client";

import { Todo } from "../types/todo-types";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const handleDeleteButton = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("삭제 완료!");
      } else {
        console.error("삭제 요청 실패");
      }
    } catch (err) {
      console.error("에러 발생!");
    }
  };

  return (
    <ul
      key={todo.id}
      className="border border-solid border-black bg-slate-300 p-14"
    >
      <li>제목: {todo.title}</li>
      <li>내용: {todo.content}</li>
      <button
        onClick={() => handleDeleteButton(todo.id)}
        className="bg-red-300 p-3"
      >
        삭제
      </button>
    </ul>
  );
};
export default TodoItem;
