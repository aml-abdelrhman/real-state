'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/LogoWithLoader.css';

const LogoWithLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // مدة التحميل التجريبية
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="logo-container">
      <div className="logo">
        <Image
          src={loading ? '/images/logo.png' : '/images/logo2.png'}
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

      {loading && (
        <div className="loader">
          <span className="loader-text">Loading</span>
          <div className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoWithLoader;
