import AddNewsBtn from "@/components/add-news-btn";
import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/constants/dummy-news";

const NewsPage = () => {
  return (
    <>
      <header className="flex flex-row justify-between">
        <h1 className="h1 p-4">News Page</h1>
        <AddNewsBtn />
      </header>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};
export default NewsPage;
