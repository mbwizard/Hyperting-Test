import React, { Component } from 'react';
import { Button,FormGroup,Form,Row,Container,Col} from 'reactstrap';
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