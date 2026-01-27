"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/AboutSectionTwo.css";

import Arrows from "./Arrows";
import ReusableText from "./ReusableText";
import { useLang } from "../../context/LangContext";

interface MessageItem {
  title: string;
  messages: string[];
  name: string;
  imageSrc: string;
}

interface Props {
  messages: MessageItem[];
  backgroundSrc: string;
}

const translations = {
  ar: {
    titleWord1: "كلمة",
    arrow: "↙",
  },
  en: {
    titleWord1: "Message",
    arrow: "↙",
  },
};

const AboutSectionTwo: React.FC<Props> = ({ messages, backgroundSrc }) => {
  const { locale } = useLang();
  const t = translations[locale];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % messages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  const activeMessage = messages[activeIndex];

  return (
    <section className="about-section-two" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* الخلفية */}
      <div
        className="background-blur"
        style={{ backgroundImage: `url(${backgroundSrc})` }}
      />

      {/* ================= اليسار ================= */}
      <div className="half-left">
        <div className="about-four-box">
          <Image src="/images/aboutFour.png" alt="About Four" fill priority />

          {/* نص فوق الصورة */}
          <div className="text-overlay">

            {/* ===== عنوان + السهم ===== */}
<div className={`overlay-title ${locale === "ar" ? "rtl" : "ltr"}`}>
             <ReusableText
  firstWord={t.titleWord1}
  secondWord={activeMessage.title}
  thirdWord=""
  variant="custom"
  firstFontSize={24}
  secondFontSize={17}
  firstColor="#007bff"
  secondColor="#000"
  className={locale === "en" ? "english" : "arabic"}
/>

              <span
                style={{
                  fontSize: 44,
                  color: "#000",
                  marginLeft: "5px",
                  lineHeight: "1",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {t.arrow}
              </span>
            </div>

            {/* ===== الرسائل والفقرات ===== */}
            <div className="overlay-messages">
              {activeMessage.messages.map((msg, idx) => (
                <p key={idx} className="overlay-paragraph">
                  {msg}
                </p>
              ))}

              {/* اسم الشخص باللون الأزرق */}
              <p className="overlay-name">
                {activeMessage.name}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= اليمين ================= */}
      <div className="half-right">
        <div className="right-image-wrapper">
          <Image src={activeMessage.imageSrc} alt="Person" fill />
        </div>

        {/* الأسهم */}
        <div className="about-arrows">
          <Arrows
            onPrev={prevSlide}
            onNext={nextSlide}
            leftColor="#000"
            leftBorderColor="#000"
            rightColor="#000"
            rightBorderColor="#000"
            leftHoverBackground="#4297a7"
            rightHoverBackground="#4297a7"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
