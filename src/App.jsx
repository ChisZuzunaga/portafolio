import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home_Hero from './components/Home_Hero';
import ProjectDetails from './components/ProjectDetails';
import Portfolio_Hero from './components/Portfolio_Hero';
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
          <Route path="/" element={<Home_Hero />} />
          <Route path="/Portfolio_hero" element={<Portfolio_Hero />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App
