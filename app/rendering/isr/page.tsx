import { CatType } from "@/app/types/apod-types";

const IsrPage = async () => {
  const CAT_API_Key =
    "live_VodbROy8Y4cD3I3WSezY2DLfrFty3IDJBv9gPOvT9ZZql4hYCnRmEYraPCYrJEVG";
  const url = `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=${CAT_API_Key}`;

  const response = await fetch(url, {
    next: {
      revalidate: 5, // 5초마다 새로운 데이터 가져옴
    },
  });

  const data = await response.json();
  return (
    <div>
      <h1 className="text-8xl">ISR</h1>
      {data.map((cat: CatType) => (
        <div key={cat.id}>
          <img
            src={cat.url}
            alt={cat.id}
            width={cat.width}
            height={cat.height}
          />
        </div>
      ))}
    </div>
  );
};

export default IsrPage;
