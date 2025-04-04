import React from "react";
import "../assets/Styles/navBar.css";
const EditorNavBar = () => {
  return (
    <div id="editorBar">
      <div id="bar">
      <div id="navPart1">
      <svg id='menu'onClick={()=>{
        console.log('menue');

      }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      <h3>Reactify-Code</h3>
      </div>

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
