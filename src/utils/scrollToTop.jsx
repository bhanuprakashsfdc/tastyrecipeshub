import React, { useState, useEffect } from 'react';
import '../App.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-top scroll-to-target ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-alt-up check"></i>
    </button>
  );
};

export default ScrollToTopButton;
