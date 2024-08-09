import "./Carousel.scss";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function Carousel({ imgArray }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="appartment_container">
      <img className="appartment_img" src={imgArray[imgIndex]} />
      <button
        className={`button_left ${imgArray.length <= 1 ? "carousel_hide" : ""}`}
        onClick={() =>
          setImgIndex((prev) => {
            if (prev === 0) {
              return imgArray.length - 1;
            }
            return prev - 1;
          })
        }
      >
        <IconChevronLeft size={120} stroke={2} />
      </button>
      <button
        className={`button_right ${
          imgArray.length <= 1 ? "carousel_hide" : ""
        }`}
        onClick={() =>
          setImgIndex((prev) => {
            if (prev === imgArray.length - 1) {
              return 0;
            }
            return prev + 1;
          })
        }
      >
        <IconChevronRight size={120} stroke={2} />
      </button>
      <div
        className={`img_index_idicator  ${
          imgArray.length <= 1 ? "carousel_hide" : ""
        }`}
      >
        {imgIndex + 1}/{imgArray.length}
      </div>
    </div>
  );
}
