'use client';

import React from "react";
import '../styles/ReusableText.css';

interface ReusableTextProps {
  firstWord: string;
  secondWord: string;
  thirdWord?: string;
  variant?: "default" | "blackArrow" | "custom"; 
  firstFontSize?: number;   
  secondFontSize?: number;  
  thirdFontSize?: number;
  firstColor?: string;   // لون الكلمة الأولى
  secondColor?: string;  // لون الكلمة الثانية
  thirdColor?: string;   // لون الكلمة الثالثة
  className?: string;    // أي كلاس إضافي
}

const ReusableText: React.FC<ReusableTextProps> = ({
  firstWord,
  secondWord,
  thirdWord,
  variant = "default",
  firstFontSize = 30,
  secondFontSize = 30,
  thirdFontSize = 30,
    firstColor="#4297a7",
  secondColor = "#000",
  thirdColor = "#000",
  className = "",
}) => {
  return (
    <div className={`reusable-text ${variant} ${className}`}>
      <span className="word" style={{ fontSize: `${firstFontSize}px`, color: firstColor }}>
        {firstWord}
      </span>
      <span className="wordtwo" style={{ fontSize: `${secondFontSize}px`, color: secondColor }}>
        {secondWord}
      </span>
      {thirdWord && (
        <span className="wordthree" style={{ fontSize: `${thirdFontSize}px`, color: thirdColor }}>
          {thirdWord}
        </span>
      )}
    </div>
  );
};

export default ReusableText;
