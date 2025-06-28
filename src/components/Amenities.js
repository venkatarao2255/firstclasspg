import React from 'react';
import { Helmet } from 'react-helmet';
import '../Amenities.css';

const Amenities = () => (
  <>
    <Helmet>
      <title>Amenities at First Class PG Kharadi Pune | Food, WiFi, AC, Gaming</title>
      <meta
        name="description"
        content="Discover all the premium amenities offered at First Class PG in Kharadi Pune — including WiFi, hot water, homely food, washing machine, parking, fridge, gaming zone, and 24/7 caretaker support."
      />
      <meta
        name="keywords"
        content="PG with WiFi Pune, PG with hot water and fridge, hostel with food in Pune, PG with gaming zone in Kharadi, PG with caretaker Pune, PG amenities"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="First Class PG Kharadi Pune" />
    </Helmet>

    <section id="amenities" className="amenities-section">
      <h2 className="amenities-heading">Amenities</h2>
      <p className="intro">We are providing the below amenities!! 👇👇</p>

      <ul className="amenities-list">
        <li>➡️ Wifi system for Internet 🛜 access & security CC cameras 📸📽🎥 👈🏻</li>
        <li>➡️  24hrs hot ➕ cold water 🔥🥶🌊💦!!</li>
        <li>➡️  Aquaguard drinking water 🚰🚰!!</li>
        <li>➡️  Electricity 🔌🔌!!</li>
        <li>➡️  Washing machine 🧺🧺!!</li>
        <li>➡️  Free parking 🅿🅿!!</li>
        <li>➡️  Refrigerator !!</li>
        <li>➡️  Separate locker 🛅 and separate bed 🛏 !!</li>
        <li>➡️  North and South Indian homely 🏘🏘 food 🍽🍱🍽!!</li>
        <li>
          ➡️  Monday to Friday breakfast and dinner 🍽🍚🍝🍜🍲🍛!!<br />
          Saturday & Sunday: breakfast + lunch + dinner!! 👈🏻
        </li>
        <li>
          ➡️  💪 (Sunday dinner: non-veg 🍽🍖🍗, Wednesday: egg 🥚🥚) <br />
          Daily breakfast and dinner include a variety of menus 🥞🍆🥕🫛🥦🍜🍝🧀🍙🍛...
        </li>
        <li>
          🤚🏾 Gas cylinder also provided for self-cooking 🔪🗡😋👩‍🍳🧑🏼‍🍳👨🏼‍🍳!!
        </li>
        <li>
          👨🏻‍💼 24/7 Caretaker available 🏃‍♂
        </li>
        <li>
          🎮 Gaming zone: Pool table, Snooker, Carrom board, Table Tennis 🏓, Football Soccer Table, and many more...
        </li>
      </ul>
    </section>
  </>
);

export default Amenities;
