import React from 'react';
import './HomePage.css';
import TransitionBand from './separation-band';
import UnifiedCatalogue from '../components/UnifiedCatalogue';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">The Frozen Throne of Flavor</h1>
          <p className="hero-subtitle">A frozen wasteland of beauty and terror</p>
          <button className="frost-button">Taste the Chill</button>
        </div>
        <div className="frost-mist"></div>
        <div className="icicles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="icicle"
              style={{
                left: `${i * 5 + Math.random() * 5}%`,
                height: `${30 + Math.random() * 70}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      <TransitionBand />

      <UnifiedCatalogue />

      <section className="testimonials-section">
        <div className="container">
          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  );
}

export default HomePage;