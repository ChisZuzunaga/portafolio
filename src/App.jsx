import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav onMenuToggle={setMenuOpen} />
      <div className={`${menuOpen ? 'mt-100px-md-custom' : 'mt-0px-md'} transition-all duration-300`}>
        <Hero />
      </div>
      <Projects />
    </>
  )
}

export default App
