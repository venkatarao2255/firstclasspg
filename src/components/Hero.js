import React from 'react';
import '../Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Navigation */}
      <nav className="hero-nav">
        <div className="logo">First Class PG</div>
        {/* Nav buttons removed as per previous request */}
      </nav>

      {/* Hero Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="fade-in-down">
            Experience Luxury & Comfort at <span>First Class PG</span>
          </h1>
          <p className="fade-in-up">
            Premium hostel accommodation for students & professionals. Safe, stylish, and fully equipped.
          </p>
          <div className="hero-buttons fade-in-delay">
            <a href="#contact" className="hero-button">Contact</a>
            <a href="#gallery" className="hero-button secondary">View Gallery</a>
            <a href="#map" className="hero-button secondary">Location</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
