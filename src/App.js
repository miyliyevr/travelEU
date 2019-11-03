import React, { Component } from 'react';
import SchengenMap from './LeafletMap'
import TravelList from "./TravelList";

class App extends Component {
    constructor() {
        super()
        this.state = {
            cityList: {
            },
            polylinePositions: [
            ]
        }
    }

    addCity = (e) => {
        let id = e.target.id
        let name = e.target.name
        this.setState(prevState => ({
            cityList: {...prevState.cityList,  [id]: name}
        }))
    }

    // Draw a line between cities
    drawRoad = () => {
        this.setState(prevState => ({
            polylinePositions:
            Object.keys(this.state.cityList).map(
                id => {
                    let latlong = id.split("_")
                    return ([latlong[0], latlong[1]])
                }
            )
        }))
    }

    render() {
        return (
            <div className="App flex-container">
                <SchengenMap addCity={this.addCity} polilineList={this.state.polylinePositions}/>
                <TravelList cityListApp={this.state.cityList} drawRoad={this.drawRoad}/>
            </div>
        );
    }
}

export default App;
