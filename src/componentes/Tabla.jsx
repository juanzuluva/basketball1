// componentes/Tabla.jsx
import React from 'react';
import './tabla.css';


const Tabla = ({ colorFondoPar, colorFondoImpar, mostrarSoloPrimeros10, mostrarSoloUltimos10, busqueda }) => {
  // Definir un array estático de elementos
  const datos = [
    { id: 1, nombre: 'Jugador 1', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 2, nombre: 'Jugador 2', equipo: 'Equipo 2', posicion: 'Posición 2' },
    { id: 3, nombre: 'Jugador 3', equipo: 'Equipo 3', posicion: 'Posición 3' },
    { id: 4, nombre: 'Jugador 4', equipo: 'Equipo 4', posicion: 'Posición 4' },
    { id: 5, nombre: 'Jugador 5', equipo: 'Equipo 5', posicion: 'Posición 5' },
    { id: 6, nombre: 'Jugador 6', equipo: 'Equipo 6', posicion: 'Posición 6' },
    { id: 7, nombre: 'Jugador 7', equipo: 'Equipo 7', posicion: 'Posición 7' },
    { id: 8, nombre: 'Jugador 8', equipo: 'Equipo 8', posicion: 'Posición 8' },
    { id: 9, nombre: 'Jugador 9', equipo: 'Equipo 9', posicion: 'Posición 9' },
    { id: 10, nombre: 'Jugador 10', equipo: 'Equipo 10', posicion: 'Posición 10' },
    { id: 11, nombre: 'Jugador 11', equipo: 'Equipo 11', posicion: 'Posición 11' },
    { id: 12, nombre: 'Jugador 12', equipo: 'Equipo 12', posicion: 'Posición 12' },
    { id: 13, nombre: 'Jugador 13', equipo: 'Equipo 13', posicion: 'Posición 13' },
    { id: 14, nombre: 'Jugador 14', equipo: 'Equipo 14', posicion: 'Posición 14' },
    { id: 15, nombre: 'Jugador 15', equipo: 'Equipo 15', posicion: 'Posición 15' },
    { id: 16, nombre: 'Jugador 16', equipo: 'Equipo 16', posicion: 'Posición 16' },
    { id: 17, nombre: 'Jugador 17', equipo: 'Equipo 17', posicion: 'Posición 17' },
    { id: 18, nombre: 'Jugador 18', equipo: 'Equipo 18', posicion: 'Posición 18' },
    { id: 19, nombre: 'Jugador 19', equipo: 'Equipo 19', posicion: 'Posición 19' },
    { id: 20, nombre: 'Jugador 20', equipo: 'Equipo 20', posicion: 'Posición 20' },
  ];

  let elementosAMostrar = [...datos];

 

  if (mostrarSoloPrimeros10) {
    elementosAMostrar = datos.slice(0, 10);
  } else if (mostrarSoloUltimos10) {
    elementosAMostrar = datos.slice(-10);
  }

  if (busqueda) {
    elementosAMostrar = elementosAMostrar.filter((elemento) =>
      elemento.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Team</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {elementosAMostrar.map((elemento, index) => (
          <tr
            key={elemento.id}
            style={{
              backgroundColor:
                index % 2 === 0 ? colorFondoPar : colorFondoImpar,
            }}
          >
            <td>{elemento.id}</td>
            <td>{elemento.nombre}</td>
            <td>{elemento.equipo}</td>
            <td>{elemento.posicion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
