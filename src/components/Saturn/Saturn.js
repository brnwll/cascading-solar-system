import React from "react";
import "./Saturn.css";

const Saturn = () => {
  return (
    <div id="saturn" className="planetary-system">
      <div className="planet"></div>
      <div className="ring1-back"></div>
      <div className="ring1-front"></div>
      <div className="planet-desc">
        <h2>Planet name</h2>
        <p>
          Description of Planet name. Add anything you want to say here. How far
          will this stretch? How far will this stretch? How far will this
          stretch? How far will this stretch? How far will this stretch? How far
          will this stretch?
        </p>
      </div>
    </div>
  );
};

export default Saturn;
