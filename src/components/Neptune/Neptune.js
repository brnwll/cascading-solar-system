import React from "react";
import "./Neptune.css";

const Neptune = () => {
  return (
    <div id="neptune" className="planetary-system">
      <div className="planet"></div>
      <div className="planet-desc">
        <h2>Neptune</h2>
        <p>
          Given it's proximity to Pluto, Neptune probably had something to do
          with getting it thrown out of the club.
        </p>
        <p className="css-note">
          <span>CSS:</span> After Earth and Mars, creating moons grew tiresome.
          But Neptune has some, probably.
        </p>
      </div>
    </div>
  );
};

export default Neptune;
