import React from 'react';
import '../About.css';

const About = () => (
  <section id="about" className="about-section">
    <h2 className="about-heading">About Us</h2>
    
    <div className="about-content">
      <img
        src="https://res.cloudinary.com/domfamgtf/image/upload/v1750051785/kk_qkjxpn.jpg"
        alt="First Class PG"
        className="about-image"
      />
      <div className="about-text">
        <p>
          Welcome to <strong>First Class PG</strong>, your home away from home. Designed for students and working professionals, our facility offers a luxurious and peaceful environment.
        </p>
        <p>
          We provide spacious, well-ventilated rooms with attached washrooms, high-speed Wi-Fi, nutritious meals, and modern laundry facilities. The premises are monitored 24/7 for your safety.
        </p>
        <p>
          Located in a prime area with easy access to colleges, IT parks, and transport hubs — First Class PG is where comfort meets convenience.
        </p>
      </div>
    </div>
  </section>
);

export default About;
