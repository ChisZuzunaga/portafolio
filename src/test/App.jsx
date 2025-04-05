import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';
import Hero from './components/Hero';
import ProjectDetails from './components/ProjectDetails';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import SpecialPage from './components/SpecialPage'; // Página sin Nav ni Footer

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rutas con Nav y Footer */}
        <Route
          path="/"
          element={
            <MainLayout menuOpen={menuOpen}>
              <Hero />
            </MainLayout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <MainLayout menuOpen={menuOpen}>
              <Portfolio />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout menuOpen={menuOpen}>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout menuOpen={menuOpen}>
              <Contact />
            </MainLayout>
          }
        />

        {/* Rutas sin Nav ni Footer */}
        <Route
          path="/special"
          element={
            <EmptyLayout>
              <SpecialPage />
            </EmptyLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;