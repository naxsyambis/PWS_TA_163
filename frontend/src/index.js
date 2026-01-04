import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// Mencari elemen dengan id 'root' di index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Merender komponen utama aplikasi
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);