'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import '../styles/Hero.css';
import { motion, AnimatePresence } from 'framer-motion';
import Arrows from './Arrows';

const slides = [
  { bg: '/images/hero1.png', fg: '/images/hero2.png', title: 'استثمار عقاري واعد' },
  { bg: '/images/a.png', fg: '/images/aa.png', title: 'تطوير حضري مبتكر' },
  { bg: '/images/hero5.png', fg: '/images/hero6.png', title: 'تطوير حضري مبتكر' },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero-section relative">
      <Navbar />
      {slide.bg && (
        <Image
          src={slide.bg}
          alt={`Background ${current}`}
          fill
          sizes="100vw"
          className="hero-bg"
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -2 }}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          exit={{}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <Image
            src={slide.fg}
            alt={`Foreground ${current}`}
            fill
            sizes="100vw"
            className="hero-image"
          />
        </motion.div>
      </AnimatePresence>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h2>{slide.title}</h2>
            <p>
              الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة في الاستثمار والتطوير العقاري،
              والتي يقع مقرها في الرياض. حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة
              في صناعة فرص الاستثمار المستدام من خلال التطوير العقاري المبتكر.
            </p>
            <button className="hero-btn">
              أعمالنا
              <span className="first-arrow">↖</span>
            </button>
          </div>

          <Arrows
            onPrev={() => setCurrent((current - 1 + slides.length) % slides.length)}
            onNext={() => setCurrent((current + 1) % slides.length)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
