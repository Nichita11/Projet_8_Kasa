import Home from "./componets/Home";
import Appartment from "./componets/Appartment";
import About from "./componets/About";
import "./index.scss";
import NavBar from "./componets/NavBar.jsx";
import Footer from "./componets/Footer.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./componets/ErrorPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/appartment/:id" element={<Appartment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
