import React from "react";
import "./Neptune.css";

const Neptune = () => {
  return (
    <div id="neptune" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Neptune</h2>
        <p>The Distant Ice Giant</p>
        <p className="css-note">
          <span>CSS Note:</span> After Earth and Mars, creating additional moons
          was less focused. Neptune has them, though, in some form.
        </p>
      </div>
    </div>
  );
};

export default Neptune;
