import React from "react";
import "./Mars.css";

const Mars = () => {
  return (
    <div id="mars" className="planetary-system">
      <div className="planet"></div>
      <div id="phobos" className="moon"></div>
      <div id="deimos" className="moon"></div>
    </div>
  );
};

export default Mars;
