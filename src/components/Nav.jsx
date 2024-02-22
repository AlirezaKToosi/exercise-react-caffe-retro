import "../style/nav.css";

export function Nav() {
  return (
    <>
      <nav className="navBar">
        <a className="link" href="#hot">
          Hot
        </a>
        <a className="link" href="#juicy">
          Juicy
        </a>
        <a className="link" href="#cosy">
          Cozy
        </a>
      </nav>
    </>
  );
}
