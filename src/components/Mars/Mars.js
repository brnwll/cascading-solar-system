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
        <p>The Future Second Home for Humanity</p>
        <p className="css-note">
          <span>Note:</span> Mars is unique with its two moons. Observe closely!
        </p>
      </div>
    </div>
  );
};

export default Mars;
