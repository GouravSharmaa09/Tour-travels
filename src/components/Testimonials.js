import React, { useState, useEffect, useRef } from 'react';

const Testimonials = ({ testimonials, packages, blogTips }) => {
  const [modal, setModal] = useState(null); // 'travels' | 'blog' | null
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef();

  // Use the first package and first blog tip as featured
  const featuredPackage = packages && packages[0];
  const featuredBlog = blogTips && blogTips[0];

  const handleOpen = (type) => setModal(type);
  const handleClose = () => setModal(null);

  // Autoplay effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIdx(idx => (idx + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  // Manual prev/next
  const goTo = idx => setActiveIdx(idx);
  const prev = () => setActiveIdx(idx => (idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIdx(idx => (idx + 1) % testimonials.length);

  return (
    <section className="container my-5" id="testimonials">
      <h2 className="mb-4 text-center">What Our Travelers Say</h2>
      <div className="d-flex justify-content-center mb-4 gap-3">
        <button className="btn btn-primary shadow" onClick={() => handleOpen('travels')}>
          <i className="bi bi-geo-alt-fill me-2"></i>Travels
        </button>
        <button className="btn btn-warning shadow" onClick={() => handleOpen('blog')}>
          <i className="bi bi-journal-text me-2"></i>Blog
        </button>
      </div>
      <div className="carousel slide" style={{ position: 'relative' }}>
        <div className="carousel-inner">
          {testimonials.map((t, idx) => (
            <div className={`carousel-item${idx === activeIdx ? ' active' : ''}`} key={t.name} style={{ display: idx === activeIdx ? 'block' : 'none', transition: 'opacity 0.5s' }}>
              <div className="d-flex flex-column align-items-center">
                <img src={t.photo} alt={t.name} className="rounded-circle mb-3 border border-3 border-warning" style={{ width: 80, height: 80, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
                <blockquote className="blockquote text-center">
                  <p className="mb-3 fst-italic">“{t.text}”</p>
                  <footer className="blockquote-footer">
                    <span className="fw-bold">{t.name}</span> <span className="text-muted">({t.city})</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={prev} style={{ background: 'none', border: 'none', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={next} style={{ background: 'none', border: 'none', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        {/* Dots/indicators */}
        <div className="d-flex justify-content-center mt-3 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`rounded-circle border-0 p-1 ${idx === activeIdx ? 'bg-warning' : 'bg-light'}`}
              style={{ width: 14, height: 14, opacity: idx === activeIdx ? 1 : 0.5, outline: 'none', cursor: 'pointer', border: idx === activeIdx ? '2px solid #fff' : 'none' }}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Modal for Travels/Blog summary */}
      {modal === 'travels' && featuredPackage && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title"><i className="bi bi-geo-alt-fill me-2"></i>{featuredPackage.name}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body row align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                  <img src={featuredPackage.image} alt={featuredPackage.name} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-7">
                  <span className="badge bg-warning text-dark mb-2 fs-6">{featuredPackage.price}</span>
                  <ul className="list-unstyled mb-2">
                    {featuredPackage.highlights.map((h, i) => <li key={i}><i className="bi bi-check-circle-fill text-success me-2"></i>{h}</li>)}
                  </ul>
                  <div className="mb-2">
                    <strong>Itinerary:</strong>
                    <ol className="small mb-0">
                      {featuredPackage.itinerary.slice(0, 3).map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                    <span className="text-muted small">...and more</span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal === 'blog' && featuredBlog && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header bg-warning">
                <h5 className="modal-title"><i className="bi bi-journal-text me-2"></i>{featuredBlog.title}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body row align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                  <img src={featuredBlog.image} alt={featuredBlog.title} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-7">
                  <p className="mb-2">{featuredBlog.desc}</p>
                  <span className="badge bg-primary">Travel Blog</span>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials; 