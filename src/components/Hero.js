import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    title: 'Shree Karni Tourism',
    subtitle: 'Experience the Royal Heritage of Rajasthan',
    background: 'https://images.pexels.com/photos/15828318/pexels-photo-15828318.jpeg',
  },
  {
    title: 'Desert Adventures Await',
    subtitle: 'Camel Safaris, Forts & Folk Culture',
    background: 'https://images.pexels.com/photos/16426070/pexels-photo-16426070.jpeg',
  },
  {
    title: 'Lakes & Palaces',
    subtitle: 'Discover Udaipur, Jaipur, Jodhpur & More',
    background: 'https://images.pexels.com/photos/31173940/pexels-photo-31173940.jpeg?auto=compress&w=1500&q=80',
  },
  {
    title: 'Colors of Pushkar Fair',
    subtitle: 'Witness the vibrant Pushkar Camel Fair & local traditions',
    background: 'https://images.pexels.com/photos/16738847/pexels-photo-16738847.jpeg?auto=compress&w=1500&q=80',
  },
  {
    title: 'Wildlife & Adventure',
    subtitle: 'Explore Sariska, Ranthambore & Rajasthan\'s wild side',
    background: 'https://images.pexels.com/photos/11430351/pexels-photo-11430351.jpeg',
  },
  // Hawa Mahal Slide
  {
    title: 'Hawa Mahal, Jaipur',
    subtitle: 'Marvel at the Palace of Winds',
    background: 'https://images.pexels.com/photos/5438965/pexels-photo-5438965.jpeg',
  },
  // Jaisalmer Slide
  {
    title: 'Golden Fort, Jaisalmer',
    subtitle: 'Explore the Golden City in the Thar Desert',
    background: 'https://images.pexels.com/photos/19160083/pexels-photo-19160083.jpeg',
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Enhanced auto-slide logic with better error handling
  useEffect(() => {
    const startAutoSlide = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      timerRef.current = setInterval(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slides.length;
          return nextIndex;
        });
      }, 4000); // 4 seconds interval
    };

    if (!paused) {
      startAutoSlide();
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused, slides.length]);

  // Manual slide change functions
  const goTo = (i) => {
    setIndex(i);
    // Reset timer when manually changing slides
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    // Reset timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    // Reset timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 2000);
    }
  };

  // Pause on hover with improved logic
  const handleMouseEnter = () => {
    setPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setPaused(false);
    // Auto-slide will restart in useEffect
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center text-center position-relative hero-slide"
      style={{
        minHeight: '80vh',
        backgroundImage: `url(${slides[index].background})`,
        color: '#fff',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(39, 70, 144, 0.45)' }}></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown" style={{ textShadow: '2px 2px 8px #000' }}>{slides[index].title}</h1>
        <p className="lead mb-4 animate__animated animate__fadeInUp" style={{ textShadow: '1px 1px 6px #000' }}>{slides[index].subtitle}</p>
        <a href="#packages" className="btn btn-lg btn-warning fw-bold shadow animate__animated animate__fadeInUp">Explore Packages</a>
      </div>
      {/* Left Arrow */}
      <img
        src="/png-clipart-arrow-computer-icons-arrow-angle-arrow-thumbnail.png"
        alt="Previous"
        className="position-absolute top-45 start-0 translate-middle-y hero-arrow"
        style={{
          left: 30,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          padding: '14px',
          opacity: 0.7,
        }}
        onClick={prevSlide}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
          e.target.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(-50%) scale(1)';
          e.target.style.opacity = '0.7';
        }}
        aria-label="Previous Slide"
      />
      {/* Right Arrow */}
      <img
        src="/png-clipart-arrow-computer-icons-arrow-angle-arrow-thumbnail.png"
        alt="Next"
        className="position-absolute end-0 translate-middle-y hero-arrow"
        style={{
          right: 30,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          transform: 'scaleX(-1) translateY(-50%)',
          transformOrigin: 'center',
          borderRadius: '50%',
          top:'37%',
          width: '60px',
          height: '60px',
          padding: '14px',
          opacity: 0.7,
          rotate: '180deg',
        }}
        onClick={nextSlide}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scaleX(-1) translateY(-50%) scale(1.1)';
          e.target.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scaleX(-1) translateY(-50%) scale(1)';
          e.target.style.opacity = '0.7';
        }}
        aria-label="Next Slide"
      />
    </section>
  );
};

export default Hero; 