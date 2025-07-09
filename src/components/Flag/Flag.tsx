import React from 'react';
import type { Locale } from '@/context/Language';

interface FlagProps {
  locale: Locale;
  width?: number;
  height?: number;
}

const Flag: React.FC<FlagProps> = ({ locale, width = 24, height = 16 }) => {
  if (locale === 'es') {
    return (
      <svg viewBox="0 0 18 12" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="12" fill="#C60B1E" />
        <rect y="3" width="18" height="6" fill="#FFC400" />
      </svg>
    );
  }
  // default to United Kingdom flag for 'en'
  return (
    <svg viewBox="0 0 18 12" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="12" fill="#012169" />
      <path d="M0 0L18 12M18 0L0 12" stroke="#FFF" strokeWidth="2.4" />
      <path d="M0 0L18 12M18 0L0 12" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M9 0v12M0 6h18" stroke="#FFF" strokeWidth="3" />
      <path d="M9 0v12M0 6h18" stroke="#C8102E" strokeWidth="1.5" />
    </svg>
  );
};

export default Flag;
