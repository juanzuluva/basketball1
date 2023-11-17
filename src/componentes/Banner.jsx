// src/componentes/Banner.js
import React from 'react';

function Banner() {
  return (
    <div>
      {/* Banner negro */}
      <div className="banner banner-negro"></div>

      {/* Banner naranja */}
      <div className="banner banner-naranja">
        {/* Logo en el banner naranja */}
        <img
          src="/logo.png" // Reemplaza con la ruta correcta de tu logo
          alt="Logo"
          className="logo-en-banner"
        />
        <div className="texto-centrado">
          <p>Autor: Juan Pablo Zuluaga. Programación IV, Proyecto final.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
