import "./About.scss";
import Accordeon from "./Accordeon";
import Layout from "./Layout";

export default function About() {
  const accordionsData = [
    {
      title: "Fiabilité",
      paragraths: [
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Nes photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos éctipes.",
      ],
    },
    {
      title: "Respect",
      paragraths: [
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
      ],
    },
    {
      title: "Service",
      paragraths: [
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
      ],
    },
    {
      title: "Sécurité",
      paragraths: [
        "La sécurite est la priorité de Kasa. Aussi bien pour nas hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.",
      ],
    },
  ];

  return (
    <Layout>
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
    </Layout>
  );
}
