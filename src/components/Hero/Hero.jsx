import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <div className="hero-content fade-in">
          <h1 className="hero-heading">Trusted & Experienced Care for Your Health</h1>
          <p className="hero-description">
            Providing premium healthcare services at Sharma Care Clinic with a focus on patient comfort and modern medical practices. Our dedicated team is here for your well-being.
          </p>
          <div className="hero-btns">
            <Link to="/book" className="btn-primary">Book Appointment</Link>
            <a href="tel:+919876543210" className="btn-secondary">Call Now</a>
          </div>
        </div>
        <div className="hero-image-container fade-in">
          <div className="hero-image-placeholder">
             <img src="/hero-img.jpg" alt="Sharma Care Clinic" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
