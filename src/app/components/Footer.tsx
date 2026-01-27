'use client';

import React from 'react';
import Image from 'next/image';
import '../styles/Footer.css';
import ar from "../i18n/ar";
import en from "../i18n/en";
import { useLang } from "../../context/LangContext";

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
  const { locale } = useLang();
  const t = locale === "ar" ? ar : en;

  return (
<footer className="footer" dir={locale === "ar" ? "rtl" : "ltr"}>
      {footerVectors.map((item, index) => (
        <div key={index} className={`footer-vector ${item.className}`}>
          <Image src={item.src} alt="" width={22} height={22} />
        </div>
      ))}

      <div className="footer-container">
        {/* Logo */}
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
            <span className="slogan-one">{t.footer.slogan.enTitle}</span>
            <span className="slogan-two">{t.footer.slogan.enSubTitle}</span>
            <span className="slogan-three">{t.footer.slogan.arTitle}</span>
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>{t.footer.company.title}</h4>
          <ul>
            {t.footer.company.links.map((item, i) => (
              <li key={i}>
                <a href="#">{item.label}</a>
                <span className="arrow">{item.arrow}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="footer-col">
          <h4>{t.footer.projects.title}</h4>
          <ul>
            {t.footer.projects.links.map((item, i) => (
              <li key={i}>
                <a href="#">{item.label}</a>
                <span className="arrow">{item.arrow}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>{t.footer.contact.title}</h4>
          <ul>
            <li><span className="contact-text">{t.footer.contact.address}</span></li>
            <li><span className="contact-text">{t.footer.contact.phone}</span></li>
            <li><span className="contact-text">{t.footer.contact.email}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;
