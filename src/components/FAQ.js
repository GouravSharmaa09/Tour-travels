import React from 'react';

const faqs = [
  {
    q: 'What is the best time to visit Rajasthan?',
    a: 'October to March is ideal for pleasant weather and sightseeing.'
  },
  {
    q: 'Is it safe to travel solo in Rajasthan?',
    a: 'Yes, Rajasthan is generally safe for solo travelers, but always take standard precautions.'
  },
  {
    q: 'What are must-try foods in Rajasthan?',
    a: 'Dal Baati Churma, Laal Maas, and Ghewar are some of the must-try dishes.'
  },
];

const FAQ = () => (
  <section className="container my-5">
    <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
      {faqs.map((faq, idx) => (
        <div className="accordion-item" key={faq.q}>
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button className={`accordion-button${idx !== 0 ? ' collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded={idx === 0} aria-controls={`collapse${idx}`}>
              {faq.q}
            </button>
          </h2>
          <div id={`collapse${idx}`} className={`accordion-collapse collapse${idx === 0 ? ' show' : ''}`} aria-labelledby={`heading${idx}`} data-bs-parent="#faqAccordion">
            <div className="accordion-body">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ; 