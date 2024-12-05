import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import { getNewsByID } from "@/lib/posts";

const NewsDetailPage = ({ params }: { params: { id: string } }) => {
  const newsItem = getNewsByID(params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <Link href={`/news/${newsItem.id}/image`}>
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          className="news-article-img"
        />
      </Link>
      <h2 className="h2 pb-4">{newsItem.title}</h2>
      <time dateTime={newsItem.date} className="pb-4">
        {newsItem.date}
      </time>
      <div>{newsItem.content}</div>
    </article>
  );
};

export default NewsDetailPage;
