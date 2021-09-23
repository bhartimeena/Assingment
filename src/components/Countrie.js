import React from "react"
import {Link} from "react-router-dom"

function Countrie(props) {
  return (
    <div className="countrie"
      style={!props.lightMode ? {boxShadow: "0px 0px 5px 2px rgba(43, 57, 69, 0.5)", backgroundColor: "hsl(209, 23%, 22%)", color: "white"} : null}
    >
      <div style={{backgroundImage: `url(${props.countrie.flag})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="countrie-flag"/>
      <div className="countrie-info">
        <p className="countrie-name">
          <Link to={`/countries/${props.countrie.name}`} style={!props.lightMode ? {color: "white"} : null}>
            {props.countrie.name}
          </Link>
        </p>
        <p><span className="countrie-propertie">Population:</span> {props.countrie.population}</p>
        <p><span className="countrie-propertie">Region:</span> {props.countrie.region}</p>
        <p><span className="countrie-propertie">Capital:</span> {props.countrie.capital}</p>
      </div>
    </div>
  )
}

export default Countrie
