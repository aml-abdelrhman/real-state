'use client';

import React, { useState } from 'react';
import '../styles/Arrows.css';

type HeroArrowsProps = {
  onPrev?: () => void;
  onNext?: () => void;
  leftColor?: string;
  leftBackground?: string;
  leftBorderColor?: string;
  leftHoverColor?: string;
  leftHoverBorderColor?: string;
  leftHoverBackground?: string; 

  rightColor?: string;
  rightBackground?: string;
  rightBorderColor?: string;
  rightHoverColor?: string;
  rightHoverBorderColor?: string;
  rightHoverBackground?: string; 
};

const HeroArrows: React.FC<HeroArrowsProps> = ({
  onPrev,
  onNext,
  leftColor = '#fff',
  leftBackground = 'transparent',
  leftBorderColor = '#fff',
  leftHoverColor = '#fff',
  leftHoverBorderColor = '#4297a7',
  leftHoverBackground = '#4297a7', 

  rightColor = '#fff',
  rightBackground = 'transparent',
  rightBorderColor = '#fff',
  rightHoverColor = '#fff',
  rightHoverBorderColor = '#4297a7',
  rightHoverBackground = '#4297a7', 
}) => {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <div className="hero-arrows-wrapper">
      {/* LEFT / PREV */}
      <button
        type="button"
        className="arrow left"
        onClick={onPrev}
        onMouseEnter={() => setLeftHover(true)}
        onMouseLeave={() => setLeftHover(false)}
        style={{
          color: leftHover ? leftHoverColor : leftColor,
          background: leftHover ? leftHoverBackground : leftBackground,
          border: `1px solid ${leftHover ? leftHoverBorderColor : leftBorderColor}`,
        }}
        aria-label="Previous slide"
      >
        &lt;
      </button>

      {/* RIGHT / NEXT */}
      <button
        type="button"
        className="arrow right"
        onClick={onNext}
        onMouseEnter={() => setRightHover(true)}
        onMouseLeave={() => setRightHover(false)}
        style={{
          color: rightHover ? rightHoverColor : rightColor,
          background: rightHover ? rightHoverBackground : rightBackground,
          border: `1px solid ${rightHover ? rightHoverBorderColor : rightBorderColor}`,
        }}
        aria-label="Next slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default HeroArrows;
