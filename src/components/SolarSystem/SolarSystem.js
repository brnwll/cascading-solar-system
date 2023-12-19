import React from "react";
import "./SolarSystem.css";
import Sun from "../Sun/Sun";
import Mercury from "../Mercury/Mercury";
import Venus from "../Venus/Venus";
import Earth from "../Earth/Earth";
import Mars from "../Mars/Mars";
import Jupiter from "../Jupiter/Jupiter";
import Saturn from "../Saturn/Saturn";

function SolarSystem() {
  return (
    <div id="solar-system">
      <Sun />
      <h1>
        <div className="css">Cascading </div>
        <div className="css">Solar </div>
        <div className="css">System </div>
      </h1>
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <div id="infinity"></div>
    </div>
  );
}

export default SolarSystem;
