import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends Component {
    componentDidMount() {
        setTimeout(() => {
            // OpenStreetMap world map layer
            let osmWorldMap = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            let tileOsm = new L.TileLayer( osmWorldMap, {
                subdomains: ['a','b','c'],
                attribution: attribution
            });
            //create a map
            let initCity = [51.196558, 9.503174]
            let zoomLevel = 6
            this.map = L.map('map', {
                center: initCity,
                zoom: zoomLevel,
                layers: [
                    tileOsm,
                ]
            });
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
