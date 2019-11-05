import React, { Component } from 'react'

class RoutedTravelList extends Component {
    render(){
        const liRoutedCities = Object.keys(this.props.routedCityList).map(
            index => {
                return (
                    <li key={`${index}_routedCity`}>
                        {parseInt(index, 10) + 1 + '. '}
                        {this.props.routedCityList[index]}
                    </li>
                )
            }
        )

        return (
            <div id="RoutedTravelList"
                 style={{display: this.props.show === "Yes" ? "block" : "none"}}>
                <h2>List of cities by order:</h2>
                <ul>
                    {liRoutedCities}
                </ul>
            </div>
        )
    }
}

export default RoutedTravelList
