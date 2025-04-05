import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const MainLayout = ({ children, menuOpen }) => {
  return (
    <>
      <Nav onMenuToggle={() => {}} />
      <div className={`${menuOpen ? 'mt-100px-md-custom' : 'mt-0px-md'} transition-all duration-300`}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;