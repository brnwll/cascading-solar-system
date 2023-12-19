import React from "react";
import "./Mars.css";

const Mars = () => {
  return (
    <div id="mars" className="planetary-system">
      <div className="planet"></div>
      <div id="phobos" className="moon"></div>
      <div id="deimos" className="moon"></div>
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

export default Mars;
