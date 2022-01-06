import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    console.log(generatePalette(seedColors[4]));

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <SingleColorPalette />}
        />
      </Switch>
    );
  }
}

export default App;
