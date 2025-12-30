'use client';

import React from 'react';
import '../styles/Arrows.css';

type HeroArrowsProps = {
  onPrev?: () => void;
  onNext?: () => void;
  leftColor?: string;
  leftBackground?: string;
  rightColor?: string;
  rightBackground?: string;
};

const HeroArrows: React.FC<HeroArrowsProps> = ({
  onPrev,
  onNext,
  leftColor = '#ffffff',
  leftBackground = '#4297a7',
  rightColor = '#ffffff',
  rightBackground = 'transparent',
}) => {
  return (
    <div className="hero-arrows-wrapper">
      <button
        className="right"
        onClick={onNext}
        aria-label="Next slide"
        style={{
          color: rightColor,
          borderColor: rightColor,
          backgroundColor: rightBackground,
        }}
      >
        →
      </button>
      <button
        className="left"
        onClick={onPrev}
        aria-label="Previous slide"
        style={{
          color: leftColor,
          backgroundColor: leftBackground,
        }}
      >
        ←
      </button>
    </div>
  );
};

export default HeroArrows;
