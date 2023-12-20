import React from "react";
import "./Venus.css";

const Venus = () => {
  return (
    <div id="venus" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Venus</h2>
        <p>Where Days Outlast Years</p>
        <p className="css-note">
          <span>CSS Technique:</span> Simulate surface rotation with <br />
          x-axis translation animation on the background image.
        </p>
      </div>
    </div>
  );
};

export default Venus;
