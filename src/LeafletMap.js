import React, { Component } from 'react'
import {Map, TileLayer, Marker, Popup, GeoJSON, Polyline} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

class SchengenMap extends Component {
    constructor() {
        super()
        this.state = { //Ansbach
            lat: 49.3004,
            lng: 10.5719,
            zoom: 6
        }
        this.addToCityList = this.addToCityList.bind(this)

        /*Bug fix for invisible markers*/
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        });
    }

    addToCityList() {
        this.setState(prevState => {
            return {
                lat: prevState.lat,
                lng: prevState.lng,
                zoom: prevState.zoom+1
            }
        })
        console.log(this.state)
    }

    render() {
        const initCity = [this.state.lat, this.state.lng]
        const osmWorldMap = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        const Schengen = require('./data/europeHighRes.geo.json')

        /*
         * Prepare cities as markers on the map
         * City JSON data are from
         * https://simplemaps.com/data/de-cities
         * https://simplemaps.com/data/fr-cities
         * etc.
         */
        let citiesEU = []
        // const geoJsonFiles = ['fr.json', 'de.json', 'it.json', 'pl.json']
        const geoJsonFiles = ['myCustomList.json']
        for (let i = 0; i < geoJsonFiles.length; i++) {
            let country = require('./data/' + geoJsonFiles[i])
            citiesEU.push(...country)
        }

        const {addCity} = this.props;
        const cityMarkers = citiesEU.map(city => {
            return (
                <Marker position={[city.lat, city.lng]} key={`${city.city}_${city.lat}_${city.lng}_marker`}>
                    <Popup key={`${city.city}_${city.lat}_${city.lng}_popup`}>
                        {`${city.city}, ${city.country}`}
                        <br/>
                        <a href={'#'}
                           onClick={addCity}
                           id={`${city.lat}_${city.lng}`}
                           name={`${city.city}, ${city.country}`}>
                            Add this city to the trip
                        </a>
                    </Popup>
                </Marker>
            )
        })

        return (
            <Map center={initCity} zoom={this.state.zoom}>
                <TileLayer
                    url={osmWorldMap}
                    attribution={attribution}
                />
                {/* Show boundaries of Schengen countries on the map */}
                <GeoJSON data={Schengen}/>
                {/* Plot city markers on the map */}
                {cityMarkers}
                <Polyline
                    positions={this.props.polilineList}
                    color={'green'}
                />
            </Map>
        )
    }
}

export default SchengenMap
