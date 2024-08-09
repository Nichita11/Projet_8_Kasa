import "./Footer.scss";
import Logo from "../Logo";

export default function Footer() {
  const pathname = window.location.pathname;
  return (
    <div className="Footer">
      <Logo className="Footer_img" />
      <div className="Footer_text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}
