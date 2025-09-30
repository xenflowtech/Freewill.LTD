import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './WillTemplatePage.css';

const WillTemplatePage: React.FC = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    // TODO: Implement actual print functionality
    console.log('Printing will template...');
    // Navigate to congratulations page after printing
    navigate('/congratulations');
  };

  return (
    <div className="will-template-page">
      <Header />
      <main className="will-template-main">
        <div className="will-template-container">
          {/* Main Content Section */}
          <section className="download-section">
            <h1 className="download-title">Download Your Free Will Template</h1>
            <p className="download-description">
              Secure your family's future with our straightforward will template. This is a blank, watermarked Word document, ready for you to fill out at your own pace.
            </p>
            <button className="download-button" onClick={handlePrint}>
              <span className="download-icon">🖨️</span>
              Print the Blank Will Template
            </button>
          </section>

          {/* Ad Placeholders Section */}
          <section className="ads-section">
            <div className="ads-grid">
              <div className="ad-placeholder">
                <div className="ad-content">
                  <div className="ad-text">
                    <span className="ad-title">Banner Ad Placeholder</span>
                    <span className="ad-subtitle">Advertisement</span>
                  </div>
                  <div className="ad-image ad-image-1"></div>
                </div>
              </div>
              
              <div className="ad-placeholder">
                <div className="ad-content">
                  <div className="ad-text">
                    <span className="ad-title">Banner Ad Placeholder</span>
                    <span className="ad-subtitle">Advertisement</span>
                  </div>
                  <div className="ad-image ad-image-2"></div>
                </div>
              </div>
              
              <div className="ad-placeholder">
                <div className="ad-content">
                  <div className="ad-text">
                    <span className="ad-title">Banner Ad Placeholder</span>
                    <span className="ad-subtitle">Advertisement</span>
                  </div>
                  <div className="ad-image ad-image-3"></div>
                </div>
              </div>
              
              <div className="ad-placeholder">
                <div className="ad-content">
                  <div className="ad-text">
                    <span className="ad-title">Banner Ad Placeholder</span>
                    <span className="ad-subtitle">Advertisement</span>
                  </div>
                  <div className="ad-image ad-image-4"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WillTemplatePage;
