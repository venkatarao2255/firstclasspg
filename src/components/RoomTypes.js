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
            src="https://res.cloudinary.com/domfamgtf/image/upload/v1750127178/KK2_icjaj2.jpg"
            alt="Double Sharing Room"
            className="room-image"
          />
          <h3>Double Sharing Room</h3>
          <p>
            Comfortable room shared by two individuals. Includes personal bed, locker, desk, and high-speed Wi-Fi.
          </p>
        </div>

        {/* Triple Sharing Room */}
        <div className="room-card">
          <img
            src="https://res.cloudinary.com/domfamgtf/image/upload/v1750223570/WhatsApp_Image_2025-06-16_at_11.23.02_2bb2acac_q3fges.jpg"
            alt="Triple Sharing Room"
            className="room-image"
          />
          <h3>Triple Sharing Room</h3>
          <p>
            Spacious room shared by three. Includes individual beds, wardrobes, shared study space, and full access to amenities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomTypes;
