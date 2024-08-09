import "./Home.scss";
import { Fragment, useEffect, useState } from "react";
import Accordeon from "../Accordeon/Accordeon.jsx";
import Card from "../Card/Card.jsx";
import appartmentJSON from "../../appartement.json";
import Layout from "../Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="banner">
          <img src="/Banner.png" className="banner_img" />
          <div className="filter"></div>
          <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="cards_container">
          {appartmentJSON.map((el, key) => (
            <Card
              href={`/appartment/${el.id}`}
              key={key}
              title={el.title}
              imgSrc={el.cover}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
