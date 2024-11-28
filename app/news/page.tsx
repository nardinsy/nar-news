import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/constants/dummy-news";

const NewsPage = () => {
  return (
    <>
      <h1 className="h1 p-4">News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};
export default NewsPage;
