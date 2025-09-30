import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './FAQPage.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openItem, setOpenItem] = useState<number>(1);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What is a will?",
      answer: "A will is a legal document that outlines your wishes regarding the distribution of your assets after your passing. It ensures your loved ones are taken care of according to your desires, providing peace of mind for you and security for their future."
    },
    {
      id: 2,
      question: "Why do I need a will?",
      answer: "Having a will ensures your assets are distributed according to your wishes, provides clarity for your family during a difficult time, and can help avoid lengthy legal processes. Without a will, the state decides how your assets are distributed."
    },
    {
      id: 3,
      question: "How does Freewill.Ltd work?",
      answer: "Our platform guides you through a simple step-by-step process to create your will. You can choose from our free template, fill it out online for a small fee, or have it professionally printed and delivered to your address."
    },
    {
      id: 4,
      question: "Is Freewill.Ltd secure?",
      answer: "Yes, we take your privacy and security seriously. All information is encrypted and stored securely. We use industry-standard security measures to protect your personal data and ensure your will remains confidential."
    },
    {
      id: 5,
      question: "Can I update my will?",
      answer: "Absolutely! Life circumstances change, and your will should reflect those changes. You can update your will at any time through our platform, ensuring it always represents your current wishes and situation."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id);
  };

  return (
    <div className="faq-page">
      <Header />
      <main className="faq-main">
        <div className="faq-container">
          <div className="faq-header">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <p className="faq-subtitle">Find answers to common questions about our services.</p>
          </div>
          
          <div className="faq-content">
            {faqItems.map((item) => (
              <div key={item.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.question}</span>
                  <span className={`faq-icon ${openItem === item.id ? 'open' : ''}`}>
                    ▼
                  </span>
                </button>
                {openItem === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
