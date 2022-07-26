import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { PaginaPrincipal } from './components/PaginaPrincipal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginaPrincipal/>
  </React.StrictMode>
);

reportWebVitals();
