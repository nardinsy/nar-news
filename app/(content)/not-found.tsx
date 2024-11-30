import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1 className="h1">Not Found!</h1>
      <p>The requested resource could not be found!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
