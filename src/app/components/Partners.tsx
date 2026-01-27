"use client";

import React from "react";
import Image from "next/image";
import "../styles/Partners.css";
import ReusableText from "./ReusableText";
import ar from "../i18n/ar";
import en from "../i18n/en";
import { useLang } from "../../context/LangContext";
const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
];
const Partners: React.FC = () => {
  const { locale } = useLang();

  const t = locale === "ar" ? ar : en;
  return (
    <div className="partners-container">
      <div className="partners-title" dir={locale === "ar" ? "rtl" : "ltr"}>
        <ReusableText
          firstWord={t.mixx.first}
          secondWord={t.mixx.second}
          thirdWord={t.mixx.third}
        />
        <span className="title-line"></span>
      </div>

      <div className="partners-marquee">
        <div className="partners-track">
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className="logo-wrapper">
              <Image src={logo} alt="" width={180} height={90} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
