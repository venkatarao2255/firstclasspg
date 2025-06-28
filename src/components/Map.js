import React from 'react';
import { Helmet } from 'react-helmet';
import '../Map.css';

const Map = () => (
  <>
    <Helmet>
      <title>Location | First Class PG Kharadi Pune – Near EON IT Park & WTC</title>
      <meta
        name="description"
        content="Find the exact location of First Class PG in Kharadi Pune. Situated near EON IT Park, WTC, and GERA. View on Google Maps and reach us easily."
      />
      <meta
        name="keywords"
        content="First Class PG location, PG near EON IT Park Pune, PG near WTC Pune, Raja Ram Patil Nagar PG, Kharadi map PG, Boys girls hostel map Pune"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="First Class PG Kharadi" />
    </Helmet>

    <section id="map" className="map-section">
      <h2>📍 Our Location</h2>
      <p className="map-address">
        First Class PG EON 2,<br />
        Raja Ram Patil Nagar, Lane No 11,<br />
        Near International Tech Park, WTC, Gera, Pune – 411014
      </p>
      <div className="map-container">
        <iframe
          title="First Class PG Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6466252866773!2d73.9519674!3d18.5586884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e35be4b213%3A0x95f1fcd2219f2ee4!2sFirst%20class%20pg%20eon!5e0!3m2!1sen!2sin!4v1718549069179!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </>
);

export default Map;
