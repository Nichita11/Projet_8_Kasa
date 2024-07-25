
import "./NavBar.scss";

export default function NavBar() {
  const pathname = window.location.pathname;
  return (
    <div className="NavBar">
      <img src="/LOGO.svg" alt="logo.svg" className="Navbar_img"></img>
      <div className="NavBar_text">
        <a className={`Navbar_link ${pathname === "/" ? "underline" : ""}`}>Acceuil</a>
        <a className={`Navbar_link ${pathname === "/about" ? "underline" : ""}`}>A propos</a>
      </div>
    </div>
  );
}
