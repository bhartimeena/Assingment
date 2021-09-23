import React from "react"

function Nav(props) {
  return(
    <nav className="container">
      <form onSubmit={props.handleSubmit}>
        <div className="search-countrie" style={!props.lightMode ? {boxShadow: "0px 0px 5px 2px rgba(43, 57, 69, 0.62)", backgroundColor: "hsl(209, 23%, 22%)"} : null}>
          <ion-icon name="search-outline"></ion-icon>
          <input
            type="text"
            placeholder="Search for a country..."
            name="countrieSearch"
            value={props.countrieSearch}
            onChange={props.handleChange}
            style={props.lightMode ? null : {backgroundColor: "hsl(209, 23%, 22%)", color: "white"}}
          />
        </div>
        <select style={!props.lightMode ? {boxShadow: "0px 0px 5px 2px rgba(43, 57, 69, 0.62)", backgroundColor: "hsl(209, 23%, 22%)", color: "white"} : null} onClick={props.handleRegion}>
          {/* <option value="">Filter by region</option> */}
          <option value="asia">Asia</option>
        </select>
      </form>
    </nav>
  )
}

export default Nav
