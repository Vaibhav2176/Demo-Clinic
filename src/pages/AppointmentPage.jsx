import React, { useState } from 'react';
import './AppointmentPage.css';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your appointment request for Sharma Care Clinic has been sent. We will contact you soon.');
  };

  return (
    <div className="appointment-page fade-in">
      <div className="container">
        <div className="appointment-header">
          <h1>Book an Appointment</h1>
          <p>Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        <div className="appointment-container">
          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Rahul Verma" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="rahul@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  required 
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select 
                  id="service" 
                  name="service" 
                  required 
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="general">General Consultation</option>
                  <option value="fever">Fever & Infection</option>
                  <option value="diabetes">Diabetes & BP</option>
                  <option value="checkup">Health Checkup</option>
                  <option value="vaccination">Vaccination</option>
                  <option value="diagnostics">Basic Diagnostics</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about your concern..." 
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">Confirm Appointment</button>
          </form>

          <div className="appointment-info">
            <h3>Why Choose Sharma Care?</h3>
            <ul className="info-list">
              <li>Senior Specialist (MBBS, MD)</li>
              <li>Modern Diagnostic Equipment</li>
              <li>Minimal Waiting Time</li>
              <li>Clean and Sanitized Environment</li>
            </ul>
            <div className="emergency-box">
              <h4>Emergency Case?</h4>
              <p>Call us immediately at:</p>
              <a href="tel:+919876543210" className="emergency-num">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
