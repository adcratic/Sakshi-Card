import React from 'react';
import '../App.css';  
import './HeroSection.css';
import { Link } from 'react-scroll';

function HeroSection() {

  return (
    <>
      <div className="hero-container">
          <div className="hero-heading">
              <h1>Imaging-Creating-Printing</h1>
              <p>Our goal is to streamline the merchandise printing process for businesses and ensure that no one has a bad printing experience ever. Our extensive vendor network helps us provide the best in class quality, fast deliveries and the most affordable rates in the market.</p>
          </div>
          <div className="hero-img">
              <img src="images/banner.png" alt="banner" height="500px" width="550px"/>
          </div>
      </div>
      <div className="bottom-scroll">
            <Link to="bottom-scroll" spy={true} smooth={false}><img src="images/scroll.png" alt="Scroll Down" height="50px" width="50px"/></Link>
      </div>
      
    </>
  );
}

export default HeroSection;
