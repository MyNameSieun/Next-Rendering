import { CatType } from "@/app/types/apod-types";

const SsgPage = async () => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const response = await fetch(url, {});

  const data = await response.json();

  return (
    <div>
      <h1 className="text-8xl">SSG</h1>
      {data.map((cat: CatType) => (
        <div key={cat.id}>
          <img src={cat.url} alt={cat.id} width={300} />
        </div>
      ))}
    </div>
  );
};

export default SsgPage;
