import logo from './imagenes/logo.png';
import './App.css';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClick, setNumClick] = useState(0);

  const manejarClic=()=>{
      setNumClick(numClick + 1);

  };

  const reiniciarContador =()=>{
    setNumClick(0);

  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={logo} alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClick = {numClick} />
        <Boton texto = 'click' esBotonDeClic={true} manejarClic={manejarClic}/>
        <Boton texto = 'reiniciar'esBotonDeClic={false} manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
