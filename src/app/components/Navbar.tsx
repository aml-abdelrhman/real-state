'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/Navbar.css';
import NavButton from './NavButton';

const NAV_BUTTONS = [
  'أعمالنا',
  'تواصلوا معنا',
  'نبذة عن الشركة',
  'الرئيس',
  'أعضاء مجلس الإدارة',
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="First Avenue Logo"
            width={61}
            height={61}
            priority
            className="logo-img"
          />
          <div className="logo-texts">
            <span className="slogan-one">FIRST AVENUE</span>
            <span className="slogan-two">Real Estate Development</span>
            <span className="slogan-three"> الجادّة الأولى للتطوير العقاري </span>
          </div>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="button-container">
        {NAV_BUTTONS.map((text) => (
          <NavButton key={text} text={text} />
        ))}
      </div>

      {open && (
        <div className="mobile-menu">
          {NAV_BUTTONS.map((text) => (
            <NavButton key={text} text={text} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
