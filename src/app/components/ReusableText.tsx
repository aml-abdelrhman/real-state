'use client';

import React from "react";
import '../styles/ReusableText.css';

interface ReusableTextProps {
  firstWord: string;
  secondWord: string;
  thirdWord?: string;
  variant?: "default" | "blackArrow" | "custom"; 
}

const ReusableText: React.FC<ReusableTextProps> = ({
  firstWord,
  secondWord,
  thirdWord,
  variant = "default",
}) => {
  return (
    <div className={`reusable-text ${variant}`}>
      <span className="word">{firstWord}</span>
      <span className="wordtwo">{secondWord}</span>
      {thirdWord && <span className="wordthree">{thirdWord}</span>}
    </div>
  );
};

export default ReusableText;
