'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '../../context/LangContext';
import '../styles/Navbar.css';
import NavButton from './NavButton';

const NAV_BUTTONS_KEYS = ['works', 'about', 'contact', 'chairman', 'board', 'last'] as const;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, t, setLocale } = useLang();

  const switchLanguage = () => setLocale(locale === 'ar' ? 'en' : 'ar');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (key: typeof NAV_BUTTONS_KEYS[number]) => {
    if (key === 'about') return '/company';
    if (key === 'works') return '/';
    if (key === 'board') return '/InvestorsRelations';
    if (key === 'chairman') return '/Achievements';
    if (key === 'contact') return '/our-projects';
    if (key === 'last') return '/contact';
    return `/${key}`;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-wrapper">
        <div className="logo">
          <Image
            src={scrolled ? '/images/logo2.png' : '/images/logo.png'}
            alt="Logo"
            width={61}
            height={61}
          />
          <div className="logo-texts">
            <span className="slogan-one">FIRST AVENUE</span>
            <span className="slogan-two">Real Estate Development</span>
            <span className="slogan-three">الجادّة الأولى للتطوير العقاري</span>
          </div>
        </div>
      </div>

      <div className={`button-container ${open ? 'open' : ''}`}>
        {NAV_BUTTONS_KEYS.map((key) => (
          <Link key={key} href={getHref(key)}>
            <NavButton text={t?.nav?.[key] || key} />
          </Link>
        ))}
        <button className="lang-btn" onClick={switchLanguage}>
          {locale === 'ar' ? 'EN' : 'ع'}
        </button>
      </div>

      <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-menu">
          {NAV_BUTTONS_KEYS.map((key) => (
            <Link key={key} href={getHref(key)}>
              <NavButton text={t?.nav?.[key] || key} />
            </Link>
          ))}
          <button className="lang-btn" onClick={switchLanguage}>
            {locale === 'ar' ? 'EN' : 'ع'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
