import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class SchengenMap extends Component {
    componentDidMount() {
        // OpenStreetMap world map layer
        let osmWorldMap = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        let tileOsm = new L.TileLayer( osmWorldMap, {
            subdomains: ['a','b','c'],
            attribution: attribution
        });
        // Creating a map
        let initCity = [51.196558, 9.503174]
        let zoomLevel = 6
        this.map = L.map('map', {
            center: initCity,
            zoom: zoomLevel,
            layers: [
                tileOsm,
            ]
        });
        // Creating a pin icon, because the icon which comes by default causes errors
        let greenIcon = new L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png'
        })

        plotSchengenCoutries(this.map)
        plotDefaultCities(this.map)

        // Setting the Markercluster
        require('react-leaflet-markercluster/dist/styles.min.css');

        // Showing Schengen countries boundaries on the map
        function plotSchengenCoutries(map) {
            let Schengen = require('./data/europeHighRes.geo.json')
            L.geoJson(Schengen).addTo(map)
        }

        // Put cities on the map
        function plotDefaultCities(map) {
            let citiesFrance = require('./data/fr.json')
            let citiesGermany = require('./data/de.json')
            let citiesItaly = require('./data/it.json')
            let citiesPoland = require('./data/pl.json')
            let citiesEU = citiesGermany.concat(citiesFrance, citiesItaly, citiesPoland)

            // Putting cities on the map
            Object.entries(citiesEU).forEach(([key, city]) => {
                L.marker(
                    L.latLng(parseFloat(city.lat), parseFloat(city.lng)),
                    {icon: greenIcon}
                ).bindPopup( city.city + ", " + city.country + "<br>" +
                    "<a href={'#'} onClick=addCityToTrip()>Add this city to the trip</a>"
                ).addTo(map)
            })
        }
    }

    cityWalk = [];
    // Add selected city to the trip
    addCityToTrip() {
        console.log('Heyyy')
        this.cityWalk.push('bla')
        this.map.closePopup()
    }


    render() {
        return (
            <div id="map" className="mainMap">
            </div>
        )
    }
}

export default SchengenMap;
