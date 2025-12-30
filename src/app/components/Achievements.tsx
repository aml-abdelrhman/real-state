'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ReusableText from '../components/ReusableText';
import Arrows from './Arrows';
import '../styles/Achievements.css';

const projects = [
  {
    src: '/images/project1.jpg',
    title: 'حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة...',
    date: '12 أبريل 2025',
    description: 'الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة في الاستثمار والتطوير العقاري، والتي يقع مقرها في الرياض. حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة في صناعة فرص الاستثمار.'
  },
  {
    src: '/images/map3.jpg',
    title: 'حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة...',
    date: '12 أبريل 2025',
    description: 'الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة في الاستثمار والتطوير العقاري، والتي يقع مقرها في الرياض. حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة في صناعة فرص الاستثمار.'
  },
  {
    src: '/images/map2.jpg',
    title: 'حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة...',
    date: '12 أبريل 2025',
    description: 'الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة في الاستثمار والتطوير العقاري، والتي يقع مقرها في الرياض. حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة في صناعة فرص الاستثمار.'
  }
];


export default function Achievements() {
  const [startIndex, setStartIndex] = useState(0);

  const prevProject = () => {
    setStartIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setStartIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(startIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section className="real-estate-section">
      <div className="banner">
        <ReusableText firstWord="المركز" secondWord="الإعلامي" thirdWord="↙" firstFontSize={34} secondFontSize={34} thirdFontSize={45} />
<Arrows
  onPrev={prevProject}
  onNext={nextProject}
  leftColor="#000000"
  leftBackground="transparent"
  rightColor="rgba(0,0,0,0.6)"  // أسود باهت
  rightBackground="transparent"
/>
      </div>

      <div className="main-container">
        <div className="cards-wrapper">
          {getVisibleProjects().map((project, index) => (
            <div key={index} className="card">
              <Image src={project.src} alt={`Project ${index + 1}`} width={300} height={200} />
              <span className="date">{project.date}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
