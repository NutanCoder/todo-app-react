import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSetUp from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppSetUp />
  </React.StrictMode>
);

