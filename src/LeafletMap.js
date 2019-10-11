import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './data/europeHighRes.geo.json';
import 'leaflet/dist/images/marker-icon.png'

class Map extends Component {
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
        // Importing the map of Schengen cuntries and their cities
        let Schengen = require('./data/europeHighRes.geo.json')
        let citiesFrance = require('./data/fr.json')
        let citiesGermany = require('./data/de.json')
        let citiesItaly = require('./data/it.json')
        let citiesPoland = require('./data/pl.json')
        let citiesEU = citiesGermany.concat(citiesFrance, citiesItaly, citiesPoland)
        // Putting countries and cities on the map
        L.geoJson(Schengen).addTo(this.map)
        Object.entries(citiesEU).forEach(([key, city]) => {
            L.marker(
                L.latLng(parseFloat(city.lat), parseFloat(city.lng)),
                {icon: greenIcon}).addTo(this.map)
        })

    }

    render() {
        return (
            <div id="map" style={{width: '100%',height: '800px'}}>

            </div>
        )
    }
}

export default Map;
