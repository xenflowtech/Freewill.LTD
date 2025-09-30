import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FAQPage from './components/FAQPage';
import AboutPage from './components/AboutPage';
import WillTemplatePage from './components/WillTemplatePage';
import WillFormDownloadPage from './components/WillFormDownloadPage';
import WillFormDeliveryPage from './components/WillFormDeliveryPage';
import PaymentConfirmationPage from './components/PaymentConfirmationPage';
import CongratulationsPage from './components/CongratulationsPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/will-template" element={<WillTemplatePage />} />
          <Route path="/will-form-download" element={<WillFormDownloadPage />} />
          <Route path="/will-form-delivery" element={<WillFormDeliveryPage />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
          <Route path="/congratulations" element={<CongratulationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
