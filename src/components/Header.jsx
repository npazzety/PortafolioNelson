import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {/* Usamos un <span> para crear el icono con CSS */}
        <span className="hamburger"></span>
      </button>
      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <Link to="/#about" onClick={toggleMenu}>Sobre mí</Link>
        <Link to="/#skills" onClick={toggleMenu}>Habilidades</Link>
        <Link to="/projects" onClick={toggleMenu}>Proyectos</Link>
        <a href="mailto:nelsonpazzety10@gmail.com" onClick={toggleMenu}>Contacto</a>
      </nav>
    </header>
  );
}

export default Header;