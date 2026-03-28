import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    title: "Experienced Doctor",
    description: "Highly qualified professionals with decades of collective experience in medical practice.",
    icon: "👨‍⚕️"
  },
  {
    title: "Modern Equipment",
    description: "Equipped with the latest medical technology for accurate diagnosis and effective treatment.",
    icon: "🏗️"
  },
  {
    title: "Patient-Centered Care",
    description: "We prioritize your comfort and well-being, ensuring a personalized healthcare experience.",
    icon: "❤️"
  },
  {
    title: "Easy Appointment",
    description: "Hassle-free booking process through our website or a single phone call.",
    icon: "📅"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <div className="why-container">
          <div className="why-content fade-in">
            <h2 className="why-heading">Why Choose Us?</h2>
            <p className="why-description">We combine medical expertise with a patient-first approach to deliver the best healthcare experience.</p>
            
            <div className="reasons-list">
              {reasons.map((reason, index) => (
                <div key={index} className="reason-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="reason-icon">{reason.icon}</div>
                  <div className="reason-text">
                    <h4 className="reason-title">{reason.title}</h4>
                    <p className="reason-info">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-image fade-in">
              <div className="why-img-placeholder">
                  <img src="/why-us-img.jpg" alt="Modern Equipment" className="why-img" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
