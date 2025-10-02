import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <OptimizedImage 
            src="/logo.png" 
            alt="Freewill.Ltd" 
            className="logo-image"
            loading="eager"
          />
          <span className="logo-text">Freewill.Ltd</span>
        </Link>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
