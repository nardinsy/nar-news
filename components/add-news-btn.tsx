"use client";

import { useRouter } from "next/navigation";

const AddNewsBtn = () => {
  const router = useRouter();

  const addNewsBtnHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/new");
  };
  return (
    <button className="px-8" onClick={addNewsBtnHandler}>
      + News
    </button>
  );
};

export default AddNewsBtn;
