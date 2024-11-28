import { NewsType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const NewsList = ({ news }: { news: NewsType[] }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.id}`} className="news-item">
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={150}
              height={150}
              className="news-item-image"
            />
            <h1>{newsItem.title}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
