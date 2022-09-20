import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => setCountries(data))
  }, [])
  return(
    <div>
      <h1>Visiting Every Country Of World</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common}></Country> )
      }
    </div>
  )
}
function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
    </div>
  )
}

export default App;
