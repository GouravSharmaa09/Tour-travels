import React from 'react';

const Footer = () => (
  <>
    <style>
      {`
        footer a.text-light:hover {
          color: #ffc107 !important;
          transition: color 0.2s ease-in-out;
        }
        
        footer .d-flex.gap-3 a:hover img {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }
        
        .footer-section {
          min-height: 200px;
        }
        
        .footer-bottom {
          border-top: 1px solid #444;
          padding-top: 20px;
          margin-top: 30px;
        }
      `}
    </style>
    <footer className="bg-dark text-light pt-5 pb-3 mt-5" id="contact">
      <div className="container">
        <div className="row">
          {/* Logo and About */}
          <div className="col-lg-3 col-md-6 mb-4 footer-section">
            <img src={require('./SHREEKARNITOURLOGOPNG1.png')} alt="Shree Karni Tourism Logo" width="150" className="mb-3" />
            <p className="small fw-bold mb-3">At Shree Karni Tourism, we have everything you need to make your travel holiday a lifetime memory. Our goal is to make every journey as comfortable and enjoyable as possible.</p>
            <div className="mb-3">
              <h6 className="text-warning fw-bold mb-2">Why Choose Us?</h6>
              <ul className="list-unstyled small fw-bold">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Experienced Guides</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Best Price Guarantee</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>24/7 Support</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Customized Packages</li>
              </ul>
            </div>
            <div className="d-flex gap-3">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-light fs-4">  <img src="./facebook-social-media-icon-3d_466778-4384.avif" alt="Facebook" style={{ borderRadius: 100, width: 30, height: 30, backgroundColor: 'black' }} /> </a>
              <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-light fs-4"> <img src="./images.jpeg" alt="Instagram" style={{ borderRadius: 50, width: 30, height: 30, backgroundColor: 'none' }} /> </a>
              <a href="https://wa.me/8209427429" target="_blank" rel="noopener noreferrer" className="text-light fs-4"> <img src="./2496112.png" alt="WhatsApp" style={{ borderRadius: 50, width: 30, height: 30 , backgroundColor: 'white' }} /> </a>
              <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-light fs-4"> <img src="./YouTube-Logo-PNG-Symbol-for-Video-Platform-Transparent-jpg.webp" alt="Youtube" style={{ borderRadius: 50, width: 30, height: 30, backgroundColor: 'none' }} /> </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 footer-section">
            <h6 className="text-warning fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small fw-bold">
              <li className="mb-2"><a href="/" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-house-door me-2"></i>Home</a></li>
              <li className="mb-2"><a href="/destinations" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-geo-alt me-2"></i>Destinations</a></li>
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-bag me-2"></i>Special Packages</a></li>
              <li className="mb-2"><a href="/testimonials" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-star me-2"></i>Testimonials</a></li>
              <li className="mb-2"><a href="/contact" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-envelope me-2"></i>Contact</a></li>
              <li className="mb-2"><a href="/about" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-info-circle me-2"></i>About Us</a></li>
              <li className="mb-2"><a href="/blog" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-journal-text me-2"></i>Travel Blog</a></li>
            </ul>
          </div>
          
          {/* Best Destinations */}
          <div className="col-lg-2 col-md-6 mb-4 footer-section">
            <h6 className="text-warning fw-bold mb-3">Popular Destinations</h6>
            <ul className="list-unstyled small fw-bold">
              <li className="mb-2"><a href="/destinations#Jaipur" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-chevron-right me-2"></i>Jaipur - Pink City</a></li>
              <li className="mb-2"><a href="/destinations#Jodhpur" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-chevron-right me-2"></i>Jodhpur - Blue City</a></li>
              <li className="mb-2"><a href="/destinations#Udaipur" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-chevron-right me-2"></i>Udaipur - City of Lakes</a></li>
              <li className="mb-2"><a href="/destinations#Jaisalmer" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-chevron-right me-2"></i>Jaisalmer - Golden City</a></li>
              <li className="mb-2"><a href="/destinations#Pushkar" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-chevron-right me-2"></i>Pushkar - Holy City</a></li>
              <li className="mb-2"><a href="/destinations#MountAbu" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-chevron-right me-2"></i>Mount Abu - Hill Station</a></li>
              <li className="mb-2"><a href="/destinations#Ranthambore" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-chevron-right me-2"></i>Ranthambore - Wildlife</a></li>
            </ul>
          </div>
          
          {/* Tour Categories */}
          <div className="col-lg-2 col-md-6 mb-4 footer-section">
            <h6 className="text-warning fw-bold mb-3">Tour Categories</h6>
            <ul className="list-unstyled small fw-bold">
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-calendar-range me-2"></i>Duration Packages</a></li>
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-gem me-2"></i>Luxury Packages</a></li>
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-currency-rupee me-2"></i>Budget Packages</a></li>
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-heart me-2"></i>Honeymoon Packages</a></li>
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-people me-2"></i>Group Tours</a></li>
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-camera me-2"></i>Photography Tours</a></li>
              <li className="mb-2"><a href="/packages" className="text-light text-decoration-none fw-bold d-flex align-items-center"><i className="bi bi-bicycle me-2"></i>Adventure Tours</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4 footer-section">
            <h6 className="text-warning fw-bold mb-3">Contact Information</h6>
            <div className="mb-3">
              <p className="small mb-2 fw-bold d-flex align-items-center"><i className="bi bi-geo-alt-fill text-warning me-2"></i>Jaipur, Rajasthan, India</p>
              <p className="small mb-2 fw-bold d-flex align-items-center"><i className="bi bi-telephone-fill text-warning me-2"></i>+91 8209427429</p>
              <p className="small mb-2 fw-bold d-flex align-items-center"><i className="bi bi-envelope-fill text-warning me-2"></i>info@shreekarnitourism.com</p>
              <p className="small mb-2 fw-bold d-flex align-items-center"><i className="bi bi-clock-fill text-warning me-2"></i>24/7 Customer Support</p>
            </div>
            
            <div className="mb-3">
              <h6 className="text-warning fw-bold mb-2">Payment Methods</h6>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-light text-dark me-1 mb-1">UPI</span>
                <span className="badge bg-light text-dark me-1 mb-1">Card</span>
                <span className="badge bg-light text-dark me-1 mb-1">Net Banking</span>
                <span className="badge bg-light text-dark me-1 mb-1">Cash</span>
              </div>
            </div>
            
            <div>
              <h6 className="text-warning fw-bold mb-2">Quick Contact</h6>
              <a href="https://wa.me/8209427429" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm fw-bold me-2 mb-2">
                <i className="bi bi-whatsapp me-1"></i>WhatsApp
              </a>
              <a href="tel:+918209427429" className="btn btn-primary btn-sm fw-bold mb-2">
                <i className="bi bi-telephone me-1"></i>Call Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-7">
              <p className="small mb-0 fw-bold">&copy; {new Date().getFullYear()} Shree Karni Tourism. All rights reserved. | Privacy Policy | Terms & Conditions</p>
            </div>
            <div className="col-md-5 text-md-end">
              <p className="small mb-0 fw-bold">Developed by Gourav Sharma</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer; 