import React from "react";
import "./Saturn.css";

const Saturn = () => {
  return (
    <div id="saturn" className="planetary-system">
      <div className="planet"></div>
      <div className="ring1-back"></div>
      <div className="ring1-front"></div>
      <div className="planet-desc">
        <h2>Saturn</h2>
        <p>The Ringed Gas Giant</p>
        <p className="css-note">
          <span>CSS Technique:</span> Saturn's rings are crafted using two
          separate elements, one behind and one in front of the planet.
        </p>
      </div>
    </div>
  );
};

export default Saturn;
