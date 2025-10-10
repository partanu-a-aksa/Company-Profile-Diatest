import { getNewsHeadline, getNewsDetail } from "@/lib/newsapi";
import Image from "next/image";

interface BlogDetailProps {
  params: { slug: string };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const articles = await getNewsHeadline();

  const article = articles.find(
    (a) => a.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-100">
        <p className="text-gray-600 text-lg">Artikel tidak ditemukan.</p>
      </div>
    );
  }

  const data = await getNewsDetail(article.objectId);

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-700 mb-4">
          {data.title}
        </h2>

        {data.imgurl && (
          <div className="relative w-full h-[400px] max-h-[400px] object-cover rounded-xl mb-6 shadow-md">
            <Image src={data.imgurl} alt={data.title} fill></Image>
          </div>
        )}

        <p className="text-xs text-gray-500 italic mb-4 text-right">
          created by: {data.author}
        </p>

        <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
          {data.content}
        </p>
      </div>
    </div>
  );
}
