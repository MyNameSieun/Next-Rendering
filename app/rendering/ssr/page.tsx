import { CatType } from "@/app/types/apod-types";

// 컴포넌트가 async 함수로 작성되어 서버에서 데이터를 가져온다. ->  next에선 서버 컴포넌트이므로 가능
const SsrPage = async () => {
  //  const [data, setData] = useState<CatType[] | null>(null);
  const CAT_API_Key =
    "live_VodbROy8Y4cD3I3WSezY2DLfrFty3IDJBv9gPOvT9ZZql4hYCnRmEYraPCYrJEVG";
  const url = `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=${CAT_API_Key}`;

  const response = await fetch(url, {
    cache: "no-cache", // 옵션 부여(캐시를 하지 않음!)
  });

  const data = await response.json();

  return (
    <div>
      <h1 className="text-8xl">SSR</h1>
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

export default SsrPage;
