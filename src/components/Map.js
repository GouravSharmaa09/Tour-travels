import React from 'react';
import InquiryForm from './InquiryForm'; // Assuming InquiryForm is in the same directory

const MapSection = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489394754763!2d75.7883210150319!3d26.9197029831215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a6a546eb56f%3A0x9ba7527789184581!2sRajasthan%20Tour%20Taxi!5e0!3m2!1sen!2sin!4v1624282599478!5m2!1sen!2sin";

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-0">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="600"
                style={{ border: 0, borderRadius: '0.25rem' }}
                allowFullScreen=""
                loading="lazy"
                title="Rajasthan Tour Taxi Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-4">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 