// src/componentes/Botones.js
import React from 'react';
import './Botones.css';

function Botones({
  cambiarColorPar,
  cambiarColorImpar,
  mostrarSolo10Elementos,
  mostrarUltimos10Elementos,
  handleBusquedaChange,
  busqueda,
}) {
  return (

    
    <div className="botones">
      <button onClick={cambiarColorPar}>Cambiar Color Pares</button>
      <button onClick={cambiarColorImpar}>Cambiar Color Impares</button>
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
