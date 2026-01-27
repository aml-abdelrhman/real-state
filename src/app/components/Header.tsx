'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Header.css';

import { pagesEn } from '../i18n/pagesEn';
import { pagesAr } from '../i18n/pagesAr';
import { useLang } from '../../context/LangContext';
import { PageKey } from '../i18n/types';

type HeaderLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  imageSrc: string;
  pageName?: PageKey;
  selected?: PageKey | string;
  topLink?: HeaderLink;
  showBar?: boolean;    // للتحكم في ظهور البار
  showTitle?: boolean;  // للتحكم في ظهور العنوان (title)
};

const Header: React.FC<HeaderProps> = ({
  imageSrc,
  pageName,
  selected,
  topLink,
  showBar = true,
  showTitle = true,     
}) => {
  const { locale } = useLang();

  const t = locale === 'ar' ? pagesAr : pagesEn;

  const finalPage = pageName || selected || "الرئيسية";
  const langClass = locale === "ar" ? "lang-ar" : "lang-en";

  return (
<div className={`header-wrapper ${langClass}`}>
      <Image
        src={imageSrc}
        alt={t[finalPage as PageKey]}
        fill
        priority
        className="header-image"
      />

      {/* Title */}
      {showTitle && (pageName || selected) && (
        <h1 className="header-title">
          {selected ? (t[selected as PageKey] ?? selected) : t[pageName!]}
        </h1>
      )}

      {/* Top Link */}
      {topLink && (
        <Link href={topLink.href} className="header-top-link">
          {topLink.label}
        </Link>
      )}

      {/* Header Bar */}
      {showBar && (
        <div className="header-bar">
          <Link href="/" className="header-home">
            {t['الرئيسية']}
          </Link>

          <span className="header-separator">&gt;</span>
          <span className="header-current">
            {pageName ? t[pageName] : ""}
          </span>

          {selected && (
            <>
              <span className="header-separator">&gt;</span>
              <span className="header-selected">
                {t[selected as PageKey] ?? selected}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
