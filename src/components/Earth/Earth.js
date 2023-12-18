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
    </div>
  );
};

export default Earth;
