import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }
 
  clearClick()
  {
    localStorage.clear("frasi_salvate");
    window.location.reload();
  }

  handleClick () {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => this.setState({frase: response.data.value}))
      .then(result => this.onSetResult());
  }

  onSetResult = () => {
    var frasi=[];
    if(localStorage.getItem("frasi_salvate")!==null)
    frasi.push(localStorage.getItem("frasi_salvate"));
    frasi.push(this.state.frase);
    localStorage.setItem("frasi_salvate", frasi);
    window.location.reload();
  }
    

  render () {
    const data =[];
    data.pop(localStorage.getItem("frasi_salvate"));
    return (
      
      <div>
        <button className='button' onClick={this.handleClick}>Estrai frase</button>
        <button className='button' onClick={this.clearClick}>Cancella tutto</button>
        <p>{localStorage.getItem("frasi_salvate")}</p>
      </div>
    )
  }
}
export default App