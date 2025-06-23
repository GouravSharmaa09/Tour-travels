import React, { useState } from 'react';

const Destinations = ({ destinations }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="container my-5" id="destinations">
      <h2 className="mb-4 text-center">Popular Destinations</h2>
      <div className="row g-4">
        {destinations.map((dest, idx) => (
          <div className="col-md-4 col-lg-3" key={dest.name}>
            <div className="card h-100 shadow-sm">
              <img src={dest.image} className="card-img-top" alt={dest.name} style={{ height: 160, objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{dest.name}</h5>
                <p className="card-text small flex-grow-1">{dest.description}</p>
                <button className="btn btn-outline-primary mt-2" onClick={() => setSelected(idx)}>
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for destination details */}
      {selected !== null && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{destinations[selected].name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelected(null)}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {/* Summary Section */}
                  <div className="col-md-6">
                    <div className="card h-100">
                      <img src={destinations[selected].image} alt={destinations[selected].name} className="card-img-top" style={{ height: 250, objectFit: 'cover' }} />
                      <div className="card-body">
                        <h6 className="card-title text-primary">Summary</h6>
                        <p className="card-text">{destinations[selected].description}</p>
                        <div className="mt-3">
                          <h6 className="text-success">Highlights:</h6>
                          <ul className="list-unstyled">
                            <li><i className="bi bi-check-circle-fill text-success me-2"></i>Rich cultural heritage</li>
                            <li><i className="bi bi-check-circle-fill text-success me-2"></i>Stunning architecture</li>
                            <li><i className="bi bi-check-circle-fill text-success me-2"></i>Local cuisine and traditions</li>
                            <li><i className="bi bi-check-circle-fill text-success me-2"></i>Photography opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Details Section */}
                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="card-title text-primary">Detailed Information</h6>
                        <p className="card-text">Experience the rich culture and heritage of {destinations[selected].name}. This destination offers a perfect blend of history, architecture, and local traditions that will leave you mesmerized.</p>
                        <div className="mt-3">
                          <h6 className="text-info">Why Visit {destinations[selected].name}?</h6>
                          <ul className="list-unstyled">
                            <li><i className="bi bi-star-fill text-warning me-2"></i>Rich cultural heritage</li>
                            <li><i className="bi bi-star-fill text-warning me-2"></i>Stunning architecture</li>
                            <li><i className="bi bi-star-fill text-warning me-2"></i>Local cuisine and traditions</li>
                            <li><i className="bi bi-star-fill text-warning me-2"></i>Photography opportunities</li>
                          </ul>
                        </div>
                        <div className="mt-3">
                          <h6 className="text-info">Best Time to Visit:</h6>
                          <p className="card-text">October to March (Pleasant weather for sightseeing)</p>
                        </div>
                        <div className="mt-3">
                          <h6 className="text-info">How to Reach:</h6>
                          <p className="card-text">Well connected by road, rail, and air. Regular flights and trains available from major cities.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelected(null)}>Close</button>
                <button type="button" className="btn btn-primary">Book Tour</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destinations; 