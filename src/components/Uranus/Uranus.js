import React from "react";
import "./Uranus.css";

const Uranus = () => {
  return (
    <div id="uranus" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Uranus</h2>
        <p>The Often Overlooked Ice Giant</p>
        <p className="css-note">
          <span>CSS Technique:</span> Uranus appears quite plain, with minimal
          notable features other that box-shadow and gradient
        </p>
      </div>
    </div>
  );
};

export default Uranus;
