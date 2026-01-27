'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { useLang } from "../../context/LangContext";
import { lastProjectsEn } from "../i18n/lastProjectsEn";
import { lastProjectsAr } from "../i18n/lastProjectsAr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

/* ================= TYPES ================= */

export type ProjectType = 'سكني' | 'تجاري' | 'مكتبي';

export type Project = {
  id: number;
  title: string;
  type: ProjectType;
  image: string;
  description: string[][];
  details: string[];
  slug: string;
};

type CityKey = 'riyadh' | 'jeddah';

/* ================= TRANSLATIONS ================= */

const translations = {
  ar: {
    pageName: 'المشاريع',
    filters: {
      all: 'الكل',
      residential: 'سكني',
      commercial: 'تجاري',
      office: 'مكتبي',
    },
    noProjects: 'لا توجد مشروعات متاحة',
    cities: {
      riyadh: 'الرياض',
      jeddah: 'جدة',
    },
  },
  en: {
    pageName: 'Projects',
    filters: {
      all: 'All',
      residential: 'Residential',
      commercial: 'Commercial',
      office: 'Office',
    },
    noProjects: 'No projects available',
    cities: {
      riyadh: 'Riyadh',
      jeddah: 'Jeddah',
    },
  },
};

/* ================= CONSTANTS ================= */

const filterButtons: ('الكل' | ProjectType)[] = [
  'الكل',
  'مكتبي',
  'تجاري',
  'سكني',
];

const topImages = [
  { src: '/images/ryd.jpg', key: 'riyadh' },
  { src: '/images/jda.jpg', key: 'jeddah' },
] as const;

/* ================= PAGE ================= */

const OurProjectsPage: React.FC = () => {
  const { locale } = useLang();
  const t = translations[locale];

  const [filter, setFilter] = useState<'الكل' | ProjectType>('الكل');
  const [showGallery, setShowGallery] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityKey | null>(null);

  /* ===== DATA BY LANGUAGE ===== */

  const projectsFromLocale =
    locale === 'ar'
      ? Object.values(lastProjectsAr)
      : Object.values(lastProjectsEn);

  /* ===== ADD TYPE (NOT IN DATA) ===== */

  const allProjects: Project[] = projectsFromLocale.map((p, index) => {
    let type: ProjectType;

    if (index < 3) {
      type = 'مكتبي';
    } else {
      type = 'تجاري';
    }

    return {
      id: p.id,
      title: p.title,
      image: p.image,
      description: p.description,
      details: p.details,
      slug: p.slug,
      type,
    };
  });

  /* ===== FILTER ===== */

  const filteredProjects =
    filter === 'الكل'
      ? allProjects
      : allProjects.filter(p => p.type === filter);

  /* ===== HANDLERS ===== */

  const handleImageClick = (city: CityKey) => {
    setSelectedCity(city);
    setShowGallery(true);
  };

  /* ================= RENDER ================= */

  return (
    <>
      <Navbar />

      <Header  
        imageSrc="/images/about.jpg"
        pageName="المشاريع"
        selected={showGallery ? (selectedCity ? t.cities[selectedCity] : undefined) : undefined}
        showTitle={false}

     />

      {/* ===== TOP CITIES ===== */}
      {!showGallery && (
        <section className="projects-top-images">
          {topImages.map((img, idx) => (
            <div
              key={idx}
              className="project-top-image"
              onClick={() => handleImageClick(img.key)}
              style={{ backgroundImage: `url('${img.src}')` }}
            >
              <div className="image-overlay">
                                <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                
                <span className="overlay-text">
                  {t.cities[img.key]}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ===== PROJECTS ===== */}
      {showGallery && (
        <section className="projects-filter">
          {/* FILTER BAR */}
          <div className="filter-buttons">
            {filterButtons.map(btn => {
              const label =
                btn === 'الكل'
                  ? t.filters.all
                  : btn === 'سكني'
                  ? t.filters.residential
                  : btn === 'تجاري'
                  ? t.filters.commercial
                  : t.filters.office;

              return (
                <button
                  key={btn}
                  className={`filter-btn ${filter === btn ? 'active' : ''}`}
                  onClick={() => setFilter(btn)}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* GRID */}
          <div className="projects-grid">
            {filteredProjects.length === 0 ? (
              <div className="no-projects">
                {t.noProjects}
              </div>
            ) : (
              filteredProjects.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default OurProjectsPage;
