"use client";

import { useFormState } from "react-dom";

import FileUploader from "./file-uploader";
import FormSubmit from "./form-submit";
import { error } from "console";

const NewsForm = ({ action }: { action: any }) => {
  const [state, formAction] = useFormState(action, { errors: [] });

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
      {state.errors && (
        <ul>
          {state.errors.map((error) => (
            <li key={error} className="text-red-400">
              {error}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default NewsForm;
