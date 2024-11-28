import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className="main-header">
      <h2 className="h2">Nar-News</h2>
      <nav>
        <ul className="nav">
          <li>
            <NavLink href="/">Home</NavLink>
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
