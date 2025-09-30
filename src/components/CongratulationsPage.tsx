import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './CongratulationsPage.css';

const CongratulationsPage: React.FC = () => {
  const handleDownload = () => {
    // TODO: Implement actual download functionality
    console.log('Downloading will...');
    alert('Will download would start here. This is a demo.');
  };

  return (
    <div className="congratulations-page">
      <Header />
      <main className="congratulations-main">
        <div className="congratulations-container">
          {/* Main Congratulations Section */}
          <section className="congratulations-section">
            <div className="success-icon">
              <div className="main-checkmark">
                <div className="checkmark-icon">✓</div>
              </div>
              <div className="floating-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-5"></div>
              </div>
            </div>
            
            <h1 className="congratulations-title">Congratulations!</h1>
            <p className="congratulations-subtitle">You've secured your family's future.</p>
            
            <p className="congratulations-description">
              Your will is now complete and ready for signing. This important step ensures your wishes are legally binding and your loved ones are protected.
            </p>
            
            <button className="download-btn" onClick={handleDownload}>
              <span className="download-icon">↓</span>
              Download Your Will
            </button>
          </section>

          {/* Advertisement Section */}
          <section className="ads-section">
            <div className="ads-divider"></div>
            <div className="ads-label">ADVERTISEMENT</div>
            <h2 className="ads-title">Continue Planning for Peace of Mind</h2>
            
            <div className="ads-grid">
              <div className="ad-card">
                <div className="ad-image ad-image-1"></div>
                <div className="ad-content">
                  <h3 className="ad-title">Protect Your Family's Future</h3>
                  <p className="ad-description">Get life insurance coverage in minutes.</p>
                  <button className="ad-button">Get a Quote</button>
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-image ad-image-2"></div>
                <div className="ad-content">
                  <h3 className="ad-title">Plan for the Unexpected</h3>
                  <p className="ad-description">Create a power of attorney for your finances.</p>
                  <button className="ad-button">Create a POA</button>
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-image ad-image-3"></div>
                <div className="ad-content">
                  <h3 className="ad-title">Leave a Lasting Legacy</h3>
                  <p className="ad-description">Make a charitable donation in your will.</p>
                  <button className="ad-button">Learn More</button>
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-image ad-image-4"></div>
                <div className="ad-content">
                  <h3 className="ad-title">Secure Your Digital Assets</h3>
                  <p className="ad-description">Protect your online accounts and data.</p>
                  <button className="ad-button">Explore Options</button>
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

export default CongratulationsPage;
