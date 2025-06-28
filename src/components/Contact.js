import React from 'react';
import '../Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>📞 Contact Information</h2>
    <div className="contact-content">
      <div className="owner-photo">
        <img
          src="https://res.cloudinary.com/domfamgtf/image/upload/v1750082552/anna_bmbcxn.jpg"
          alt="Owner"
        />
      </div>
      <div className="contact-details">
        <h3>KondalaRao H</h3>
        <p><strong>👨‍💻 About:</strong><br />
          KondalaRao is an experienced IT professional passionate about providing a premium, homely living environment for working individuals. With a strong tech background and attention to detail, he ensures First Class PG runs with top-tier quality and safety.
        </p>
        <div className="call-buttons">
          <a href="tel:+919595133399" className="call-btn">📞 Call: 95951 33399</a>
          <a href="tel:+919603569038" className="call-btn">📞 Call: 96035 69038</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
