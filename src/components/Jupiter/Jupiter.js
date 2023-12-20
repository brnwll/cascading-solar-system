import React from "react";
import "./Jupiter.css";

const Jupiter = () => {
  return (
    <div id="jupiter" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Jupiter</h2>
        <p>A Giant Beyond Browser Scale</p>
        <p className="css-note">
          <span>CSS Technique:</span> Employ box-shadow to create a glowing or
          atmospheric effect around the planet.
        </p>
      </div>
    </div>
  );
};

export default Jupiter;
