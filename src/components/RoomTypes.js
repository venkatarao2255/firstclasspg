import React from 'react';
import '../RoomTypes.css';

const RoomTypes = () => {
  return (
    <section id="room-types" className="room-types-section">
      <h2 className="room-types-heading">Types of Rooms Available</h2>

      <div className="room-cards">
        {/* Double Sharing Room */}
        <div className="room-card">
          <img
            src="https://res.cloudinary.com/domfamgtf/image/upload/v1750051661/what2_ppclwe.jpg"
            alt="Twin Sharing Room"
            className="room-image"
          />
          <h3>Single Sharing Room</h3>
          <p>
            A private room offering complete comfort and personal space. Includes a dedicated bed, wardrobe, study desk, and high-speed Wi-Fi,perfect for working professionals who value privacy.
          </p>
        </div>

        {/* Triple Sharing Room */}
        <div className="room-card">
          <img
            src="https://res.cloudinary.com/domfamgtf/image/upload/v1750127178/KK2_icjaj2.jpg"
            alt="Twin Sharing Room"
            className="room-image"
          />
          <h3>Twin Sharing Room</h3>
          <p>
           Designed for two residents, this room provides ample space and comfort with individual beds, storage units, a shared study area, and seamless access to all modern amenities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomTypes;
