/**
 * Hyperting Test
 * @author Benedetti Marco <marco.benedetti.g@gmail.com>
 */
import React, { Component } from 'react';//import dei componenti di react
import { Button,FormGroup,Form,Row,Container,Col} from 'reactstrap';//import dei componenti di reactstrap
import './App.css';
import axios from 'axios'//import della libreria Axios
/**
 * Classe App
 * @class
 */
class App extends Component {//inizializzazione classe di default
  constructor () {
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)//binding funzione "handleClick" per abilitare 'this'
  }
 /**
 * Funzione per cancellare il localstorage
 * @function clearClick
 */
  clearClick()
  {
    localStorage.clear("frasi_salvate");//clear del localstorage
    window.location.reload();//reload pagina
  }

/**
 * Funzione per avviare il fetch
 * @function handleClick
 */
  handleClick () {
    axios.get('https://api.chucknorris.io/jokes/random')//fetch api
      .then(response => this.setState({frase: response.data.value}))//salvataggio frase
      .then(result => this.onSetResult());//chiamata ad avvenuto fetch
  }
/**
 * Funzione di avvenuto "fetching"
 * @function onSetResult
 * @this handleClick
 */
  onSetResult = () => {
    var frasi=[];//inizializzazione var di appoggio
    if(localStorage.getItem("frasi_salvate")!==null)
    frasi.push(localStorage.getItem("frasi_salvate"));//salvataggio frasi precedenti
    frasi.push(this.state.frase);//inserimento nuova frase
    localStorage.setItem("frasi_salvate", frasi);//salvataggio in memoria di tutte le frasi
    window.location.reload();
  }
  /**
 * Render del risultato
 * @function render
 */  
  render () {
    return (
      <Form>
        <FormGroup>
        <Container>
        <Row>
        <Col xs="6"><Button color="primary" onClick={this.handleClick}>Estrai frase</Button></Col>
        <Col xs="6"><Button color="danger" onClick={this.clearClick}>Cancella tutto </Button></Col>
        </Row>
        <Row>
       <Col xs="6"><p>{localStorage.getItem("frasi_salvate")}</p></Col>
        </Row>
        </Container>
        </FormGroup>
        </Form>
    )
  }
}
export default App