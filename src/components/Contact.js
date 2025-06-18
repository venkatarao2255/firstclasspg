import React from 'react';
import '../Contact.css'; // Make sure you have this CSS file linked

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>📞 Contact Information</h2>
    <div className="contact-content">
      <div className="owner-photo">
        <img
          src="https://res.cloudinary.com/domfamgtf/image/upload/v1750082552/anna_bmbcxn.jpg" // Replace with actual image URL
          alt="Owner"
        />
      </div>
      <div className="contact-details">
        <h3>KondalaRao H</h3>
        <p><strong>👨‍💻 About:</strong><br />
          KondalaRao is an experienced IT professional passionate about providing a premium, homely living environment for working individuals. With a strong tech background and attention to detail, he ensures First Class PG runs with top-tier quality and safety.
        </p>
        <p><strong>📱 Mobile:</strong> +91-9595133399</p>
        <p><strong>📱 Mobile:</strong> +91-9603569038</p>
      </div>
    </div>
  </section>
);

export default Contact;
