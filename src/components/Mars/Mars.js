import React from "react";
import "./Mars.css";

const Mars = () => {
  return (
    <div id="mars" className="planetary-system">
      <div className="planet"></div>
      <div id="phobos" className="moon"></div>
      <div id="deimos" className="moon"></div>
      <div className="planet-desc">
        <h2>Mars</h2>
        <p>Our soon to be second home</p>
        <p className="css-note">
          <span>CSS:</span> Look closely. Mars has two moons.
        </p>
      </div>
    </div>
  );
};

export default Mars;
