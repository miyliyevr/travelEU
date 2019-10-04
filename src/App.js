import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SchengenGeojson from "./data/europeHighRes.geo"
import GermanyCitiesJson from "./data/de"
import FranceCitiesJson from "./data/fr"
//https://simplemaps.com/data/pl-cities
import PolandCitiesJson from "./data/pl"
//https://simplemaps.com/data/it-cities
import ItalyCitiesJson from "./data/it"

class App extends Component {
  render() {
      const SchengenCountries = SchengenGeojson.features
      const GermanyCities = GermanyCitiesJson
      const FranceCities = FranceCitiesJson
      const PolandCities = PolandCitiesJson
      const ItalyCities = ItalyCitiesJson
      console.table(ItalyCities)
      console.table(PolandCities)
      console.table(FranceCities)
      console.table(GermanyCities)
      console.table(SchengenCountries)
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">hello
        </p>
      </div>
    );
  }
}

export default App;
