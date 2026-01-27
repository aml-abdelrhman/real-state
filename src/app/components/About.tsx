'use client';

import React from 'react';
import Image from 'next/image';
import '../styles/About.css';
import ReusableText from './ReusableText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useLang } from '../../context/LangContext';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export type Box = {
  icon?: IconProp;
  number: string;
  desc: string;
};

type AboutContent = {
  overlayFirst: string;
  overlaySecond: string;
  text: string;
  boxes: Box[];
};

const About: React.FC = () => {
  const { t, locale } = useLang();

  const about: AboutContent | undefined = t?.about;

  if (!about) return null;

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="about-image-wrapper"
          initial={{ x: locale === 'ar' ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="about-image">
            <Image
              src="/images/about.jpg"
              alt="About Background"
              fill
              className="about-bg-image"
              priority
            />

            <div
              className="about-overlay-top"
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              <ReusableText
                firstWord={about.overlayFirst}
                secondWord={about.overlaySecond}
              />
              <span className="overlay-arrow">{locale === 'ar' ? '↙' : '↘'}</span>
            </div>

            <p className="about-text">{about.text}</p>
          </div>
        </motion.div>

        <div className="about-box">
          {about.boxes.map((box: Box, idx: number) => (
            <motion.div
              key={idx}
              className="small-box-second"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {box.icon && (
                <div className="icon-circle">
                  <FontAwesomeIcon icon={box.icon} size="lg" />
                </div>
              )}

              <div className="box-text">
                <div className="box-number-text">{box.number}</div>
                <div className="box-desc-text">{box.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
