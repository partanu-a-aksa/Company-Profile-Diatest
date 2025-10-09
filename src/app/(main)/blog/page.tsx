import * as React from "react";
import { getNewsHeadline } from "@/lib/newsapi";
import Link from "next/link";

export default async function BlogPage() {
  const articles = await getNewsHeadline();

  return (
    <div className="min-h-screen bg-sky-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-sky-700 text-center">
        Blog Page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((data) => {
          const slug = data.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link
              key={data.objectId}
              href={`/blog/${slug}`}
              className="bg-white border rounded-xl shadow hover:shadow-lg overflow-hidden transition duration-200"
            >
              <img
                src={data.imgurl}
                alt={data.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-sky-800 mb-1">
                  {data.title}
                </h2>
                <p className="text-[10px] italic text-gray-500 mb-2">
                  created by : {data.author}
                </p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {data.content}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
