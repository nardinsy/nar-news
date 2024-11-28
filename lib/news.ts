import { DUMMY_NEWS } from "@/constants/dummy-news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getNewsByID(id: string) {
  const newsItem = DUMMY_NEWS.find((item) => item.id === id);
  return newsItem;
}
