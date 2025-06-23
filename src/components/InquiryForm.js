import React, { useState, useEffect } from 'react';

const InquiryForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    emailAddress: '',
    country: '',
    contactNo: '',
    requirements: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!form.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    
    if (!form.country) {
      newErrors.country = 'Please select a country';
    }
    
    if (!form.contactNo.trim()) {
      newErrors.contactNo = 'Contact Number is required';
    } else if (!/^\d{10,15}$/.test(form.contactNo.replace(/\s/g, ''))) {
      newErrors.contactNo = 'Please enter a valid contact number';
    }
    
    if (!form.requirements.trim()) {
      newErrors.requirements = 'Please provide your requirements or queries';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission logic here (e.g., send data to a server)
      console.log('Form submitted:', form);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div 
        className="alert alert-success text-center p-4" 
        role="alert"
        style={{
          transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s ease-in-out',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}
      >
        <i className="bi bi-check-circle-fill fs-1 text-success mb-3"></i>
        <h4>Thank you for your request!</h4>
        <p className="mb-0">We will get in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <div 
      className="inquiry-form-container"
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s ease-in-out',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        padding: '2rem',
        border: '1px solid #e0e0e0'
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Get In Touch</h3>
          <p className="text-muted">Please fill out the form below to get in touch with us. We will respond to your inquiry as soon as possible.</p>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="fullName" className="form-label fw-bold">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="emailAddress" className="form-label fw-bold">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
              id="emailAddress"
              name="emailAddress"
              value={form.emailAddress}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="form-label fw-bold">
              Country <span className="text-danger">*</span>
            </label>
            <select
              className={`form-select ${errors.country ? 'is-invalid' : ''}`}
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Other">Other</option>
            </select>
            {errors.country && <div className="invalid-feedback">{errors.country}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="contactNo" className="form-label fw-bold">
              Contact Number <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
              id="contactNo"
              name="contactNo"
              value={form.contactNo}
              onChange={handleChange}
              placeholder="Enter your contact number"
            />
            {errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="requirements" className="form-label fw-bold">
            Your Requirements and Queries <span className="text-danger">*</span>
          </label>
          <textarea
            className={`form-control ${errors.requirements ? 'is-invalid' : ''}`}
            id="requirements"
            name="requirements"
            rows="4"
            value={form.requirements}
            onChange={handleChange}
            placeholder="Please describe your requirements, travel plans, or any questions you have..."
          ></textarea>
          {errors.requirements && <div className="invalid-feedback">{errors.requirements}</div>}
        </div>
        
        <div className="mb-4 form-check">
          <input type="checkbox" className="form-check-input" id="notARobot" required />
          <label className="form-check-label" htmlFor="notARobot">
            I'm not a robot <span className="text-danger">*</span>
          </label>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary w-100 fw-bold py-3"
          style={{
            fontSize: '1.1rem',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,123,255,0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(0,123,255,0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,123,255,0.3)';
          }}
        >
          <i className="bi bi-send me-2"></i>
          Send Your Request
        </button>
      </form>
    </div>
  );
};

export default InquiryForm; 