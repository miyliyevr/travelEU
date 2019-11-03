import React, { Component } from 'react'

class SingleCity extends Component {
    render() {
        const liCities = Object.keys(this.props.cities).map(key => {
            return (
                <li>{this.props.cities[key]}</li>
            )
        })

        return (
            <div>
                <ul>
                    {liCities}
                </ul>
            </div>
        )
    }
}

export default SingleCity
