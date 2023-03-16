import React, { useState } from 'react';
import Header from '../Header/Header';
import './App.scss';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="app">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        handleClickBurgerMenu={openMobileMenu}
        handleCloseMobileMenu={closeMobileMenu}
      />
    </div>
  );
}

export default App;
