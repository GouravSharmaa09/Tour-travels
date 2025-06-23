import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TaxiBookingPage({ taxis }) {
  const { taxiName } = useParams();
  const navigate = useNavigate();
  const taxi = taxis.find(t => encodeURIComponent(t.name) === taxiName);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', people: '', requests: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!taxi) return <div className="container my-5"><h2>Taxi Not Found</h2></div>;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Book Now: {taxi.name}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={() => navigate(-1)}></button>
            </div>
            <div className="card-body">
              <img src={taxi.image} alt={taxi.name} className="img-fluid rounded mb-3" style={{ maxHeight: 140, objectFit: 'cover' }} />
              <div className="alert alert-info fw-bold">Charges: {taxi.charges}</div>
              {submitted ? (
                <div className="alert alert-success text-center">Thank you for your booking! We will contact you soon.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Taxi</label>
                    <input type="text" className="form-control" value={taxi.name} disabled />
                  </div>
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
        </div>
      </div>
    </div>
  );
}

export default TaxiBookingPage; 