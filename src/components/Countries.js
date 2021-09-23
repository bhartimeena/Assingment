import React from "react"
import Countrie from "./Countrie"

function Countries(props) {
  return(
    <section className="container countries">
      {props.countries.map(countrie => (
        <Countrie countrie={countrie} key={countrie.numericCode} lightMode={props.lightMode}/>
      ))}
    </section>
  )
}

export default Countries
