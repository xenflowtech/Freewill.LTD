import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCards.css';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  note?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, note, buttonText, onButtonClick }) => {
  return (
    <div className="service-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {note && <p className="card-note">{note}</p>}
      <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const ServiceCards: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Free Will",
      description: "Download a blank Word document with 'Freewill.Ltd' watermarked.",
      buttonText: "Let's Start Your Will",
      onButtonClick: () => navigate('/will-template')
    },
    {
      title: "Fill Online & Download (£1.95)",
      description: "Fill out the will online and download after PayPal payment.",
      note: "Will provided by Freewill.Ltd.",
      buttonText: "Let's Start Your Will",
      onButtonClick: () => navigate('/will-form-download')
    },
    {
      title: "Fill Online & Printed Delivery (£4.50)",
      description: "Fill online, provide an address, and receive a printed document after PayPal payment.",
      note: "Extra postage outside the UK.",
      buttonText: "Let's Start Your Will",
      onButtonClick: () => navigate('/will-form-delivery')
    }
  ];

  return (
    <section className="service-cards-section">
      <div className="service-cards-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            note={service.note}
            buttonText={service.buttonText}
            onButtonClick={service.onButtonClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
