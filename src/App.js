import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import RoomTypes from './components/RoomTypes';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App font-sans bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Amenities />
      <RoomTypes/>
      <Gallery/>
      <Map/>
      <Contact />
  
    </div>
  );
}

export default App;
