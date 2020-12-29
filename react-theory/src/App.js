import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <div className="container-content">
          <h1 className="header-title">Hello, World!</h1>
        </div>
        <Car />
        <Car />
      </div>
    );
  }
}

export default App;