import React from 'react';
import '../App.css';  
import './HeroSection.css';
import { Link } from 'react-scroll';

function HeroSection() {

  return (
    <>
      <div className="hero-container">
          <div className="hero-heading">
              {/* <div className="hero-subtitle">PREMIUM DESIGNS</div> */}
              <h1>Imaging-Creating-Printing</h1>
              <p>A single platform to save legal teams loads of time. Create serve requests across all 50 states and follow progress with live updates, keeping track of everything along the way.</p>
          </div>
          <div className="hero-img">
              <img src="images/banner.png" alt="banner" height="500px" width="550px"/>
          </div>
      </div>
      <div className="bottom-scroll">
            <Link to="bottom-scroll" spy={true} smooth={true}><img src="images/scroll.png" alt="Scroll Down" height="50px" width="50px"/></Link>
      </div>
      
    </>
  );
}

export default HeroSection;
