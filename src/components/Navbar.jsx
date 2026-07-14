import { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollReveal';
import { SpiderIcon } from './Icons';

/**
 * Fixed navigation bar with glassmorphism effect on scroll.
 * Includes responsive hamburger menu for mobile.
 */
export default function Navbar() {
  const scrolled = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" aria-label="Inicio">
          <SpiderIcon size={22} className="navbar__logo-icon" />
          <span>JR</span>
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <a href="#skills" className="navbar__link" onClick={handleLinkClick}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#project" className="navbar__link" onClick={handleLinkClick}>
              Proyecto
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar__link" onClick={handleLinkClick}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
