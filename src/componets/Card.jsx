import "./Card.scss";

export default function Card({ title, imgSrc, href }) {
  return (
    <a href={href} className="card">
      <img src={imgSrc} alt="da nu nahui" className="card_img" />
      <div className="card_title">{title}</div>
    </a>
  );
}
