import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import HighLights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App">

      <Element name="featured">
        <Header />
      </Element>

      <Element name="highlights">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VenueNfo />
      </Element>

      <Element name="highlights">
        <HighLights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />

    </div>
  );
}

export default App;
