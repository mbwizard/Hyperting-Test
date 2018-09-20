import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }



  handleClick () {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => this.setState({frase: response.data.value}))
      localStorage.setItem("memoria", this.state.frase);
    }

  render () {
    return (
      <div>
        <button className='button' onClick={this.handleClick}>Estrai frase</button>
        <p>{localStorage.getItem("memoria")}</p>
      </div>
    )
  }
}
export default App