import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';
import { testimonials } from './Testimonials';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }, 7000); // Change testimonial every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-carousel frost-border">
      <h2 className="carousel-title">testimonies from the damned</h2>
      <p className="carousel-subtitle">those who tasted my perfect creation .....and lived to tell the tale</p>
      <div className="testimonial">
        <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
        <p className="testimonial-author"><strong>{testimonials[currentTestimonial].author}</strong></p>
      </div>
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;