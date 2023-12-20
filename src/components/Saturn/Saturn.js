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
        <p>Another gas giant, impossible to display anywhere close to scale</p>
        <p className="css-note">
          <span>CSS:</span> Saturn's rings are actually 2 separate elements, one
          rendered behind the planet and the other in the foreground.
        </p>
      </div>
    </div>
  );
};

export default Saturn;
