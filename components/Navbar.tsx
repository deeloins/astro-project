'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use section IDs for anchor links
  const menuItems = [
    { label: 'Vehicles', sectionId: 'vehicles' },
    { label: 'Explore Astro', sectionId: 'explore' },
    { label: 'Contact Us', sectionId: 'contact' },
    { label: 'Global Partners', sectionId: 'partners' }
  ];

  // Function to scroll to section and close menu
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Function to handle icon clicks (if they're also on the same page)
  const scrollToIconSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar Container - Responsive height */}
      <nav className={`fixed top-0 left-0 right-0 h-16 sm:h-20 lg:h-[8.28vh] z-50 border-b transition-colors ${
        isMenuOpen ? 'bg-transparent border-transparent' : 'bg-white border-gray-100'
      }`}>
        <div className="relative w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
          
          {/* Menu Icon - Top Left - Transforms to X when open */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-50/10 rounded-lg transition-colors relative z-50"
            aria-label="Menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
              {isMenuOpen ? (
                // X Icon (Close)
                <>
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45 transition-all" />
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45 transition-all" />
                </>
              ) : (
                // Hamburger Icon
                <>
                  <span className="absolute top-1 left-0 w-full h-0.5 bg-black transition-all" />
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 transition-all" />
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-black transition-all" />
                </>
              )}
            </div>
          </button>

          {/* Logo - Center - Scrolls to top */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-1 sm:gap-2"
            >
              {/* Logo Image - Astro Logo */}
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                <img 
                  src="/full logo.svg" 
                  alt="Astro Logo"
                  className={`w-full h-full object-contain ${
                      isMenuOpen ? 'filter invert' : ''
                  }`}
                />
              </div>
              
              {/* Logo Text - "stro" - Only visible when menu is open */}
              <span className={`text-xl sm:text-2xl lg:text-[30px] leading-6 sm:leading-8 lg:leading-9 font-normal tracking-[-0.02em] text-white transition-all ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 absolute'
              }`} style={{ fontFamily: 'Nasalization, sans-serif' }}>
                stro
              </span>
            </button>
          </div>

          {/* Right Icons Group */}
          <div className="flex items-center gap-2 sm:gap-3 z-50">
            {/* Message Question Icon */}
            <button 
              onClick={() => scrollToIconSection('help')}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 hover:bg-gray-50/10 rounded-lg transition-colors"
              aria-label="Help"
            >
              <img 
                src="/message-question.svg" 
                alt="Help"
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                  isMenuOpen ? 'filter invert' : ''
                }`}
              />
            </button>

            {/* Global/Language Icon */}
            <button 
              onClick={() => scrollToIconSection('language')}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 hover:bg-gray-50/10 rounded-lg transition-colors"
              aria-label="Language"
            >
              <img 
                src="/globe.svg" 
                alt="Language"
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                  isMenuOpen ? 'filter invert' : ''
                }`}
              />
            </button>

            {/* Location Icon */}
            <button 
              onClick={() => scrollToIconSection('locations')}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 hover:bg-gray-50/10 rounded-lg transition-colors"
              aria-label="Location"
            >
              <img 
                src="/location.svg" 
                alt="Location"
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                  isMenuOpen ? 'filter invert' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Split Background - Only on larger screens */}
        <div className="absolute inset-0 flex">
          {/* Left Section */}
          <div className="hidden lg:block lg:w-[26.79%] bg-black" />
          {/* Right Section - Full width on mobile */}
          <div className="w-full lg:w-[73.21%] bg-black" />
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full px-6 sm:px-12 lg:px-[4.63%] py-20 sm:py-28 lg:py-[16.46%]">
            <nav className="space-y-5 sm:space-y-6">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="flex items-center gap-4 sm:gap-6 group w-full text-left"
                >
                  <span className="text-xl sm:text-2xl lg:text-[25px] leading-6 sm:leading-7 lg:leading-[30px] tracking-[-0.02em] text-[#DBDBDB] font-normal transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                  {/* Arrow Right Image */}
                  <img 
                    src="/arrow-right.svg" 
                    alt=""
                    className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 transition-all group-hover:translate-x-2 group-hover:opacity-100"
                    style={{ filter: 'invert(1)' }}
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 sm:h-20 lg:h-[8.28vh]" />
    </>
  );
}