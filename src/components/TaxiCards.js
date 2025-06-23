import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

function TaxiCards({ taxis }) {
  const [openFormIdx, setOpenFormIdx] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', people: '', requests: '' });
  const [submittedIdx, setSubmittedIdx] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleBookClick = idx => {
    setOpenFormIdx(idx);
    setForm({ name: '', email: '', mobile: '', people: '', requests: '' });
    setSubmittedIdx(null);
  };
  const handleSubmit = (e, idx) => {
    e.preventDefault();
    setSubmittedIdx(idx);
  };

  return (
    <>
      <section className="container my-5">
        <h2 className="mb-4 text-center">Taxi & Cab Services</h2>
        <div className="row g-4 justify-content-center">
          {taxis.map((taxi, idx) => (
            <div className="col-md-4" key={taxi.name}>
              <div className="card h-100 shadow-sm text-center">
                <img src={taxi.image} className="card-img-top" alt={taxi.name} style={{ height: 180, objectFit: 'cover', width: '100%', borderRadius: 8 }} />
                <div className="card-body">
                  <h5 className="card-title">{taxi.name}</h5>
                  <p className="card-text small">{taxi.summary}</p>
                  <span className="badge bg-primary me-2">{taxi.seats} Seater</span>
                  <span className="badge bg-success">{taxi.charges}</span>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-warning fw-bold" onClick={() => setOpenFormIdx(idx)}>Book Now</button>
                    <a href={`https://wa.me/8209427429?text=I%20want%20to%20book%20a%20${encodeURIComponent(taxi.name)}`} target="_blank" rel="noopener noreferrer" className="btn btn-success fw-bold"><i className="bi bi-whatsapp"></i> WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Modal for booking form - styled like tour modal, rendered as portal */}
      {openFormIdx !== null && ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            background: '#fff',
            borderRadius: 10,
            maxWidth: 500,
            width: '90vw',
            boxShadow: '0 2px 24px rgba(0,0,0,0.25)',
            padding: 0,
            position: 'relative'
          }}>
            <div className="modal-header bg-success text-white" style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
              <h5 className="modal-title">Book Now: {taxis[openFormIdx].name}</h5>
              <button type="button" className="btn-close" onClick={() => setOpenFormIdx(null)}></button>
            </div>
            <div className="modal-body" style={{ padding: 24 }}>
              <div className="alert alert-info fw-bold">Charges: {taxis[openFormIdx].charges}</div>
              {submittedIdx === openFormIdx ? (
                <div className="alert alert-success text-center">Thank you for your booking! We will contact you soon.</div>
              ) : (
                <form onSubmit={e => handleSubmit(e, openFormIdx)}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Name</label>
                    <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Mobile No</label>
                    <input type="tel" className="form-control" name="mobile" value={form.mobile} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Number of People</label>
                    <input type="number" className="form-control" name="people" value={form.people || ''} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Special Requests</label>
                    <textarea className="form-control" name="requests" value={form.requests} onChange={handleChange} rows={2} />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 fw-bold">Submit Booking</button>
                </form>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default TaxiCards; 