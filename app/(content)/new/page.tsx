import NewsForm from "@/components/news-form";

import { createNews } from "@/lib/actions/posts";

const AddNewsPage = () => {
  return <NewsForm action={createNews} />;
};

export default AddNewsPage;
