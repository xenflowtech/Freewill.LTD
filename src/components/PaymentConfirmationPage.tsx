import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './PaymentConfirmationPage.css';

interface PaymentData {
  serviceType: 'download' | 'delivery';
  price: number;
  formData: any;
}

const PaymentConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    if (location.state) {
      setPaymentData(location.state as PaymentData);
    } else {
      // Redirect to home if no payment data
      navigate('/');
    }
  }, [location.state, navigate]);

  const handlePayment = () => {
    // TODO: Integrate with PayPal payment
    console.log('Processing payment:', paymentData);
    // Navigate to congratulations page after successful payment
    navigate('/congratulations');
  };

  if (!paymentData) {
    return <div>Loading...</div>;
  }

  const getServiceName = () => {
    return paymentData.serviceType === 'download' 
      ? 'Fill Online & Download' 
      : 'Fill Online & Printed Delivery';
  };

  const getPrice = () => {
    return paymentData.price.toFixed(2);
  };

  return (
    <div className="payment-confirmation-page">
      <Header />
      <main className="payment-main">
        <div className="payment-container">
          {/* Payment Confirmation Section */}
          <section className="payment-section">
            <h1 className="payment-title">Payment Confirmation</h1>
            <p className="payment-instruction">
              Please review your order details before proceeding with payment to ensure everything is correct.
            </p>
            
            <div className="order-summary">
              <h2 className="summary-title">Order Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">Will Option</span>
                  <span className="summary-value">{getServiceName()}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Payment Method</span>
                  <span className="summary-value">PayPal</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Amount</span>
                  <span className="summary-value">£{getPrice()}</span>
                </div>
              </div>
            </div>

            <button className="confirm-payment-btn" onClick={handlePayment}>
              Confirm and Pay with PayPal
            </button>
            
            <p className="payment-disclaimer">
              By clicking 'Confirm and Pay', you agree to our Terms of Service and Privacy Policy.
            </p>
          </section>

          {/* Advertisement Section */}
          <section className="ads-section">
            <div className="ads-grid">
              <div className="ad-card">
                <div className="ad-label">AD</div>
                <div className="ad-content">
                  <div className="ad-image ad-image-1"></div>
                  <div className="ad-text">
                    <h3 className="ad-title">Protect Your Family's Future</h3>
                    <p className="ad-description">Secure your legacy with our comprehensive will creation service.</p>
                    <button className="ad-button">Learn More</button>
                  </div>
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-label">AD</div>
                <div className="ad-content">
                  <div className="ad-image ad-image-2"></div>
                  <div className="ad-text">
                    <h3 className="ad-title">Peace of Mind, Guaranteed</h3>
                    <p className="ad-description">Create a legally binding will in minutes, ensuring your wishes are honored.</p>
                    <button className="ad-button">Get Started</button>
                  </div>
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-label">AD</div>
                <div className="ad-content">
                  <div className="ad-image ad-image-3"></div>
                  <div className="ad-text">
                    <h3 className="ad-title">Simple, Secure, and Affordable</h3>
                    <p className="ad-description">Our user-friendly platform makes will creation accessible to everyone.</p>
                    <button className="ad-button">Explore Options</button>
                  </div>
                </div>
              </div>

              <div className="ad-card">
                <div className="ad-label">AD</div>
                <div className="ad-content">
                  <div className="ad-image ad-image-4"></div>
                  <div className="ad-text">
                    <h3 className="ad-title">Your Legacy, Your Way</h3>
                    <p className="ad-description">Customize your will to reflect your unique circumstances and desires.</p>
                    <button className="ad-button">Personalize Your Will</button>
                  </div>
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

export default PaymentConfirmationPage;
