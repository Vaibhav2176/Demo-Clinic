import React from 'react';
import './FAB.css';

const FAB = () => {
  return (
    <div className="fab-container">
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fab fab-whatsapp" title="WhatsApp Us">
        <span>💬</span>
      </a>
      <a href="tel:+919876543210" className="fab fab-call" title="Call Us">
        <span>📞</span>
      </a>
    </div>
  );
};

export default FAB;
