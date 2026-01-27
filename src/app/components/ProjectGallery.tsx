'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLang } from '../../context/LangContext';
import Arrows from './Arrows';
import ReusableText from './ReusableText';
import '../styles/ProjectGallery.css';

type Props = {
  images: string[];
};

const ProjectGallery: React.FC<Props> = ({ images }) => {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images]);

  const prevImage = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoPlay();
  };

  const nextImage = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex((prev) => (prev + 1) % images.length);
    startAutoPlay();
  };

  const visibleImages = [
    ...images.slice(activeIndex, activeIndex + 3),
    ...(activeIndex + 3 > images.length ? images.slice(0, (activeIndex + 3) % images.length) : []),
  ];

  const uxFirstWord = t?.ux?.firstWord ?? '';
  const uxSecondWord = t?.ux?.secondWord ?? '';
  const uxThirdWord = t?.ux?.thirdWord ?? '';

  return (
    <section className="latest-projects-section">
      <div className="container">
        <div className="projects-top-bar">
          <ReusableText
            firstWord={uxFirstWord}
            secondWord={uxSecondWord}
            thirdWord={uxThirdWord}
          />
          <Arrows
            onPrev={prevImage}
            onNext={nextImage}
            leftColor="#808080"
            leftBorderColor="#808080"
            rightColor="#808080"
            rightBorderColor="#808080"
            leftBackground="transparent"
            rightBackground="transparent"
            rightHoverBackground="#4297a7"
            leftHoverBackground="#4297a7"
          />
        </div>

        <div className="projects-wrapper">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => setLightboxIndex((activeIndex + index) % images.length)}
            >
              <Image
                src={img}
                alt={`gallery-${index}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}></div>
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setLightboxIndex(null)}>×</button>
            <div className="lightbox-img-wrapper">
              <Image
                src={images[lightboxIndex]}
                alt={`lightbox-${lightboxIndex}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
