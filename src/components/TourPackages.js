import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TourPackages = ({ packages, onBookNow, showDetailsLink }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="row g-4">
      {packages.map((pkg, idx) => (
        <div className="col-md-6 col-lg-4" key={pkg.name}>
          <div className="card h-100 shadow-sm">
            <img src={pkg.image} className="card-img-top" alt={pkg.name} style={{ height: 200, objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{pkg.name}</h5>
              <h6 className="text-success mb-2">{pkg.price}</h6>
              <ul className="list-unstyled small mb-3">
                {pkg.highlights.map((h, i) => <li key={i}>• {h}</li>)}
              </ul>
              <button className="btn btn-outline-primary mt-auto mb-2" onClick={() => setSelected(idx)}>
                View Itinerary
              </button>
              <button className="btn btn-success w-100 mb-2" onClick={() => onBookNow(pkg)}>
                Book Now
              </button>
              {showDetailsLink && (
                <Link
                  to={`/packages/${pkg.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className="btn btn-warning w-100"
                >
                  View Details
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Modal for itinerary */}
      {selected !== null && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{packages[selected].name} - Itinerary</h5>
                <button type="button" className="btn-close" onClick={() => setSelected(null)}></button>
              </div>
              <div className="modal-body">
                <img src={packages[selected].image} alt={packages[selected].name} className="img-fluid rounded mb-3" />
                <ol>
                  {packages[selected].itinerary.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPackages; 