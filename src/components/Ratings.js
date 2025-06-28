import React from 'react';
import '../Ratings.css';

const Ratings = () => {
  return (
    <section id="ratings" className="ratings-section">
      <div className="ratings-iframe-wrapper">
        <iframe
          src="/google-reviews.html"
          title="Google Reviews"
          width="100%"
          height="500"
          style={{ border: 'none' }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Ratings;
