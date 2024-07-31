import { useState } from "react";
import "./Accordeon.scss";
import {IconChevronUp } from "@tabler/icons-react";

export default function Accordeon({ paragraths, title, fluid = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordeon ${fluid ? "accordeon_fluid" : ""}`}>
      <div className="accordeon_btn" onClick={() => setOpen((prev) => !prev)}>
        <div className="accordeon_text">{title}</div>
        <IconChevronUp
          size={32}
          stroke={2}
          className={`arrow ${open ? "arrow_open" : ""}`}
        />
      </div>
      <div className={`accordeon_fall ${open ? "accordeon_fall_open" : ""}`}>
        <div
          className={`accordeon_fall_container ${
            open ? "accordeon_fall_container_open" : ""
          }`}
        >
          {paragraths.map((el, key) => (
            <p key={key} className="accordeon_paragrath">
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
