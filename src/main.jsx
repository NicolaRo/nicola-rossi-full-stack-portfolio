import React, { StrictMode } from 'react';
import App from './App.jsx'
import {createRoot} from 'react-dom/client';
import main from '/src/main';
import './components/Navbar.jsx';
import './components/Footer.jsx';
import './components/HomeButtons.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
export default main;