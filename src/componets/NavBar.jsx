import { useLocation } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <div className="NavBar">
      <img src="/LOGO.svg" alt="logo.svg" className="Navbar_img"></img>
      <div className="NavBar_text">
        <a
          href="/"
          className={`Navbar_link ${pathname === "/" ? "underline" : ""}`}
        >
          Acceuil
        </a>
        <a
          href="/about"
          className={`Navbar_link ${pathname === "/about" ? "underline" : ""}`}
        >
          A propos
        </a>
      </div>
    </div>
  );
}
