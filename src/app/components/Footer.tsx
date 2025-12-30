'use client';

import React from 'react';
import Image from 'next/image';
import '../styles/Footer.css';

const footerVectors = [
  { src: '/svg/vector1.png', className: 'fvector1' },
  { src: '/svg/vector2.png', className: 'fvector2' },
  { src: '/svg/vector3.png', className: 'fvector3' },
  { src: '/svg/vector4.png', className: 'fvector4' },
  { src: '/svg/vector5.png', className: 'fvector5' },
  { src: '/svg/vector6.png', className: 'fvector6' },
  { src: '/svg/vector7.png', className: 'fvector7' },
  { src: '/svg/vector8.png', className: 'fvector8' },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      
      {footerVectors.map((item, index) => (
        <div
          key={index}
          className={`footer-vector ${item.className}`}
        >
          <Image
            src={item.src}
            alt={`Footer Vector ${index + 1}`}
            width={22}
            height={22}
          />
        </div>
      ))}

      <div className="footer-container">
        <div className="footer-col footer-col-logo">
          <Image
            src="/images/logo.png"
            alt="First Avenue Logo"
            width={81}
            height={81}
            priority
            className="logo-img"
          />
          <div className="logo-texts">
            <span className="slogan-one">FIRST AVENUE</span>
            <span className="slogan-two">Real Estate Development</span>
            <span className="slogan-three">
              الجادّة الأولى للتطوير العقاري
            </span>
          </div>
        </div>

        <div className="footer-col">
          <h4>الشركة</h4>
          <ul>
            <li><a href="#">كلمة الرئيس</a><span className="arrow">↖</span></li>
            <li><a href="#">نبذة عن الشركة</a><span className="arrow">↖</span></li>
            <li><a href="#">تواصلوا معنا</a><span className="arrow">↖</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>المشاريع</h4>
          <ul>
            <li><a href="#">الفريق التنفيذي</a><span className="arrow">↖</span></li>
            <li><a href="#">كبار التنفيذيين</a><span className="arrow">↖</span></li>
            <li><a href="#">أعمالنا</a><span className="arrow">↖</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>معلومات الاتصال</h4>
          <ul>
            <li>
              <span className="contact-text">
                الرياض: طريق الأمير تركي بن عبد العزيز الأول - حي حطين مبنى 6957 - وحدة رقم 3
              </span>
            </li>
            <li><span className="contact-text">٠٩٦٦١١٢٣٦٢٠٠٩+</span></li>
            <li><span className="contact-text">info@the1stavenue.com</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة . شركة الجادة الاولى للتطوير العقاري 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
