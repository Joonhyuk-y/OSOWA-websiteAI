import React from 'react';

interface OsowaLogoProps {
  className?: string;
}

const OsowaLogo: React.FC<OsowaLogoProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 400 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M60 50C60 30 80 20 100 30C120 40 120 70 100 80C80 90 60 70 60 50Z" />
        <path d="M140 30C120 30 110 50 120 70C130 90 160 90 170 70C180 50 160 30 140 30Z" />
        <path d="M200 30C180 30 170 40 180 60C190 80 210 80 220 60C230 40 220 30 200 30Z" fillOpacity="0.2" />
        <path d="M240 30L260 80L280 30" strokeWidth="10" stroke="currentColor" fill="none" />
        <path d="M300 30L320 80" strokeWidth="10" stroke="currentColor" fill="none" />
        <path d="M340 30L320 80" strokeWidth="10" stroke="currentColor" fill="none" />
      </g>
      <text x="120" y="120" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="currentColor">RESTAURANT</text>
      <text x="100" y="150" fontFamily="Arial" fontSize="18" fill="currentColor">오소와 레스토랑</text>
    </svg>
  );
};

export default OsowaLogo;