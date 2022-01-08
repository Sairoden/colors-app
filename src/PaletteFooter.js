import React from "react";

function PaletteFooter(props) {
  const { paletteName, emoji } = props;

  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
      <h1>asdasd</h1>
    </footer>
  );
}

export default PaletteFooter;
