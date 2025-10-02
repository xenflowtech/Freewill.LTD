import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(4).fill(false));
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  const heroImages = [
    '/hero-1.jpg',
    '/hero-2.jpg',
    '/hero-3.jpg',
    '/hero-4.jpg'
  ];

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const promises = heroImages.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => {
              const newLoaded = [...prev];
              newLoaded[index] = true;
              return newLoaded;
            });
            resolve();
          };
          img.onerror = () => resolve(); // Continue even if image fails
          img.src = src;
        });
      });

      Promise.all(promises).then(() => {
        setImagesLoaded(true);
      });
    };

    preloadImages();
  }, [heroImages]);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length, imagesLoaded]);

  return (
    <section className="hero-section">
      {/* Loading indicator */}
      {!imagesLoaded && (
        <div className="hero-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      
      {/* Background Images */}
      <div className="hero-image-container">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImageIndex ? 'active' : ''} ${loadedImages[index] ? 'loaded' : 'loading'}`}
            style={{
              backgroundImage: loadedImages[index] ? `url(${image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Create your will today — simple, secure, and stress-free.
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
