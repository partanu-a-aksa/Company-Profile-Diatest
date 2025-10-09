import { getNewsDetail } from "@/lib/newsapi";

export default async function BlogDetail(props: any) {
  const params = await props.params;
  const slug = params.slug;
  const data = await getNewsDetail(slug);

  return (
    <div>
      <h2>{data.title}</h2>
      {data.imgurl && (
        <img
          src={data.imgurl}
          alt={data.title}
          className="w-full max-w-xl mx-auto my-4 rounded-lg shadow"
        />
      )}
      <p className="text-[8px] italic ">created by : {data.author}</p>
      <p>{data.content}</p>
    </div>
  );
}
