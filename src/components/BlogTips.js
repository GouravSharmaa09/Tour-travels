import React, { useState } from 'react';

const tips = [
  {
    title: "Best Time to Visit Rajasthan",
    image: "https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg",
    desc: "Discover the ideal months for exploring Rajasthan's forts, palaces, and deserts."
  },
  {
    title: "Packing Tips for Desert Safari",
    image: "https://images.pexels.com/photos/9491251/pexels-photo-9491251.jpeg",
    desc: "What to pack for a comfortable and safe desert adventure in Rajasthan."
  },
  {
    title: "Top Foods to Try in Rajasthan",
    image: "https://www.swantour.com/blogs/wp-content/uploads/2019/02/Foods-of-Rajasthan-1.jpg",
    desc: "Don't miss these delicious Rajasthani dishes on your next trip!"
  },
];

const BlogTips = () => {
  const [selected, setSelected] = useState(null);

  const handleOpen = (idx) => setSelected(idx);
  const handleClose = () => setSelected(null);

  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center">Travel Tips & Blog</h2>
      <div className="row g-4">
        {tips.map((tip, idx) => (
          <div className="col-md-4" key={tip.title}>
            <div className="card h-100 shadow-sm blog-tip-card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleOpen(idx)}>
              <img src={tip.image} className="card-img-top" alt={tip.title} style={{ height: 160, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{tip.title}</h5>
                <p className="card-text small">{tip.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for blog tip summary */}
      {selected !== null && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header bg-warning">
                <h5 className="modal-title"><i className="bi bi-journal-text me-2"></i>{tips[selected].title}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body row align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                  <img src={tips[selected].image} alt={tips[selected].title} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-7">
                  <p className="mb-2">{tips[selected].desc}</p>
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

export default BlogTips; 