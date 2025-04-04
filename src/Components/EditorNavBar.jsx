import React from "react";
import "../assets/Styles/navBar.css";
const EditorNavBar = () => {
  return (
    <div id="editorBar">
      <div id="bar">
        <h3>Reactify-Code</h3>
        <div id="navPart2">
          <div id="btn">
            <button>Language</button>
            <button>Theme</button>
            <button>Run</button>
          </div>
          <div id="line1"></div>
          <div id="Dp"></div>
        </div>
      </div>
    </div>
  );
};

export default EditorNavBar;
