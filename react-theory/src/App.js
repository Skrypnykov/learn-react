import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <div className="container-content">
          <h1 className="header-title">{this.state.pageTitle}</h1>

          <input type="text" onChange={this.handleInput} />

          <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

          <Car 
            name={cars[0].name} 
            year={cars[0].year}
            onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
          />
          <Car 
            name={cars[1].name} 
            year={cars[1].year}
            onChangeTitle={this.changeTitleHandler.bind(this, cars[1].name)}
          />
          <Car 
            name={cars[2].name} 
            year={cars[2].year}
            onChangeTitle={this.changeTitleHandler.bind(this, cars[2].name)}
          />
        </div>
      </div>
    );
  }
}

export default App;