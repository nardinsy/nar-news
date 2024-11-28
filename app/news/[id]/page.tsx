import { getNewsByID } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailPage = ({ params }: { params: { id: string } }) => {
  const newsItem = getNewsByID(params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <Image
        src={`/images/news/${newsItem.image}`}
        width={150}
        height={150}
        alt="image"
        className="pb-4"
      />
      <h2 className="h2 pb-4">{newsItem.title}</h2>
      <time dateTime={newsItem.date} className="pb-4">
        {newsItem.date}
      </time>
      <div>{newsItem.content}</div>
    </article>
  );
};

export default NewsDetailPage;
