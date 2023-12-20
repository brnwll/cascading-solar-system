import React from "react";
import "./Venus.css";

const Venus = () => {
  return (
    <div id="venus" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Venus</h2>
        <p>A day on Venus is longer than a year</p>
        <p className="css-note">
          <span>CSS:</span> Surface rotation is achieved by applying a <br />
          x-axis translation animation on the background image
        </p>
      </div>
    </div>
  );
};

export default Venus;
