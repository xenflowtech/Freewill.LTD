import React, { useState, useEffect, useMemo } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const heroImages = useMemo(() => [
    '/hero-1-min.jpg',
    '/hero-2-min.jpg',
    '/hero-3-min.jpg',
    '/hero-4-min.jpg'
  ], []);

  // Preload all images to prevent grey background flash
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          setImagesLoaded(true);
        })
        .catch((error) => {
          console.warn('Some images failed to load:', error);
          setImagesLoaded(true); // Still show the section even if some images fail
        });
    };

    preloadImages();
  }, [heroImages]);

  // Image rotation with smooth transitions
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [heroImages.length, imagesLoaded]);

  return (
    <section className="hero-section">
      {/* Background Images with smooth transitions */}
      <div className="hero-image-container">
        {heroImages.map((imageSrc, index) => (
          <div
            key={imageSrc}
            className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              backgroundRepeat: 'no-repeat',
              opacity: imagesLoaded ? (index === currentImageIndex ? 1 : 0) : 0
            }}
          />
        ))}
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
