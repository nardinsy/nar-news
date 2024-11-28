import Link from "next/link";

export default function NewsNotFoundPage() {
  return (
    <div>
      <h1 className="h1">Not Found!</h1>
      <p>Unfortunately, we could not find the requested article.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
