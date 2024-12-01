import SsrTodoList from "@/app/components/SsrTodoList";
import TodoForm from "@/app/components/TodoForm";

const SsrTodoPage = () => {
  return (
    <>
      <div>
        <h1>SSR TODOLIST</h1>
        <TodoForm />
        <SsrTodoList />
      </div>
    </>
  );
};

export default SsrTodoPage;
