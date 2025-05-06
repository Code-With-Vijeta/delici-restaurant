import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "./images/cafe.jpg",
    "./images/mainImg.avif",
    "./images/cafe.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          ❮
        </button>

        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${currentIndex === index ? 'active' : ''}`}
          >
            <img src={item} alt={`Carousel ${index}`} className="carousel-img" />
          </div>
        ))}

        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next Slide">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
