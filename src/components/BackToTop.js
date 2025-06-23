import React from 'react';

const BackToTop = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      background: '#274690',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: 48,
      height: 48,
      zIndex: 1000,
      fontSize: 24,
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}
    aria-label="Back to top"
  >
    ↑
  </button>
);

export default BackToTop; 