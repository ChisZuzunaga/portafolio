import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectDetails from './components/ProjectDetails';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* Navbar siempre visible */}
      <Nav onMenuToggle={setMenuOpen} />
      <div className={`${menuOpen ? 'mt-100px-md-custom' : 'mt-0px-md'} transition-all duration-300`}>
        <Routes>
          {/* Define las rutas */}
          <Route path="/" element={<Hero />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
