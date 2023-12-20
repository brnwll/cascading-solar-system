import React from "react";
import "./Jupiter.css";

const Jupiter = () => {
  return (
    <div id="jupiter" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Jupiter</h2>
        <p>
          Not to scale, but if it was it would likely extend beyond the borders
          of your browser
        </p>
        <p className="css-note">
          <span>CSS:</span> Box-shadow is applied to create a glow or
          atmospheric effect on many of the planets.
        </p>
      </div>
    </div>
  );
};

export default Jupiter;
