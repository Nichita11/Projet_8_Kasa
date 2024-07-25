import { useState } from "react";
import "./Accordeon.scss";
import { IconChevronDown } from "@tabler/icons-react";

export default function Accordeon({ paragraths, title }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordeon">
      <div className="accordeon_btn" onClick={() => setOpen((prev) => !prev)}>
        <div className="accordeon_text">{title}</div>
        <IconChevronDown size={32} stroke={2} className="arrow"/>
      </div>
      <div className="accordeon_fall">
        {paragraths.map((el, key) => (
          <p key={key}>{el}</p>
        ))}
      </div>
    </div>
  );
}
