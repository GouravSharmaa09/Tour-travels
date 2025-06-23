import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChatBotButton } from './ChatBot';

const Navbar = ({ onChatClick }) => (
  <nav
    className="navbar navbar-expand-lg sticky-top shadow-sm"
    style={{
      position: 'relative',
      zIndex: 1000,
      minHeight: 80,
      background: '#F2E2B1', // deep orange
    }}
  >
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/" style={{ letterSpacing: 1, color: '#800000', fontWeight: 'bold' }}>
        <img src={require('./SHREEKARNITOURLOGOPNG1.png')} alt="Shree Karni Tourism Logo" width="120" className="me-2" style={{ fontWeight: 'bold' }} />
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
          <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link custom-nav fw-bold' + (isActive ? ' active text-primary' : '')} to="/" style={{ fontWeight: 'bold' }}>Home</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link custom-nav fw-bold' + (isActive ? ' active text-primary' : '')} to="/about" style={{ fontWeight: 'bold' }}>About Us</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link custom-nav fw-bold' + (isActive ? ' active text-primary' : '')} to="/destinations" style={{ fontWeight: 'bold' }}>Destinations</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link custom-nav fw-bold' + (isActive ? ' active text-primary' : '')} to="/packages" style={{ fontWeight: 'bold' }}>Packages</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link custom-nav fw-bold' + (isActive ? ' active text-primary' : '')} to="/taxi-services" style={{ fontWeight: 'bold' }}>Taxi & Cab Services</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link custom-nav fw-bold' + (isActive ? ' active text-primary' : '')} to="/testimonials" style={{ fontWeight: 'bold' }}>Testimonials</NavLink></li>
          <li className="nav-item"><NavLink className={({ isActive }) => 'nav-link custom-nav fw-bold' + (isActive ? ' active text-primary' : '')} to="/contact" style={{ fontWeight: 'bold' }}>Contact</NavLink></li>
        </ul>
        {/* Social Media Icons */}
        <div className="d-flex align-items-center ms-lg-3">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-dark me-2 fs-5" style={{ fontWeight: 'bold' }}><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-dark me-2 fs-5" style={{ fontWeight: 'bold' }}><i className="bi bi-instagram"></i></a>
          <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-dark me-2 fs-5" style={{ fontWeight: 'bold' }}><i className="bi bi-twitter"></i></a>
          <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-dark fs-5" style={{ fontWeight: 'bold' }}><i className="bi bi-youtube"></i></a>
        </div>
        <NavLink to="/contact" className="btn btn-warning ms-lg-3 fw-bold" style={{ fontWeight: 'bold' }}>Inquiry</NavLink>
        <ChatBotButton onClick={onChatClick} />
      </div>
    </div>
  </nav>
);

export default Navbar; 