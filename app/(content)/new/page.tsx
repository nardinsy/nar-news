"use client";

import FileUploader from "@/components/file-uploader";
import { submitForm } from "@/lib/actions";
import { useState } from "react";

const AddNewsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(formData: FormData) {
    setIsLoading(true);
    const result = await submitForm(formData);
    if (result) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }

  return (
    <form action={onSubmit} className="form">
      <div className="form-field">
        <label>Title: </label>
        <input name="title" placeholder="News title" />
      </div>

      <div className="form-field">
        <label>Content: </label>
        <textarea name="content" placeholder="News content" />
      </div>

      <FileUploader />

      <button type="submit" disabled={isLoading} className="form-submit-btn">
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default AddNewsPage;
