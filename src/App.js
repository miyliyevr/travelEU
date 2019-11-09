import React, { Component } from 'react';
import SchengenMap from './LeafletMap'
import TravelList from "./TravelList";
import RoutedTravelList from "./RoutedTravelList";

class App extends Component {
    constructor() {
        super()
        this.state = {
            cityList: {
            },
            polylinePositions: [
            ],
            routedCityList: {
            },
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
        this.nn()
    }

    // Nearest neighbour algorithm implementation
    nn(objReference = this.state.cityList) {
        // Creating object of city objects
        let cities = {}
        let i = 0
        Object.entries(objReference).forEach(([id, name]) => {
            let latlong = id.split("_")
            let singleCity = {}
            singleCity.lat = latlong[0]
            singleCity.lng = latlong[1]
            singleCity.name = name
            cities[i] = singleCity
            i++
        })

        // Loop through cities
        let startCityIndex = 0
        let route = [startCityIndex]
        this.visitCity(startCityIndex, cities, route)

        // Apply the route and trigger redraw
        this.setState(prevState => ({
            polylinePositions:
                route.map(
                    index => {
                        return ([cities[index].lat, cities[index].lng])
                    }
                )
        }))

        // Save list of city with their names by order
        this.setState(prevState => ({
            routedCityList:
            route.map(
                index => {
                    return cities[index].name
                }
            )
            })
        )
    }

    // Visit a city and calculate the nearest neighbour
    visitCity(index, cities, route) {
        cities[index].visited = "yes"
        let currentLat = cities[index].lat
        let currentLng = cities[index].lng

        let closestDistance = null
        let closestCityIndex = null

        // Finding nearest neighbour (city with the least distance)
        for (let notCurrent in cities) {
            if (!cities.hasOwnProperty(notCurrent)) continue
            if (cities[notCurrent].visited === "yes") continue
            let currentDistance = this.getDistance(
                currentLat,
                currentLng,
                cities[notCurrent].lat,
                cities[notCurrent].lng
            )

            if (closestDistance === null) {
                closestDistance = currentDistance
                closestCityIndex = notCurrent
                continue
            }

            if (currentDistance < closestDistance) {
                closestDistance = currentDistance
                closestCityIndex = notCurrent
            }
        }

        // Last visited city
        if (closestCityIndex === null) return
        route.push(parseInt(closestCityIndex, 10))
        this.visitCity(closestCityIndex, cities, route)
    }

    // Calculate distance between 2 cities(in km)
    getDistance(lat1,lon1,lat2,lon2, unit = 'km') {
        let R = 6371; // Radius of the earth in km
        let dLat = this.deg2rad(lat2-lat1);
        let dLon = this.deg2rad(lon2-lon1);
        let a = Math.sin(dLat/2)
            * Math.sin(dLat/2)
            + Math.cos(this.deg2rad(lat1))
            * Math.cos(this.deg2rad(lat2))
            * Math.sin(dLon/2)
            * Math.sin(dLon/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        switch(unit) {
            case 'm':
                return Math.round(R * c * 1000);
            case 'km':
            default:
                return Math.round(R * c);
        }
    }

    // Convert degrees to radians
    deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    render() {
        return (
            <div className="App flex-container">
                <SchengenMap addCity={this.addCity} polilineList={this.state.polylinePositions}/>
                <div className="travel-list">
                    <TravelList cityListApp={this.state.cityList} drawRoad={this.drawRoad}/>
                    <RoutedTravelList show={"Yes"} routedCityList={this.state.routedCityList}/>
                </div>
            </div>
        );
    }
}

export default App;
