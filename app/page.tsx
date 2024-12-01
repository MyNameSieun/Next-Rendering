// Homepage.tsx
import Link from "next/link";

const Homepage = () => {
  return (
    <nav className="flex flex-col items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-md">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Next Rendering
        </h1>
        <div className="flex gap-4">
          <Link
            href="/rendering/csr"
            className="p-3 bg-slate-300 text-center rounded-md hover:bg-slate-400 transition"
          >
            CSR
          </Link>
          <Link
            href="/rendering/ssr"
            className="p-3 bg-slate-500 text-white text-center rounded-md hover:bg-slate-600 transition"
          >
            SSR
          </Link>
          <Link
            href="/rendering/ssg"
            className="p-3 bg-slate-300 text-center rounded-md hover:bg-slate-400 transition"
          >
            SSG
          </Link>
          <Link
            href="/rendering/isr"
            className="p-3 bg-slate-500 text-white text-center rounded-md hover:bg-slate-600 transition"
          >
            ISR
          </Link>
        </div>
      </section>

      <section className="text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">TodoList</h1>
        <div className="flex gap-4">
          <Link
            href="/todo/csr-todo"
            className="p-3 bg-slate-500 text-white text-center rounded-md hover:bg-slate-600 transition"
          >
            CSR TODOLIST
          </Link>
          <Link
            href="/todo/ssr-todo"
            className="p-3 bg-slate-300 text-center rounded-md hover:bg-slate-400 transition"
          >
            SSR TODOLIST
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Homepage;
