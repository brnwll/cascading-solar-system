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
        <h2>Earth</h2>
        <p>If you're reading this, you're on the right planet</p>
        <p className="css-note">
          <span>CSS:</span> Moon orbit is achieved by animating the top and left
          position of the moon. Z-index is used to place the moon behind the
          planet depending on the position of the moon
        </p>
      </div>
    </div>
  );
};

export default Earth;
