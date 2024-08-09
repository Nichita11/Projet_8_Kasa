import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import Layout from "../Layout";

export default function ErrorPage() {
  return (
    <Layout>
      <div className="error_container">
        <div className="error404">404</div>
        <div className="error_msg">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <Link to={"/"} className="error_link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </Layout>
  );
}
