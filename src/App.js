import logo from './imagenes/logo.png';
import './App.css';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador';
import React from 'react';


class App extends React.Component{

  constructor(){
    super();
    this.state ={
      numClick: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({numClick})=>({numClick: numClick + 1}));

  }

  reiniciarContador()   {
    this.setState({numClick: 0});
  }


  render(){
    return (
      <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={logo} alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClick = {this.state.numClick} />
        <Boton texto = 'click' esBotonDeClic={true} manejarClic={this.manejarClic}/>
        <Boton texto = 'reiniciar'esBotonDeClic={false} manejarClic={this.reiniciarContador}/>
      </div>
    </div>

    )
  }
}

export default App;
