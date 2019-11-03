import React, { Component } from 'react'
import CityList from "./CityList";

class TravelList extends Component {
    render(){
        const {drawRoad} = this.props;

        return (
            <div id="TravelList" className="travel-list">
                <h1>The map of Schengen zone</h1>
                <p>All the markers on the map are available bus stops</p>
                <p>You can click on a city and add it to your trip. To find your city you can zoom in/out(mouse scroll or +/- butons on the map) and drag the map.</p>
                <CityList show="Yes" cityListTravelList={this.props.cityListApp}/>
                <button onClick={drawRoad}>Calculate the route</button>
            </div>
        )
    }
}

export default TravelList
