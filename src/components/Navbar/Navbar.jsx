import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">S</span>
          Sharma Care Clinic
        </Link>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          {isHomePage ? (
            <>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </>
          ) : (
            <li><Link to="/book" onClick={closeMenu}>Appointment</Link></li>
          )}
        </ul>

        <div className="navbar-actions">
          <Link to="/book" className="btn-primary nav-cta" onClick={closeMenu}>
            Book Appointment
          </Link>
          <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
