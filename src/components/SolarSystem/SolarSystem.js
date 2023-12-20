import React from "react";
import "./SolarSystem.css";
import Sun from "../Sun/Sun";
import Mercury from "../Mercury/Mercury";
import Venus from "../Venus/Venus";
import Earth from "../Earth/Earth";
import Mars from "../Mars/Mars";
import Jupiter from "../Jupiter/Jupiter";
import Saturn from "../Saturn/Saturn";
import Uranus from "../Uranus/Uranus";
import Neptune from "../Neptune/Neptune";

function SolarSystem() {
  return (
    <div id="solar-system">
      <Sun />
      <h1>
        <div className="css">Cascading </div>
        <div className="css">Solar </div>
        <div className="css">System </div>
        <div className="css desc">An exercise in CSS & animations</div>
      </h1>
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <div id="infinity"></div>
      <footer>
        <div>
          <h4>Cascading Solar System</h4>
          <p>
            CSS was developed as an educational project to better understand CSS
            animations. None of the planets displayed are to scale relative to
            one another. Given the vast differences in size, it would be
            impossible to achieve in any usable way.
          </p>
          <ul>
            <li>
              <a href="http://www.brnwll.com">brnwll</a>
            </li>
            <li>
              <a href="https://github.com/brnwll/cascading-solar-system">
                github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default SolarSystem;
