import { getNewsByID } from "@/lib/news";
import { notFound } from "next/navigation";

const ImagePage = ({ params }: { params: { id: string } }) => {
  const newsItem = getNewsByID(params.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <img
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        className="fullscreen-image"
      />
    </div>
  );
};

export default ImagePage;
