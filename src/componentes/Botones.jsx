// src/componentes/Botones.js
import React from 'react';
import './Botones.css';

function Botones ({
  cambiarColorPar,
  cambiarColorImpar,
  mostrarSolo10Elementos,
  mostrarUltimos10Elementos,
  handleBusquedaChange,
  busqueda,
}) {
  return (

    
    <div className="botones">
      <button onClick={cambiarColorImpar}>Pintar pares</button>
      <button onClick={cambiarColorPar}>pintar impares</button>
      <button onClick={mostrarSolo10Elementos}>
        Mostrar Solo 10
      </button>
      <button onClick={mostrarUltimos10Elementos}>
        Mostrar Ultimos 10
      </button>

      
    </div>
  );
}

export default Botones;
