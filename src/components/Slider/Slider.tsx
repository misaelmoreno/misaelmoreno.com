/* 
  This file defines a Slider component for a React application. 
  The Slider component displays a series of slides that can be navigated manually or automatically.
  It supports autoplay functionality with a customizable delay between slides.
  The component also includes controls for navigating to the previous or next slide.
*/

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import '@/styles/Slider.scss';

/* 
  The Slider component renders a slideshow with optional autoplay functionality.
  It displays slides with titles and subtitles, and includes navigation controls.
*/
const Slider: React.FC<SliderProps> = ({ slides, autoplay = false, delay = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* 
    The nextSlide function advances the slideshow to the next slide.
    It wraps around to the first slide after the last slide.
  */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  /* 
    The prevSlide function moves the slideshow to the previous slide.
    It wraps around to the last slide if currently on the first slide.
  */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  /* 
    The useEffect hook sets up an interval to automatically advance the slides if autoplay is enabled.
    The interval is cleared when the component is unmounted or when autoplay/delay changes.
  */
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(nextSlide, delay);
      return () => clearInterval(interval);
    }
  }, [autoplay, delay, nextSlide]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider__slide ${index === currentSlide ? 'slider__slide--active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slide.imagePath})` }}
        >
          <div className="slider__overlay">
            <div className="slider__text-container">
              <h2 className="slider__title">{slide.title}</h2>
              <p className="slider__subtitle">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="slider__controls">
        <div className="slider__indicator">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`slider__indicator-line ${index === currentSlide ? 'slider__indicator-line--active' : ''}`}
            />
          ))}
        </div>
        <div className="slider__buttons">
          <button className="slider__button slider__button--prev" onClick={prevSlide}>❮</button>
          <button className="slider__button slider__button--next" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
