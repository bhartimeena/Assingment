import React from "react"
import "../index.css"

function Navbar(props) {
  function lightModeCheck(lightMode) {
    return lightMode ? {color: "black"} : {color: "white"}
  }

  return(
    <header>
      <div className="shadow" style={props.lightMode ? {backgroundColor: "white"} : {backgroundColor: "hsl(209, 23%, 22%)"}}>
        <div className="pre-nav container">
          <h1 style={lightModeCheck(props.lightMode)}>Where in the Asia?</h1>
          <button onClick={props.handleClick} style={lightModeCheck(props.lightMode)}>
            <ion-icon name="moon-outline" style={lightModeCheck(props.lightMode)}></ion-icon>
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
