import React from 'react';
import { Helmet } from 'react-helmet';
import '../Gallery.css';

const Gallery = () => (
  <>
    <Helmet>
      <title>Gallery | First Class PG Kharadi Pune – Rooms, Washroom, Video Tour</title>
      <meta
        name="description"
        content="Explore our PG gallery – view images and videos of rooms, washrooms, and common areas at First Class PG Kharadi Pune. See what makes us a premium PG near EON IT Park."
      />
      <meta
        name="keywords"
        content="PG photos Pune, First Class PG room images, Kharadi PG gallery, PG room tour video, hostel washroom clean Pune, boys girls PG photo, PG with common area video"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="First Class PG Kharadi" />
    </Helmet>

    <section id="gallery" className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {/* Image 1 */}
        <div className="gallery-item">
          <img
            src="https://res.cloudinary.com/domfamgtf/image/upload/v1750127178/KK2_icjaj2.jpg"
            alt="Double Sharing Room"
            className="gallery-media"
          />
          <div className="gallery-caption">Double Sharing Room</div>
        </div>

        {/* Image 2 */}
        <div className="gallery-item">
          <img
            src="https://res.cloudinary.com/domfamgtf/image/upload/v1750051661/what2_ppclwe.jpg"
            alt="Triple Sharing Room"
            className="gallery-media"
          />
          <div className="gallery-caption">Single Sharing Room</div>
        </div>

        {/* Image 3 */}
        <div className="gallery-item">
          <img
            src="https://res.cloudinary.com/domfamgtf/image/upload/v1751090737/washroom_ghlnvh.jpg"
            alt="Lobby"
            className="gallery-media"
          />
          <div className="gallery-caption">Washroom</div>
        </div>

        {/* Video 1 */}
        <div className="gallery-item">
          <video className="gallery-media" controls>
            <source src="https://res.cloudinary.com/domfamgtf/video/upload/v1750222455/WhatsApp_Video_2025-06-16_at_11.22.54_f5a66d9a_qgrlc7.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-caption">Hygienic Washrooms</div>
        </div>

        {/* Video 2 */}
        <div className="gallery-item">
          <video className="gallery-media" controls>
            <source src="https://res.cloudinary.com/domfamgtf/video/upload/v1750222427/WhatsApp_Video_2025-06-16_at_11.22.55_33dbb95d_ey24qk.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-caption">Common Area</div>
        </div>

        {/* Video 3 */}
        <div className="gallery-item">
          <video className="gallery-media" controls>
            <source src="https://res.cloudinary.com/domfamgtf/video/upload/v1750222443/WhatsApp_Video_2025-06-16_at_11.22.58_60889d42_engi0i.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gallery-caption">Room Tour</div>
        </div>
      </div>
    </section>
  </>
);

export default Gallery;
