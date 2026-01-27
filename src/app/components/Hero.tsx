'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLang } from '../../context/LangContext';
import '../styles/Hero.css';
import { motion, AnimatePresence } from 'framer-motion';
import Arrows from './Arrows';
import Image from 'next/image';
import Link from 'next/link';

type HeroTitleKey = 'title1' | 'title2';

const slidesData: { bg: string; titleKey: HeroTitleKey }[] = [
  { bg: '/images/hero1.png', titleKey: 'title1' },
  { bg: '/images/hero7.png', titleKey: 'title1' },
];

const Hero: React.FC = () => {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);

  // تحقق من وجود t.hero
  const slides = slidesData.map((slide) => ({
    ...slide,
    title: t?.hero?.[slide.titleKey] || 'Title not found',
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section className="hero-section relative">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero-bg"
          initial={{ x: 80, opacity: 1, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1.1 }}
          exit={{ x: -80, opacity: 1 }}
          transition={{
            x: { type: 'tween', duration: 0.13 },
            scale: { duration: 5, ease: 'linear' },
          }}
        >
          <Image
            src={slide.bg}
            alt="Hero Background"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h2
              initial={{ y: 90, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', duration: 0.6 }}
            >
              {slide.title}
            </motion.h2>

            <motion.p
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', duration: 0.6, delay: 0.15 }}
            >
              {t?.hero?.desc || ''}
            </motion.p>

            <Link href="/LatestProjects">
              <button className="hero-btn">
                {t?.hero?.btn || 'Our Works'}
                <span className="first-arrow">↖</span>
              </button>
            </Link>
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
