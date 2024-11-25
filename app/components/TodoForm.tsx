"use client";

import { FormEvent, useState } from "react";
import { Todo } from "../types/todo-types";

const TodoForm = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (title.trim() === "" || content.trim() === "") {
        return alert("제목 또는 내용을 입력해주세요.");
      }

      if (response.ok) {
        const data = await response.json();
        setTodos(data);
        alert("추가 완료!");
        setTitle("");
        setContent("");
      } else {
        console.log("에러 발생");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
