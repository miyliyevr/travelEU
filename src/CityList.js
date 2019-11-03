import React, { Component } from 'react'

class CityList extends Component{
    render() {
        return (
            <div>
                <h2 style={{display: this.props.show === "Yes" ? "block" : "none"}}>List of the planned cities :</h2>
            </div>
        )
    }
}

export default CityList
