'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../i18n/types';
import { useLang } from '../../context/LangContext';
import Navbar from './Navbar';
import '../styles/ProjectHero.css';

type ProjectHeroProps = {
  hero?: string;
  title: string;
  boxes?: Box[];
  onImageLoad?: () => void;
};

const ProjectHero: React.FC<ProjectHeroProps> = ({
  hero,
  title,
  boxes = [],
  onImageLoad,
}) => {
  const { t } = useLang();

  return (
    <section className="project-hero-wrapper">
      <Navbar />

      {hero && (
        <div className="project-hero-image">
          <Image
            src={hero}
            alt={title}
            fill
            priority
            style={{ objectFit: 'cover' }}
            onLoadingComplete={onImageLoad}
          />
        </div>
      )}

      <div className="project-hero-overlay">
        <div className="project-hero-content">
          <div className="hero-right">
            <h1 className="project-hero-title">{title}</h1>

            <div className="boxes-container">
              {boxes.map((box, i) => (
                <div className="box" key={i}>
                  {box.icon && (
                    <div className="icon-circle">
                      <FontAwesomeIcon icon={box.icon} />
                    </div>
                  )}
                  <div>
                    <div className="box-desc-text">{box.desc}</div>
                    <div className="box-number-text">{box.number}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="interest-btn">
            {t.ui.interestBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
