import React from 'react';
import '../styles/Navbar.css';

interface NavButtonProps {
  text: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text }) => {
  return (
    <button className="nav-btn">
      <span className="nav-arrow">↑</span>
      <span>{text}</span>
    </button>
  );
};

export default NavButton;
