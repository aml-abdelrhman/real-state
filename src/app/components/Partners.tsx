'use client';

import React from "react";
import Image from "next/image";
import '../styles/Partners.css';
import ReusableText from "./ReusableText";

// اللوجوهات
const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
];

const vectors = [
  { src: "/svg/vector1.png", className: "vector1" },
  { src: "/svg/vector2.png", className: "vector2" },
  { src: "/svg/vector3.png", className: "vector3" },
  { src: "/svg/vector4.png", className: "vector4" },
  { src: "/svg/vector5.png", className: "vector5" },
  { src: "/svg/vector6.png", className: "vector6" },
  { src: "/svg/vector7.png", className: "vector7" },
  { src: "/svg/vector8.png", className: "vector8" },
];

const Partners: React.FC = () => {
  return (
    <div className="partners-container">
      
      {vectors.map((v, index) => (
        <div key={index} className={`arabic-symbol vector ${v.className}`}>
          <Image
            src={v.src}
            alt={`Vector ${index + 1}`}
            width={22}  
            height={22} 
          />
        </div>
      ))}

      <ReusableText firstWord="شركاء" secondWord="النجاح" />

      <div className="partners-logos">
        {logos.map((logo, index) => (
          <span key={index} className="logo-wrapper">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={138}
              height={138}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Partners;
