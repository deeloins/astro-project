'use client';

import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const carouselData = [
    {
      title: "Astro M940",
      subtitle: "Long Driving Smd From $20,459",
      promo: "Big Promo available",
      backgroundImage: "/orange-car.svg",
      textPosition: {
        left: '13.16%',
        bottom: '18.96%'
      }
    },
    {
      title: "Astro G series 923",
      subtitle: "Long Driving Smd From $40,459",
      promo: "Big Promo available",
      backgroundImage: "/white-sport.svg",
      textPosition: {
        left: '12.37%',
        top: '35.92%'
      }
    },
    {
      title: "Astro Slick Zoomer",
      subtitle: "Long Driving Smd From $50,459",
      promo: "Big Promo available",
      backgroundImage: "/mini-coupe.svg",
      textPosition: {
        left: '7.14%',
        top: '28.6%'
      }
    },
    {
      title: "Astro Muscle 603",
      subtitle: "Long Driving Smd From $60,499",
      promo: "Big Promo available",
      backgroundImage: "/pexels-garvin.svg",
      textPosition: {
        left: '8.6%',
        top: '32.82%'
      }
    }
  ];

  const currentData = carouselData[currentSlide];

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] lg:h-[calc(100vh-8.28vh)] mx-auto overflow-hidden bg-gray-300">
      {/* Background Images with Transitions */}
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.backgroundImage}
            alt={`Car ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(269.54deg, rgba(236, 236, 236, 0.1) 7.33%, rgba(165, 165, 165, 0.1) 25.19%, rgba(0, 0, 0, 0.1) 44.04%, rgba(0, 0, 0, 0.1) 94.14%, rgba(0, 0, 0, 0.1) 99.6%)'
        }}
      />

      {/* Text Content - Positioned per slide */}
      <div 
        className="absolute transition-all duration-1000 ease-in-out px-4 sm:px-0"
        style={currentData.textPosition}
      >
        {/* Title */}
        <h2 className="font-['Inter'] font-medium text-2xl sm:text-3xl lg:text-[40px] leading-8 sm:leading-10 lg:leading-12 tracking-[-0.02em] text-white mb-2">
          {currentData.title}
        </h2>

        {/* Subtitle */}
        <p className="font-['Inter'] font-normal text-lg sm:text-xl lg:text-[25px] leading-6 sm:leading-7 lg:leading-[30px] tracking-[-0.02em] text-white mb-2">
          {currentData.subtitle}
        </p>

        {/* Promo Text */}
        <p className="font-['Inter'] font-normal text-base sm:text-lg lg:text-[20px] leading-5 sm:leading-6 tracking-[-0.02em] text-gray-300">
          {currentData.promo}
        </p>
      </div>

      {/* Navigation Dots */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 bottom-5 sm:bottom-7 flex items-center justify-center space-x-3 sm:space-x-4"
      >
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Outer Circle */}
            <div 
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'border border-white' : 'border-transparent'
              }`}
            />
            {/* Inner Circle */}
            <div 
              className={`absolute inset-0.5 rounded-full bg-white transition-all duration-300 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-60 scale-75'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}