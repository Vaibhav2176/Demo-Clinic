import React from 'react';
import './Services.css';

const services = [
  {
    title: "General Consultation",
    description: "Detailed health checkups and personalized medical advice for routine health concerns.",
    icon: "🩺"
  },
  {
    title: "Fever & Infection",
    description: "Expert treatment for seasonal fevers, infections, and common seasonal ailments.",
    icon: "🤒"
  },
  {
    title: "Diabetes & BP",
    description: "Specialized management plans for blood pressure and diabetes monitoring and care.",
    icon: "❤️"
  },
  {
    title: "Health Checkups",
    description: "Comprehensive full-body checkup packages for preventive health awareness.",
    icon: "📋"
  },
  {
    title: "Vaccination",
    description: "Timely vaccinations for children and adults to protect against preventable diseases.",
    icon: "💉"
  },
  {
    title: "Basic Diagnostics",
    description: "Fast and accurate essential laboratory tests using advanced medical technology.",
    icon: "🔬"
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title fade-in">Our Services</h2>
        <p className="section-subtitle fade-in">Providing trusted medical services tailored to the needs of our local community.</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
              <button className="service-link">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
