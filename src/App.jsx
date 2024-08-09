import Home from "./componets/Home/Home.jsx";
import Appartment from "./componets/Appartment/Appartment.jsx";
import About from "./componets/About/About.jsx";
import "./index.scss";
import NavBar from "./componets//NavBar/NavBar.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import appartmentJSON from "./appartement.json";

import {
  BrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./componets//ErrorPage/ErrorPage.jsx";

function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        exact
        path="/appartment/:id"
        element={<Appartment />}
        loader={({ params }) => {
          const appartment = appartmentJSON.find((el) => el.id === params.id);

          if (appartment === undefined) {
            throw new Response("Not Found", { status: 404 });
          }

          return { appartment };
        }}
        errorElement={<ErrorPage />}
      />
    </>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
