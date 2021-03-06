import { Link } from "react-router-dom";

function Navbar(props: NavOptions) {
  return (
    <nav className="navbar-wrapper">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyle: "none",
        }}
      >
        {props.navElements.map(({ label, link: { href, path } }) => {
          return (
            <li key={label}>
              {href ? (
                <a href={href}>{label}</a>
              ) : (
                <Link to={path ?? ""}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
