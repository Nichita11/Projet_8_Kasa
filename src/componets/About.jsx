import "./About.scss";
import Accordeon from "./Accordeon";

export default function About() {
  const accordionsData = [
    {
      title: "Fiabilité",
      paragraths: [""],
    },
    {
      title: "Respect",
      paragraths: [""],
    },
    {
      title: "Service",
      paragraths: [""],
    },
    {
      title: "Sécurité",
      paragraths: [""],
    },
  ];

  return (
    <div className="container_about">
      <div className="Banner_About">
        <img
          src="/Banner_About.png"
          alt="Banner_About"
          className="banner_img_about"
        />
      </div>
      <div className="accordeon_container">
        {accordionsData.map((data, index) => (
          <Accordeon
            key={index}
            paragraths={data.paragraths}
            title={data.title}
            fluid
          />
        ))}
      </div>
    </div>
  );
}
