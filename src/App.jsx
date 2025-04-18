import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Configuración de i18next
import './App.css';
import Nav from './components/Nav';
import Home_Hero from './components/Home_Hero';
import ProjectDetails from './components/ProjectDetails';
import Portfolio_Hero from './components/Portfolio_Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        {/* Navbar siempre visible */}
        <Nav onMenuToggle={setMenuOpen} />
        <div className={`${menuOpen ? 'mt-100px-md-custom' : 'mt-0px-md'} transition-all duration-300`}>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home_Hero />} />
            <Route path="/Portfolio_hero" element={<Portfolio_Hero />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </I18nextProvider>
  );
}
export default App
