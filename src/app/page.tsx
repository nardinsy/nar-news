import TicketPage from "./tickets/TicketPage";
import Tickets from "./tickets/Tickets";

export default function Home() {
  return (
    <div>
      <TicketPage ticketsServerComponet={<Tickets />} />
    </div>
  );
}

{
  /* <>
<h1>Welcome home</h1>
<Link href="/blog">Blog</Link>
<Link href="/products">Products</Link>
</> */
}
