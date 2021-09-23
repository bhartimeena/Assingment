import Spinner from './Spinner'
import React, {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

function CountrieInfo(props) {
  const [countrie, setCountrie] = useState({})
  const [loading, setLoading] = useState(true)
  let { id } = useParams()

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${id}?fullText=true`)
    .then(response => response.json())
    .then(data => {
      setCountrie(data[0])
      setLoading(!loading)
    })
  }, [])

  const countrieBorders = (borders) => borders.map(border => border + " ")

  return (
    <div className="detailed-countrie container">
      <div className="back-button">
        <Link to="/" style={props.lightMode ? {backgroundColor: "white"} : {boxShadow: "0px 0px 5px 7px rgba(43, 57, 69, 0.5)", backgroundColor: "hsl(209, 23%, 22%)", color: "white"}}>
          <p><ion-icon name="arrow-back-outline"></ion-icon> Back</p>
        </Link>
      </div>
      {loading ? <Spinner loader="MoonLoader" spinnerColor={props.lightMode ? "#000000" : "#ffffff"}/> :
        countrie ?
          <div className="countrie-details" style={props.lightMode ? null : {color: "white"}}>
            <div className="countrie-details_flag">
              <img src={countrie.flag} alt={countrie.name + "'s flag'"} title={countrie.name + " flag"}/>
            </div>
            <div className="countrie-details_data">
              <h1 className="countrie-name">{countrie.name}</h1>
              <div>
                <div className="leftInfo">
                  <p><span className="countrie-propertie">Native name: </span>{countrie.nativeName}</p>
                  <p><span className="countrie-propertie">Population: </span>{countrie.population}</p>
                  <p><span className="countrie-propertie">Region: </span>{countrie.region}</p>
                  <p><span className="countrie-propertie">Sub region: </span>{countrie.subregion}</p>
                  <p><span className="countrie-propertie">Capital: </span>{countrie.capital}</p>
                </div>
                <div className="rightInfo">
                  <p><span className="countrie-propertie">Top level domain: </span>{countrie.topLevelDomain}</p>
                  <p><span className="countrie-propertie">Currencies: </span>{countrie.currencies[0].code} ({countrie.currencies[0].name})</p>
                  <p><span className="countrie-propertie">Languages: </span>{countrie.languages[0].name}</p>
                </div>
              </div>
              <div>
                <p><span className="countrie-propertie countrie-borders">Border Countries: </span></p>
                <span>
                  {
                    countrieBorders(countrie.borders).map(border => border)
                  }
                </span>
              </div>
            </div>
          </div>
         : "Country not found"
      }
    </div>
  )
}

export default CountrieInfo
