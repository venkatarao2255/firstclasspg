import React from 'react';
import '../Hero.css';
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Best PG in Kharadi Pune for Boys and Girls | First Class PG</title>
        <meta
          name="description"
          content="First Class PG in Kharadi Pune offers premium accommodation for boys and girls near EON IT Park, WTC, and GERA. Safe, clean rooms with food, AC, WiFi, and laundry. Book now!"
        />
        <meta
          name="keywords"
          content="PG in Pune, PG in Kharadi, PG near EON IT Park, Boys PG in Pune, Girls hostel in Pune, First Class PG, Hostel in Pune with food, PG near WTC, PG near GERA"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="First Class PG Kharadi" />
      </Helmet>

      <section className="hero-section" id="home">
        {/* Navigation */}
        <nav className="hero-nav">
          <div className="logo">First Class PG</div>
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

            {/* Updated Buttons Layout */}
            <div className="hero-buttons fade-in-delay">
              <a href="#map" className="hero-button">📍 Location</a>
              <a href="#gallery" className="hero-button">🖼️ Gallery</a>
              <a href="#contact" className="hero-button">☎️ Contact</a>
              <a href="#ratings" className="hero-button">🌟 Reviews & Ratings</a>
            </div>

            {/* Scroll Message */}
            <p className="scroll-hint">⬇️ Scroll down to know more about us</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
