import React from 'react'
import "../assets/Styles/mainEditor.css"
import Files from './Files'

const MainEditor = () => {
  return (
    <div id="container1">
         <main>
          <div id="code-space"></div>
          <div id="output">

         <div id="fileContainer">
         <Files/>
         </div>
            <div id="termux">

            </div>
          </div>
         </main>
    </div>

  )
}

export default MainEditor
