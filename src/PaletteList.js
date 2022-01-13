import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>REACT COLORS</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <Link to={`/palette/${palette.id}`}>
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
