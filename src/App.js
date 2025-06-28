import React from 'react';
import { Helmet } from "react-helmet";

import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import RoomTypes from './components/RoomTypes';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Contact from './components/Contact';
import Ratings from './components/Ratings';

function App() {
  return (
    <div className="App font-sans bg-white dark:bg-gray-900">
      <Helmet>
        <title>First Class PG – Best PG in Kharadi Pune for Boys & Girls</title>
        <meta
          name="description"
          content="Looking for a PG near EON IT Park Pune? First Class PG offers top-quality rooms with food, WiFi, AC, and homely comfort for boys and girls. Book now!"
        />
        <meta name="keywords" content="PG in Pune, PG near EON IT Park, Boys PG in Kharadi, Girls PG in Kharadi, First Class PG, hostel in Pune" />
        <meta name="author" content="First Class PG" />
        <link rel="canonical" href="https://firstclasspg.in" />
      </Helmet>

      <Hero />
      <About />
      <Amenities />
      <RoomTypes />
      <Gallery />
      <Map />
      <Ratings />
      <Contact />
    </div>
  );
}

export default App;
