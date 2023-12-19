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
      <h2>Planet name</h2>
      <p className="planet-desc">
        Description of Planet name. Add anything you want to say here. How far
        will this stretch? How far will this stretch? How far will this stretch?
        How far will this stretch? How far will this stretch? How far will this
        stretch?
      </p>
    </div>
  );
};

export default Earth;
