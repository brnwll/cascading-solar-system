import React from "react";
import "./Mercury.css";

const Mercury = () => {
  return (
    <div id="mercury" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Mercury</h2>
        <p>The smallest planet in the Solar System</p>
        <p className="css-note">
          <span>CSS:</span> The planet surface effect is achieved by applying an
          image as the background
        </p>
      </div>
    </div>
  );
};

export default Mercury;
