import React, { Component } from 'react'

class CityList extends Component{
    render() {
        const liCities = Object.keys(this.props.cityListTravelList).map(key => {
            return (
                <li key={this.props.cityListTravelList[key]}>{this.props.cityListTravelList[key]}</li>
            )
        })

        return (
            <div>
                <h2 style={{display: this.props.show === "Yes" ? "block" : "none"}}>List of the planned cities :</h2>
                <ul>
                    {liCities}
                </ul>
            </div>
        )
    }
}

export default CityList
