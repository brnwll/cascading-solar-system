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
        <p>Our Home Planet</p>
        <p className="css-note">
          <span>CSS Technique:</span> The moon's orbit is animated using the top
          and left positions. Z-index layers the moon behind the planet as
          needed.
        </p>
      </div>
    </div>
  );
};

export default Earth;
