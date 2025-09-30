import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './WillFormDownloadPage.css';

const WillFormDownloadPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    beneficiaries: [
      { name: '', relationship: '', share: '' },
      { name: '', relationship: '', share: '' }
    ],
    executorName: '',
    executorRelationship: '',
    executorAddress: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDateChange = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as MM/DD/YYYY
    if (digits.length <= 2) {
      setFormData(prev => ({ ...prev, dateOfBirth: digits }));
    } else if (digits.length <= 4) {
      setFormData(prev => ({ ...prev, dateOfBirth: `${digits.slice(0, 2)}/${digits.slice(2)}` }));
    } else {
      setFormData(prev => ({ ...prev, dateOfBirth: `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}` }));
    }
  };

  const handleBeneficiaryChange = (index: number, field: string, value: string) => {
    const updatedBeneficiaries = [...formData.beneficiaries];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      beneficiaries: updatedBeneficiaries
    }));
  };

  const addBeneficiary = () => {
    setFormData(prev => ({
      ...prev,
      beneficiaries: [...prev.beneficiaries, { name: '', relationship: '', share: '' }]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to payment confirmation with form data
    navigate('/payment-confirmation', {
      state: {
        serviceType: 'download',
        price: 1.95,
        formData: formData
      }
    });
  };

  return (
    <div className="will-form-download-page">
      <Header />
      <main className="will-form-main">
        <div className="will-form-container">
          <h1 className="form-title">Create Your Will Online</h1>
          
          <form className="will-form" onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <section className="form-section">
              <h2 className="section-title">Personal Information</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleDateChange(e.target.value)}
                    placeholder="MM/DD/YYYY"
                    pattern="\d{2}/\d{2}/\d{4}"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    required
                  >
                    <option value="">Select your state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    placeholder="Enter your zip code"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Beneficiaries Section */}
            <section className="form-section">
              <h2 className="section-title">Beneficiaries</h2>
              
              {formData.beneficiaries.map((beneficiary, index) => (
                <div key={index} className="beneficiary-card">
                  <h3 className="beneficiary-title">Beneficiary {index + 1}</h3>
                  <div className="beneficiary-fields">
                    <div className="form-group">
                      <label htmlFor={`beneficiary-name-${index}`}>Full Name</label>
                      <input
                        type="text"
                        id={`beneficiary-name-${index}`}
                        value={beneficiary.name}
                        onChange={(e) => handleBeneficiaryChange(index, 'name', e.target.value)}
                        placeholder="Beneficiary's full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`beneficiary-relationship-${index}`}>Relationship</label>
                      <input
                        type="text"
                        id={`beneficiary-relationship-${index}`}
                        value={beneficiary.relationship}
                        onChange={(e) => handleBeneficiaryChange(index, 'relationship', e.target.value)}
                        placeholder="Relationship"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`beneficiary-share-${index}`}>Share (%)</label>
                      <input
                        type="number"
                        id={`beneficiary-share-${index}`}
                        value={beneficiary.share}
                        onChange={(e) => handleBeneficiaryChange(index, 'share', e.target.value)}
                        placeholder="e.g. 50"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <button type="button" className="add-beneficiary-btn" onClick={addBeneficiary}>
                + Add another beneficiary
              </button>
            </section>

            {/* Executor Section */}
            <section className="form-section">
              <h2 className="section-title">Executor</h2>
              
              <div className="form-group">
                <label htmlFor="executorName">Executor Name</label>
                <input
                  type="text"
                  id="executorName"
                  value={formData.executorName}
                  onChange={(e) => handleInputChange('executorName', e.target.value)}
                  placeholder="Enter executor's full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="executorRelationship">Executor Relationship</label>
                <input
                  type="text"
                  id="executorRelationship"
                  value={formData.executorRelationship}
                  onChange={(e) => handleInputChange('executorRelationship', e.target.value)}
                  placeholder="Enter relationship to executor"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="executorAddress">Executor Address</label>
                <input
                  type="text"
                  id="executorAddress"
                  value={formData.executorAddress}
                  onChange={(e) => handleInputChange('executorAddress', e.target.value)}
                  placeholder="Enter executor's address"
                  required
                />
              </div>
            </section>

            {/* Submit Button */}
            <div className="form-submit">
              <button type="submit" className="submit-btn">
                Finalize & Submit Will
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WillFormDownloadPage;
