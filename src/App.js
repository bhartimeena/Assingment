import React, { useState, useEffect } from "react"
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Spinner from './components/Spinner'
import Countries from './components/Countries'
import CountrieInfo from './components/CountrieInfo'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [countries, setCountries] = useState([])
  const [countrieSearch, setCountrieSearch] = useState("")
  const [lightMode, setTheme] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/region/asia")
    .then(response => response.json())
    .then(data => {
      setCountries(data)
      setLoading(!loading)
    })
  }, [])

  const handleRegion = (event) => {
    // if(event.target.value !== "") {
      fetch(`https://restcountries.eu/rest/v2/region/asia`)
      .then(response => response.json())
      .then(data => setCountries(data))
    // } else {
    //   fetch("https://restcountries.eu/rest/v2/asia")
    //   .then(response => response.json())
    //   .then(data => setCountries(data))
    // }
  }

  const handleClick = (event) => {
    setTheme(!lightMode)
  }

  const handleChange = (event) => {
    setCountrieSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(`https://restcountries.eu/rest/v2/name/${countrieSearch}`)
    if(countrieSearch.length > 0) {
      fetch(`https://restcountries.eu/rest/v2/name/${countrieSearch}`)
      .then(response => response.json())
      .then(data => setCountries(data))
    } else {
      fetch("https://restcountries.eu/rest/v2/asia")
      .then(response => response.json())
      .then(data => setCountries(data))
    }
  }

  return (
    <Router>
      <div className={lightMode ? "App"  : "darkApp"}>
        <Header handleClick={handleClick} lightMode={lightMode}/>
        <div className="background">
          <Switch>

            <Route path="/" exact>
              <Nav handleChange={handleChange} handleSubmit={handleSubmit} countrieSearch={countrieSearch} lightMode={lightMode} handleRegion={handleRegion}/>
              {loading ? <Spinner loader="MoonLoader" spinnerColor={lightMode? "#000000" : "#ffffff"}/> :
                countries.length > 0 ? <Countries countries={countries} lightMode={lightMode}/> : "Country not found"
              }
            </Route>

            <Route path="/countries/:id">
              <CountrieInfo lightMode={lightMode}/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
