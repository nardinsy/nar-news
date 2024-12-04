"use server";

import { redirect } from "next/navigation";
import { addNewsBtn } from "./news";

export async function submitForm(formData: FormData): Promise<boolean> {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image");
  const date = "2021-07-01";

  const newNews = {
    id: "111",
    slug: title,
    title,
    image: "ai-robot.jpg",
    date,
    content,
  };

  //   const news = getAllNews();
  //   news.push(newNews);

  addNewsBtn(newNews);
  redirect("/news");
  return Promise.resolve(true);
}
