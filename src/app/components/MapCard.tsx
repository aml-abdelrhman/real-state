'use client';

import Image from 'next/image';
import ReusableText from './ReusableText';
import '../styles/MapCard.css';
import { useLang } from '../../context/LangContext';

import { miLang ,miiLang} from '../i18n/types';
import ar from '../i18n/ar';
import en from '../i18n/en';

const MapCard = () => {
  const openPage = () => {
    window.location.href = '/your-page';
  };

  const { locale } = useLang();

  const t = locale === "ar" ? ar : en;

  return (
    <section className="map-section">

      <div className="reusable-text-overlay"dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                      <ReusableText
                        firstWord={t.mi.first}
                        secondWord={t.mi.second}
                        thirdWord={t.mi.third} 
                              />                            
                  </div>

      <div className="side-image-wrapper">
        <Image
          src="/images/mapp.png"
          alt="map"
          fill
          className="side-image"
          priority
        />

        <button
          className="map-button"
          onClick={openPage}
          data-tooltip={t.mii.btn}
        >
          ⬤
        </button>

        <button
          className="map-button2"
          onClick={openPage}
          data-tooltip={t.mii.btn2}
        >
          ⬤
        </button>
      </div>
    </section>
  );
};

export default MapCard;
