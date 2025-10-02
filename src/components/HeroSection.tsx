import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/hero-1.jpg',
    '/hero-2.jpg',
    '/hero-3.jpg',
    '/hero-4.jpg'
  ];

  // Simplified image rotation - no preloading to reduce lag
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Slower rotation to reduce lag

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Simplified Background Image */}
      <div className="hero-image-container">
        <div
          className="hero-image active"
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Create Your Will Today — Simple, Secure, And Stress-Free.
          </h1>
          <p className="hero-subtitle">
            Ensure your peace of mind and your family's future with our easy-to-use will creation service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
