import React, { useEffect, useState } from 'react';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <div className="col text-center">
      <div className="display-5 fw-bold text-primary">{count.toLocaleString()}</div>
      <div className="small text-muted">{label}</div>
    </div>
  );
};

const AnimatedCounters = ({ stats }) => (
  <section className="container my-5">
    <div className="row">
      <Counter end={stats.travelers} label="Happy Travelers" />
      <Counter end={stats.years} label="Years Experience" />
      <Counter end={stats.destinations} label="Destinations" />
    </div>
  </section>
);

export default AnimatedCounters; 