import Home from "./componets/Home";
import Appartment from "./componets/Appartment";
import About from "./componets/About";
import "./index.scss";
import NavBar from "./componets/NavBar.jsx"
import Footer from "./componets/Footer.jsx";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/appartment/:id" element={<Appartment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
