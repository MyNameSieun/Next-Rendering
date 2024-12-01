"use client";
import { CatType } from "@/app/types/apod-types";
import { useEffect, useState } from "react";

const CsrPage = () => {
  const [data, setData] = useState<CatType[] | null>(null);
  const url = `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-8xl">CSR</h1>
      {data.map((cat) => (
        <div key={cat.id}>
          <img src={cat.url} alt={cat.id} width={300} />
        </div>
      ))}
    </div>
  );
};

export default CsrPage;
