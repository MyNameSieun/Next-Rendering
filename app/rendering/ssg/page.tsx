import { CatType } from "@/app/types/apod-types";

const SsgPage = async () => {
  const CAT_API_Key =
    "live_VodbROy8Y4cD3I3WSezY2DLfrFty3IDJBv9gPOvT9ZZql4hYCnRmEYraPCYrJEVG";
  const url = `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=${CAT_API_Key}`;

  const response = await fetch(url);

  const data = await response.json();

  return (
    <div>
      <h1 className="text-8xl">SSG</h1>
      {data.map((cat: CatType) => (
        <div key={cat.id}>
          <img src={cat.url} width={cat.width} height={cat.height} />
        </div>
      ))}
    </div>
  );
};

export default SsgPage;
