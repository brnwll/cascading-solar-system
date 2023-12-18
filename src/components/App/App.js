import React from "react";
import "./App.css";
import Sun from "../Sun/Sun";
import Earth from "../Earth/Earth";

function App() {
  return (
    <div id="solar-system" className="App">
      <Sun />
      <h1>
        <div className="css">Cascading </div>
        <div className="css">Solar </div>
        <div className="css">System </div>
      </h1>
      <Earth />
      <div id="infinity"></div>
    </div>
  );
}

export default App;
