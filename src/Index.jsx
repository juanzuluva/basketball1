// src/App.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
