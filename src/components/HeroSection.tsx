import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Create your will today — simple, secure, and stress-free.
          </h1>
          <p className="hero-subtitle">
            Ensure your peace of mind and your family's future with our easy-to-use will creation service.
          </p>
        </div>
        <div className="hero-illustration">
          <div className="family-illustration">
            <div className="sofa"></div>
            <div className="family-members">
              <div className="person father"></div>
              <div className="person mother"></div>
              <div className="person child1"></div>
              <div className="person child2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
