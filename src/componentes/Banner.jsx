// src/componentes/Banner.js
//import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div>
      {/* Banner negro */}
      <div className="banner-negro"></div>
 
      {/* Banner naranja */}
      <div className="banner-naranja">
        {/* Logo en el banner naranja */}
        <img
          src="/logo.png" // Reemplaza con la ruta correcta de tu logo
          alt="Logo"
          className="logo-en-banner"
        />
        <div className="texto-centrado">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
