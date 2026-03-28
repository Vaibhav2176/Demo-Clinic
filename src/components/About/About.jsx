import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container container">
        <div className="about-image-container fade-in">
          <div className="about-image-placeholder">
            <img src="/doctor-img.jpg" alt="Dr. Amit Sharma" className="about-img" />
          </div>
        </div>
        <div className="about-content fade-in">
          <h4 className="about-subtitle">Experienced and Trusted Care</h4>
          <h2 className="about-heading">Dr. Amit Sharma</h2>
          <p className="about-qualifications">MBBS, MD - Senior Consultant Physician</p>
          <p className="about-description">
            Dr. Amit Sharma has over 15 years of experience in providing comprehensive healthcare. He is dedicated to patient-centered care, focusing on accurate diagnosis and long-term health management for the entire family.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Cities Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
