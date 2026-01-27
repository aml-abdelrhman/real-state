'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReusableText from './ReusableText';
import Arrows from './Arrows';
import '../styles/Achievements.css';
import ar from '../i18n/ar';
import en from '../i18n/en';
import { useLang } from '../../context/LangContext';
import { mixLang ,miiLang} from '../i18n/types';


export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevProject = () => {
    setActiveIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setActiveIndex(prev => (prev + 1) % projects.length);
  };
  const { locale } = useLang();

  const t = locale === "ar" ? ar : en;
  const projects = [
  {
    src: '/images/web.webp',
    title:t.mix.title,
    date: t.mix.date,
    description: t.mix.description,
  },
  {
    src: '/images/web(1).webp',
    title:t.mix.title,
    date: t.mix.date,
    description: t.mix.description,
  }
];

  return (
    <section className="real-estate-section">
      <div className="banner" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                      <ReusableText
                        firstWord={t.mix.first}
                        secondWord={t.mix.second}
                        thirdWord={t.mix.third} 
         
          firstFontSize={34}
          secondFontSize={34}
          thirdFontSize={45}
        />
        <Arrows
          onPrev={prevProject}
          onNext={nextProject}
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

      <div className="main-container">
        <div className="cards-wrapper">
          {projects.map((project, index) => {
            let order = index;
            if (activeIndex === 0) order = index;
            else if (activeIndex === 1) order = index === 0 ? 1 : 0;

            return (
              <div
                key={index}
                className="card"
                style={{ order }}
              >
                <Image src={project.src} alt={`Project ${index + 1}`} width={300} height={200} />
                <span className="date">{project.date}</span>
                <h3 className="card-title">{project.title}</h3>
                <p className="description">{project.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
