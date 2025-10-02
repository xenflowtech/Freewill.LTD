import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/hero-1-min.jpg',
    '/hero-2-min.jpg',
    '/hero-3-min.jpg',
    '/hero-4-min.jpg'
  ];

  // Simplified image rotation - no preloading to reduce lag
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Slower rotation to reduce lag

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
            Create Your Will Today — Simple & Secure
          </h1>
          <p className="hero-subtitle">
            Ensure your family's future with our easy will creation service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
