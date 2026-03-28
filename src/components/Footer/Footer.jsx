import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3 className="footer-logo">Sharma Care Clinic</h3>
          <p className="footer-tagline">Trusted Healthcare for Your Family.</p>
          <div className="footer-socials">
            <a href="#" className="social-link">FB</a>
            <a href="#" className="social-link">TW</a>
            <a href="#" className="social-link">IG</a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📍 MP Nagar Zone 2, Bhopal, MP</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@sharmacare.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Sharma Care Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
