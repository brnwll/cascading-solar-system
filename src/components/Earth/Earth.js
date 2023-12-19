import React from "react";
import "./Earth.css";

const Earth = () => {
  return (
    <div id="earth" className="planetary-system">
      <div className="planet"></div>
      <div className="moon">
        <div id="crater1" className="crater"></div>
        <div id="crater2" className="crater"></div>
        <div id="crater3" className="crater"></div>
      </div>
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

export default Earth;
