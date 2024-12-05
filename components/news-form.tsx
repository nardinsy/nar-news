"use client";

import { useFormState } from "react-dom";

import FileUploader from "./file-uploader";
import FormSubmit from "./form-submit";

const NewsForm = ({ action }: { action: any }) => {
  const [state, formAction] = useFormState(action, {});

  return (
    <form action={formAction} className="form">
      <div className="form-field">
        <label>Title: </label>
        <input name="title" placeholder="News title" />
      </div>

      <div className="form-field">
        <label>Content: </label>
        <textarea name="content" placeholder="News content" />
      </div>

      <FileUploader />

      <FormSubmit />
      {/* {state.errors && (
        <ul>
          {state.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )} */}
    </form>
  );
};

export default NewsForm;
