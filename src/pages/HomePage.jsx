import React from 'react';
import './HomePage.css';
import TransitionBand from './separation-band';
import InfiniteIceCreamScroll from './infinitescroll';

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

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Flavors</h2>
          <div className="flavors-grid">
            <div className="flavor-card frost-border">
              <div className="flavor-content">
                <h3>Frostmourne Swirl</h3>
                <p>A chilling blend of dark chocolate and mint, so cold it will steal your soul.</p>
              </div>
            </div>
            <div className="flavor-card frost-border">
              <div className="flavor-content">
                <h3>Plagueberry Sorbet</h3>
                <p>A tart and deadly burst of cursed berries, served with a side of despair.</p>
              </div>
            </div>
            <div className="flavor-card frost-border">
              <div className="flavor-content">
                <h3>Arctic Oblivion</h3>
                <p>Vanilla ice cream infused with shards of caramelized ice, for those who dare to taste eternity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catalogue-section">
        <div className="container">
          <h2 className="section-title">Catalogue</h2>
          <InfiniteIceCreamScroll />
        </div>
      </section>
    </div>
  );
}

export default HomePage;