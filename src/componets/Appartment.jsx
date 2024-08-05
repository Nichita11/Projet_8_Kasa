import { useParams } from "react-router-dom";
import appartmentJSON from "../appartement.json";
import "./Appartment.scss";
import Accordeon from "./Accordeon";
import {
  IconChevronLeft,
  IconChevronRight,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import Layout from "./Layout";

function StarFilledOrNot({ filled }) {
  return filled === true ? (
    <IconStarFilled size={32} stroke={2} className="star" />
  ) : (
    <IconStar size={32} stroke={2} className="star" />
  );
}

export default function Appartment() {
  const { id } = useParams();
  const appartment = appartmentJSON.find((el) => el.id === id);
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <Layout>
      <>
        <div className="appartment_container">
          <img className="appartment_img" src={appartment.pictures[imgIndex]} />
          <button
            className="button_left"
            onClick={() =>
              setImgIndex((prev) => {
                if (prev === 0) {
                  return appartment.pictures.length - 1;
                }
                return prev - 1;
              })
            }
          >
            <IconChevronLeft size={120} stroke={2} />
          </button>
          <button
            className="button_right"
            onClick={() =>
              setImgIndex((prev) => {
                if (prev === appartment.pictures.length - 1) {
                  return 0;
                }
                return prev + 1;
              })
            }
          >
            <IconChevronRight size={120} stroke={2} />
          </button>
          <div className="img_index_idicator">
            {imgIndex + 1}/{appartment.pictures.length}
          </div>
        </div>
        <div className="content">
          <div>
            <div className="content_title">
              <div className="appartement_title">{appartment.title}</div>
              <div className="appartment_location">{appartment.location}</div>
            </div>
            <div className="tags">
              {appartment.tags.map((el, key) => (
                <div className="tag" key={key}>
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className="flex_end">
            <div className="profile">
              <div className="profile_name">
                {appartment.host.name.split(" ").map((el, key) => (
                  <div key={key}>{el}</div>
                ))}
              </div>
              <img src={appartment.host.picture} className="profile_img" />
            </div>
            <div className="appartment_rating">
              <StarFilledOrNot filled={appartment.rating >= 1} />
              <StarFilledOrNot filled={appartment.rating >= 2} />
              <StarFilledOrNot filled={appartment.rating >= 3} />
              <StarFilledOrNot filled={appartment.rating >= 4} />
              <StarFilledOrNot filled={appartment.rating >= 5} />
            </div>
          </div>
        </div>
        <div className="accordeons_container ">
          <Accordeon
            paragraths={[appartment.description]}
            title={"Description"}
            fluid
          />
          <Accordeon
            paragraths={appartment.equipments}
            title={"Équipements"}
            fluid
          />
        </div>
      </>
    </Layout>
  );
}
