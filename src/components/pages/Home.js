import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection';
import Features from '../AboutUs/Features';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Features/>
      <Footer/>
      
    </>
  );
}

export default Home;
