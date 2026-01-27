'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Arrows from './Arrows';
import ReusableText from './ReusableText';
import '../styles/AboutSections.css';
import { useLang } from '../../context/LangContext';

interface SlideItem {
  icon?: React.ReactNode;
  title: string;
  text: string | string[];
}

interface Slide {
  imageSrc: string;
  type: 'one-line' | 'two-line' | 'text-only';
  items: SlideItem[];
}

interface Props {
  slides: Slide[];
}

const translations = {
  ar: {
    slideTitles: [
      { first: "قيمنا", second: "الجوهرية", arrow: "↙" },
      { first: "عوامل", second: "الجوهرية", arrow: "↙" },
      { first: "عن", second: "الشركة", arrow: "↙" },
    ],
  },
  en: {
    slideTitles: [
      { first: "Our", second: "Values", arrow: "↙" },
      { first: "Core", second: "Factors", arrow: "↙" },
      { first: "About", second: "Us", arrow: "↙" },
    ],
  },
};

const AboutSectionOne: React.FC<Props> = ({ slides }) => {
  const { locale } = useLang();
  const t = translations[locale];

  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const prevSlide = () => setActiveIndex(prev => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setActiveIndex(prev => (prev + 1) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section-one">
      <div className="about-main-row">
        <div className="image-container">
          <Image src={slide.imageSrc} alt="about" fill className="Image" />

<div className={`about-overlay-top ${locale === "ar" ? "rtl" : "ltr"}`}>
  <ReusableText
    firstWord={t.slideTitles[activeIndex].first}
    secondWord={t.slideTitles[activeIndex].second}
    thirdWord={t.slideTitles[activeIndex].arrow}
    variant="custom"
    firstFontSize={activeIndex === 2 ? 25 : 20}
    secondFontSize={activeIndex === 2 ? 28 : 30}
    firstColor="#007bff"
    secondColor={activeIndex === 2 ? "#007bff" : "#000"}
    className={`${activeIndex === 2 ? "slide3" : ""} ${locale === "en" ? "english" : "arabic"}`}
  />
</div>
</div>

        <div className={`feature-slide ${slide.type === 'text-only' ? 'black-slide' : ''}`}>
          <div className="slide-info">
            {slide.type === 'one-line' && slide.items.map((item, index) => (
              <div key={index} className="slide-row one-line">
                {item.icon && <span className="slide-icon">{item.icon}</span>}
                <span className="slide-title">{item.title}</span>
                <span className="slide-text">
                  {Array.isArray(item.text)
                    ? item.text.map((line, i) => <span key={i}>{line}</span>)
                    : item.text
                  }
                </span>
              </div>
            ))}

            {slide.type === 'two-line' && slide.items.map((item, index) => (
              <div key={index} className="slide-row two-line">
                <div className="icon-title-row">
                  {item.icon && <span className="slide-icon">{item.icon}</span>}
                  <span className="slide-title">{item.title}</span>
                </div>
                <div className="slide-text">
                  {Array.isArray(item.text)
                    ? item.text.map((line, i) => <span key={i}>{line}</span>)
                    : item.text
                  }
                </div>
              </div>
            ))}

            {slide.type === 'text-only' && slide.items.map((item, index) => (
              <p key={index} className="slide-text-only">{item.text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="about-arrows">
        <Arrows
          onPrev={prevSlide}
          onNext={nextSlide}
          leftColor="#000"
          leftBorderColor="#000"
          rightColor="#000"
          rightBorderColor="#000"
          leftHoverBackground="#4297a7"
          rightHoverBackground="#4297a7"
        />
      </div>
    </section>
  );
};

export default AboutSectionOne;
