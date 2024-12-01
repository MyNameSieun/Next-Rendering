"use client";

import { useEffect, useState } from "react";
import { Todo } from "../types/todo-types";

const CsrTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:4000/todos");
        if (response.ok) {
          const data = await response.json();
          setTodos(data);
        } else {
          console.error("오류 발생");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const handleDeleteButton = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        alert("삭제 완료!");
      } else {
        console.error("삭제 요청 실패");
      }
    } catch (err) {
      console.error("에러 발생!");
    }
  };

  if (loading) {
    return <p>로딩중...</p>;
  }

  return (
    <div>
      {todos?.map((todo) => (
        <ul
          key={todo.id}
          className="border border-solid	 border-black bg-slate-300 p-14"
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
      ))}
    </div>
  );
};

export default CsrTodoList;
