import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/custom.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achat from './components/Achat';
import Vente from './components/Vente';
import Location from './components/Location';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achat" element={<Achat />} />
          <Route path="/vente" element={<Vente />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
