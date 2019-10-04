import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">hello
                </p>
            </div>
        );
    }

}

export default Header;
