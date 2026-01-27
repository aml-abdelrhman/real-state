'use client';

import React, { useState, useEffect, ReactNode } from 'react';

type CarouselProps = {
  items: ReactNode[];
  interval?: number;
};

const Carousel: React.FC<CarouselProps> = ({ items, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % items.length);

  useEffect(() => {
    const id = setInterval(nextSlide, interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <div className="carousel-wrapper">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel-slide">{items[activeIndex]}</div>

      <button className="carousel-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
