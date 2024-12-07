import { createNews } from "@/lib/actions/posts";

import NewsForm from "@/components/news-form";

const AddNewsPage = () => {
  return <NewsForm action={createNews} />;
};

export default AddNewsPage;
