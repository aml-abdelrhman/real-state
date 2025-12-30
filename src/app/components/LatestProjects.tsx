'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReusableText from '../components/ReusableText';
import Arrows from './Arrows';
import '../styles/LatestProjects.css';

type Project = {
  id: number;
  title: string;
  description: string[][];
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: ' ',
    description: [
      ['الجادة الأولى للتطوير العقاري', 'هي أحد الشركات المتميزة', 'في الاستثمار والتطوير العقاري'],
      ['والتي يقع مقرها ...'],
    ],
    image: '/images/a.png',
  },
  {
    id: 2,
    title: 'جادة الأعمال (القيروان)',
    description: [
      ['النخيل 27 وحدة', '3,300 م²', 'نسبة الإنجاز 100%'],
      ['الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة والتي يقع مقرها ...'],
    ],
    image: '/images/hero1.png',
  },
  {
    id: 3,
    title: 'جادة الدرعية',
    description: [
      ['النخيل 30 وحدة', '4,200 م²', 'نسبة الإنجاز 90%'],
      ['الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة والتي يقع مقرها ...'],
    ],
    image: '/images/hero5.png',
  },
];

const LatestProjects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // تحديد ترتيب العناصر لعرض الكارت النشط في الوسط
  const getOrder = (index: number) => {
    if (index === activeIndex) return 2;
    if (index === (activeIndex - 1 + projects.length) % projects.length) return 1;
    if (index === (activeIndex + 1) % projects.length) return 3;
    return 4;
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="latest-projects-section" id="latest-projects">
      <div className="container">
        <div className="projects-top-bar">
          <ReusableText
            firstWord=" أحدث"
            secondWord="المشاريع "
            thirdWord="↙"
            
           
          />
<Arrows
  onPrev={prevProject}
  onNext={nextProject}
  leftColor="#ffffff"
  leftBackground="#4297a7"
  rightColor="#000000"
  rightBackground="#transparent"
/>

        </div>

        <div className="projects-wrapper">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={project.id}
                className={`project-card ${isActive ? 'active' : 'inactive'}`}
                style={{ order: getOrder(index) }}
                layout
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={isActive}
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <h3>{project.title}</h3>

                <div className="description-wrapper">
                  <div className="line">
                    {project.description[0].map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </div>
                  <div className="line line2">{project.description[1][0]}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
