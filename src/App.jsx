// src/App.js
import { useState } from 'react';
import Tabla from './componentes/Tabla';
import Banner from './componentes/Banner';
import Botones from './componentes/Botones';
import './App.css';


function App() {
  const [colorFondoPar, setColorFondoPar] = useState('white');
  const [colorFondoImpar, setColorFondoImpar] = useState('white');
  const [mostrarSoloPrimeros10, setMostrarSoloPrimeros10] = useState(false);
  const [mostrarSoloUltimos10, setMostrarSoloUltimos10] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const cambiarColorPar = () => {
    setColorFondoPar(colorFondoPar === 'white' ? 'grey' : 'white');
  };

  const cambiarColorImpar = () => {
    setColorFondoImpar(colorFondoImpar === 'white' ? 'grey' : 'white');
  };

  const mostrarSolo10Elementos = () => {
    setMostrarSoloPrimeros10(!mostrarSoloPrimeros10);
    setMostrarSoloUltimos10(false);
  };

  const mostrarUltimos10Elementos = () => {
    setMostrarSoloUltimos10(!mostrarSoloUltimos10);
    setMostrarSoloPrimeros10(false);
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Roster */}
      <div className="roster">       Roster</div>

      {/* Buscador */}
 <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={handleBusquedaChange}
        />
      </div>
      {/* Botones */}
      <Botones
        cambiarColorPar={cambiarColorPar}
        cambiarColorImpar={cambiarColorImpar}
        mostrarSolo10Elementos={mostrarSolo10Elementos}
        mostrarUltimos10Elementos={mostrarUltimos10Elementos}
        handleBusquedaChange={handleBusquedaChange}
        busqueda={busqueda}
      />

      {/* Contenido de la aplicación */}
      <div className="contenido">
        {/* Tabla de Elementos */}
        <div className="tabla-container">
          <h1></h1>
          <Tabla
            colorFondoPar={colorFondoPar}
            colorFondoImpar={colorFondoImpar}
            mostrarSoloPrimeros10={mostrarSoloPrimeros10}
            mostrarSoloUltimos10={mostrarSoloUltimos10}
            busqueda={busqueda}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

