import logo from "./logo.svg";
import "./Home.scss";
import { Fragment, useEffect, useState } from "react";
import Accordeon from "./componets/Accordeon";

export default function Home() {
  return (
    <div>
      <Accordeon
        paragraths={["Paragrath 1", "Paragrath2"]}
        title={"Équipements"}
      />
    </div>
  );
}
