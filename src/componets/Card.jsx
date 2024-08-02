import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ title, imgSrc, href }) {
  return (
    <Link to={href} className="card">
      <img src={imgSrc} alt="da nu nahui" className="card_img" />
      <div className="card_title">{title}</div>
    </Link>
  );
}
