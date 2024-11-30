"use client";

import { getNewsByID } from "@/lib/news";
import { notFound, useRouter } from "next/navigation";

const ImagePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const newsItem = getNewsByID(params.id);
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default ImagePage;
