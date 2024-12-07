"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { NewsType } from "@/types/types";
import { addNews } from "../posts";

export async function createNews(prevState: any, formData: FormData) {
  const title = formData.get("title") as string | null;
  const image = formData.get("image") as string | null;
  const content = formData.get("content") as string | null;

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  // if (!image || image.trim().length === 0) {
  //   errors.push("Image is required.");
  // }

  if (errors.length > 0) {
    return { errors };
  }

  const newNews = {
    id: "111",
    slug: title,
    title,
    image: "ai-robot.jpg",
    date: "2021-07-01",
    content: "",
  } as NewsType;

  await addNews(newNews);

  revalidatePath("/", "layout");
  redirect("/news");
  console.log(prevState);
}
