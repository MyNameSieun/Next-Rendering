import CsrTodoList from "@/app/components/CsrTodoList";
import TodoForm from "@/app/components/TodoForm";

const CsrTodoPage = () => {
  return (
    <>
      <div>
        <h1>CSR TODOLIST</h1>
        <TodoForm />
        <CsrTodoList />
      </div>
    </>
  );
};

export default CsrTodoPage;
