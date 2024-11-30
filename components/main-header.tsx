import Link from "next/link";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className="main-header">
      <h2 className="h2">
        <Link href="/">Nar-News</Link>
      </h2>
      <nav>
        <ul className="nav">
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
