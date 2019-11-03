import React, { Component } from 'react';
import SchengenMap from './LeafletMap'
import TravelList from "./SidePanel";

class App extends Component {
  render() {
      return (
      <div className="App flex-container">
        {/*<Header />*/}
        <SchengenMap />
        <TravelList />
      </div>
    );
  }
}

export default App;
