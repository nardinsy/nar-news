"use client";

import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="form-submit-btn">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default FormSubmit;
