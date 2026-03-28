import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Rahul Verma",
    rating: 5,
    text: "Dr. Amit Sharma is a very calm and experienced doctor. The clinic environment is very professional and the treatment was very effective.",
    image: "👨‍💼"
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Very happy with the pediatric care for my child. The staff is friendly and the medicines prescribed worked well. Highly recommended.",
    image: "👩‍💼"
  },
  {
    name: "Ankit Jain",
    rating: 4,
    text: "Efficient diagnostics and very clear explanations. The clinic in MP Nagar is modern and clean. Good experience overall.",
    image: "👨‍⚕️"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title fade-in">What Our Patients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="testimonial-header">
                <span className="testimonial-avatar">{testimonial.image}</span>
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
