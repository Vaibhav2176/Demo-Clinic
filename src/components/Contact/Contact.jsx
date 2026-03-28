import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Near City Hospital, MP Nagar Zone 2, Bhopal, Madhya Pradesh – 462011</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:info@sharmacare.com">info@sharmacare.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Timings</h4>
                <p>Mon–Sat: 10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="contact-map fade-in">
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.12061405022!2d77.42589254999999!3d23.2307524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4276f77833a1%3A0x6a0c0e86b978c33!2sMP%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1711510000000!5m2!1sen!2sin" 
                width="100%" 
                height="350" 
                style={{ border: 0, borderRadius: '20px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
