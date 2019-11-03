import React, { Component } from 'react'
import SingleCity from "./data/SingleCityList";

class CityList extends Component{
    render() {
        return (
            <div>
                <h2 style={{display: this.props.show === "Yes" ? "block" : "none"}}>List of the planned cities :</h2>
                <SingleCity cities={this.props.cityListTravelList} />
                {/*<SingleCity cities={this.state.cityList} />*/}
            </div>
        )
    }
}

export default CityList
