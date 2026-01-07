//Import dipendenze React per funzionamento base
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

//Import dei componenti presenti nella pagina
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomeButtons from './components/HomeButtons.jsx';

//Import delle pagine linkate nella Home del portfolio
import Home from './Home.jsx';
import CV from './pages/CV.jsx';
import Contact from './pages/Contact.jsx';

//Avvio l'app ed imposto il routing per la navigazione tra le pagine in SPA
function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/cv" element ={<CV />} />
      <Route path="/contact" element ={<Conact />} />
    </Routes>
  </Router>
  );
  
}

export default App;
