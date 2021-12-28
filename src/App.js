import { render } from "@testing-library/react";
import "./App.css";
import React, { Component } from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));

    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
