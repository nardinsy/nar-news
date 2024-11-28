export default function ArchiveLayout({
  archive,
  latest,
}: {
  archive: React.ReactNode;
  latest: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="h1">News Archive</h1>
      <section>{archive}</section>
      <div className="border border-b-zinc-400 my-4"></div>
      <section>{latest}</section>
    </div>
  );
}
