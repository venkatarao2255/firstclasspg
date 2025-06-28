import React from 'react';
import { Helmet } from 'react-helmet';
import '../RoomTypes.css';

const RoomTypes = () => {
  return (
    <>
      <Helmet>
        <title>Room Types | First Class PG Kharadi Pune – Single & Twin Sharing</title>
        <meta
          name="description"
          content="Explore room types at First Class PG Kharadi Pune. Choose between spacious single rooms for privacy or comfortable twin-sharing rooms with all modern amenities. Ideal for boys and girls near EON IT Park and WTC."
        />
        <meta
          name="keywords"
          content="Single room PG Pune, twin sharing PG Kharadi, boys girls PG rooms, rooms near EON IT Park, premium PG room types, PG for students professionals Pune"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="First Class PG Kharadi" />
      </Helmet>

      <section id="room-types" className="room-types-section">
        <h2 className="room-types-heading">Types of Rooms Available</h2>

        <div className="room-cards">
          {/* Double Sharing Room */}
          <div className="room-card">
            <img
              src="https://res.cloudinary.com/domfamgtf/image/upload/v1750051661/what2_ppclwe.jpg"
              alt="Single Sharing Room"
              className="room-image"
            />
            <h3>Single Sharing Room</h3>
            <p>
              A private room offering complete comfort and personal space. Includes a dedicated bed, wardrobe, study desk, and high-speed Wi-Fi—perfect for working professionals who value privacy.
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
    </>
  );
};

export default RoomTypes;
