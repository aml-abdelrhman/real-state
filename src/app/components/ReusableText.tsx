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
}

const ReusableText: React.FC<ReusableTextProps> = ({
  firstWord,
  secondWord,
  thirdWord,
  variant = "default",
  firstFontSize = 24,
  secondFontSize = 24,
  thirdFontSize = 30
}) => {
  return (
    <div className={`reusable-text ${variant}`}>
      <span className="word" style={{ fontSize: `${firstFontSize}px` }}>{firstWord}</span>
      <span className="wordtwo" style={{ fontSize: `${secondFontSize}px` }}>{secondWord}</span>
      {thirdWord && <span className="wordthree" style={{ fontSize: `${thirdFontSize}px` }}>{thirdWord}</span>}
    </div>
  );
};

export default ReusableText;
