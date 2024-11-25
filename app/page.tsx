import Link from "next/link";

const Homepage = () => {
  return (
    <nav className="flex">
      <Link href="/rendering/csr" className="p-3 bg-slate-300">
        CSR
      </Link>
      <Link href="/rendering/ssr" className="p-3 bg-slate-500 text-white">
        SSR
      </Link>
      <Link href="/rendering/ssg" className="p-3 bg-slate-300">
        SSG
      </Link>
      <Link href="/rendering/isr" className="p-3  bg-slate-500 text-white">
        ISR
      </Link>
    </nav>
  );
};

export default Homepage;
