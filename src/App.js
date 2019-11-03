import React, { Component } from 'react';
import SchengenMap from './LeafletMap'
import TravelList from "./TravelList";

class App extends Component {
    constructor() {
        super()
        this.state = {
            cityList: {
                '1': 'Turkmenabat'
            }
        }
    }

    addCity = () => {
        this.setState(prevState => ({
            cityList: {...prevState.cityList,  'foo': Math.random()}
        }))
        console.log(this.state)
    }

    render() {
        return (
            <div className="App flex-container">
                <SchengenMap addCity={this.addCity}/>
                <TravelList cityListApp={this.state.cityList}/>
            </div>
        );
    }
}

export default App;
