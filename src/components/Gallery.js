import React from 'react';
import '../Gallery.css';

const Gallery = () => (
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
        <div className="gallery-caption">Triple Sharing Room</div>
      </div>

      {/* Image 3 */}
      <div className="gallery-item">
        <img
          src="https://res.cloudinary.com/domfamgtf/image/upload/v1750048740/WhatsApp_Image_2025-06-16_at_09.32.39_bd53b41e_knllft.jpg"
          alt="Lobby"
          className="gallery-media"
        />
        <div className="gallery-caption">Premium Lobby</div>
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
          <source src="https://res.cloudinary.com/domfamgtf/video/upload/v1750222427/WhatsApp_Video_2025-06-16_at_11.22.55_33dbb95d_ey24qk.mp4 " type="video/mp4" />
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
);

export default Gallery;
