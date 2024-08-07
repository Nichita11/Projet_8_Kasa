import {  useLoaderData } from "react-router-dom";
import "./Appartment.scss";
import Accordeon from "../Accordeon/Accordeon";
import {
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import Layout from "../Layout";
import Carousel from "../Carousel/Carousel";

function StarFilledOrNot({ filled }) {
  return filled === true ? (
    <IconStarFilled size={32} stroke={2} className="star" />
  ) : (
    <IconStar size={32} stroke={2} className="star" />
  );
}

export default function Appartment() {
  const {appartment} = useLoaderData()

    return (
      <Layout>
        <>
          <Carousel imgArray={appartment.pictures} />
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
