import { getNewsByID } from "@/lib/posts";
import { notFound } from "next/navigation";

const ImagePage = ({ params }: { params: any }) => {
  const newsItem = getNewsByID(params.id);
  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
