import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServiceCards from './ServiceCards';
import Footer from './Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ServiceCards />
      <Footer />
    </div>
  );
};

export default HomePage;
