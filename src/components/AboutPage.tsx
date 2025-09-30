import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        <div className="about-container">
          {/* Mission Section */}
          <section className="mission-section">
            <div className="mission-label">Our Mission</div>
            <h1 className="about-title">About Us</h1>
            <p className="mission-text">
              At Freewill.ltd, we believe that planning for the future should be accessible and straightforward for everyone. Our mission is to provide peace of mind and security for families by simplifying the process of creating wills and other essential legal documents.
            </p>
          </section>

          {/* Our Story Section */}
          <section className="story-section">
            <div className="story-content">
              <div className="story-text">
                <h2 className="section-title">Our Story</h2>
                <p className="section-text">
                  Freewill.ltd was founded by a team of legal experts and technology enthusiasts who recognized the need for a more accessible and affordable way to create wills. We saw that many people were putting off this important task due to complexity and cost, leaving their families vulnerable. Our goal was to create a solution that empowers individuals to take control of their future, with clear guidance and support every step of the way.
                </p>
              </div>
              <div className="banner-ad">
                <div className="ad-placeholder">Banner Ad Placeholder</div>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="values-section">
            <div className="values-content">
              <div className="values-text">
                <h2 className="section-title">Our Values</h2>
                <ul className="values-list">
                  <li className="value-item">
                    <span className="checkmark">✓</span>
                    <span className="value-text">Accessibility: Making legal planning accessible to everyone.</span>
                  </li>
                  <li className="value-item">
                    <span className="checkmark">✓</span>
                    <span className="value-text">Simplicity: Simplifying complex legal processes.</span>
                  </li>
                  <li className="value-item">
                    <span className="checkmark">✓</span>
                    <span className="value-text">Security: Ensuring the highest standards of data protection.</span>
                  </li>
                  <li className="value-item">
                    <span className="checkmark">✓</span>
                    <span className="value-text">Support: Offering personalized guidance.</span>
                  </li>
                  <li className="value-item">
                    <span className="checkmark">✓</span>
                    <span className="value-text">Peace of Mind: Helping you secure your family's future.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="team-section">
            <div className="team-content">
              <div className="team-text">
                <h2 className="section-title">Our Team</h2>
                <p className="section-text">
                  Our team consists of experienced legal professionals, software developers, and customer support specialists who are passionate about making a difference. We work together to ensure our platform is not only technically sound but also legally accurate and user-focused. We are dedicated to continuously improving our services and providing the best possible experience.
                </p>
              </div>
              <div className="banner-ad">
                <div className="ad-placeholder">Banner Ad Placeholder</div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
