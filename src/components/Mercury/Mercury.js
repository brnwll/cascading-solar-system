import React from "react";
import "./Mercury.css";

const Mercury = () => {
  return (
    <div id="mercury" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Mercury</h2>
        <p>The Solar System's Smallest Planet</p>
        <p className="css-note">
          <span>CSS Technique:</span> Achieve the planet's surface effect using
          a background image.
        </p>
      </div>
    </div>
  );
};

export default Mercury;
