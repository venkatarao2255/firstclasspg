import React from 'react';
import { Helmet } from 'react-helmet';
import '../Ratings.css';

const Ratings = () => {
  return (
    <>
      <Helmet>
        <title>Reviews & Ratings | First Class PG Kharadi Pune</title>
        <meta
          name="description"
          content="See what our residents have to say! Check verified Google reviews and ratings of First Class PG in Kharadi Pune. Trusted PG near EON IT Park and WTC."
        />
        <meta
          name="keywords"
          content="PG reviews Pune, First Class PG ratings, Google reviews PG Kharadi, top rated PG near EON IT Park, best PG Pune feedback, boys girls PG reviews"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="First Class PG Kharadi" />
      </Helmet>

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
    </>
  );
};

export default Ratings;
