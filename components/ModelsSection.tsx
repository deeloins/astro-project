'use client';

import React, { useState } from 'react';

export default function ModelsSection() {
  const [hoveredModel, setHoveredModel] = useState<number | null>(null);

  const models = [
    {
      name: "Astro Offroad",
      image: "/white-offroader.svg",
      position: "top-left"
    },
    {
      name: "Astro Speed",
      image: "/yellow-sedan.svg",
      position: "top-right"
    },
    {
      name: "Astro Slick",
      image: "/black-jeep.svg",
      position: "bottom-left"
    },
    {
      name: "Astro Muscle",
      image: "/white-modern-car.svg",
      position: "bottom-right"
    }
  ];

  return (
    <div className="relative w-full h-[1360px] mx-auto bg-[#212121]">
      <div className="relative h-full px-[70px] pt-[151px]">
        
        {/* Header Section */}
        <div className="mb-24">
          {/* Our Models Label */}
          <h3 className="font-['Inter'] font-medium text-[18px] leading-[22px] tracking-[-0.02em] text-white mb-4">
            Our Models
          </h3>

          {/* Main Heading */}
          <h2 className="font-['Inter'] font-medium text-[40px] leading-12 tracking-[-0.02em] text-white mb-[15px]">
            Discover Our Models
          </h2>

          {/* Description */}
          <p className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-white max-w-[522px]">
            Brief descriptions of the different car models Astro offers, highlighting unique Designs.
          </p>
        </div>

        {/* Models Grid */}
        <div className="relative w-full h-[785px]">
          
          {/* Slide 1 - Top Left (Large) */}
          <div 
            className="absolute left-0 top-0 w-[49.2%] h-[55.8%] rounded overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredModel(0)}
            onMouseLeave={() => setHoveredModel(null)}
          >
            <div className="relative w-full h-full">
              <img 
                src={models[0].image}
                alt={models[0].name}
                className="w-full h-full object-cover scale-105 -translate-x-4 -translate-y-4"
              />
              {/* Dark Overlay on Hover */}
              <div 
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredModel === 0 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="font-['Inter'] font-medium text-[30px] leading-9 tracking-[-0.02em] text-white">
                  {models[0].name}
                </span>
              </div>
            </div>
          </div>

          {/* Slide 2 - Top Right */}
          <div 
            className="absolute right-0 top-0 w-[49.19%] h-[45.66%] rounded overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredModel(1)}
            onMouseLeave={() => setHoveredModel(null)}
          >
            <div className="relative w-full h-full">
              <img 
                src={models[1].image}
                alt={models[1].name}
                className="w-full h-full object-cover scale-105 -translate-y-10"
              />
              {/* Dark Overlay on Hover */}
              <div 
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredModel === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="font-['Inter'] font-medium text-[30px] leading-9 tracking-[-0.02em] text-white">
                  {models[1].name}
                </span>
              </div>
            </div>
          </div>

          {/* Slide 3 - Bottom Left */}
          <div 
            className="absolute left-0 bottom-0 w-[49.19%] h-[47.66%] rounded overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredModel(2)}
            onMouseLeave={() => setHoveredModel(null)}
          >
            <div className="relative w-full h-full">
              <img 
                src={models[2].image}
                alt={models[2].name}
                className="w-full h-full object-cover scale-100 translate-y-12"
              />
              {/* Dark Overlay on Hover */}
              <div 
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredModel === 2 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="font-['Inter'] font-medium text-[30px] leading-9 tracking-[-0.02em] text-white">
                  {models[2].name}
                </span>
              </div>
            </div>
          </div>

          {/* Slide 4 - Bottom Right */}
          <div 
            className="absolute right-0 bottom-0 w-[49.2%] h-[55.8%] rounded overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredModel(3)}
            onMouseLeave={() => setHoveredModel(null)}
          >
            <div className="relative w-full h-full">
              <img 
                src={models[3].image}
                alt={models[3].name}
                className="w-full h-full object-cover scale-105 translate-x-4 translate-y-4"
              />
              {/* Dark Overlay on Hover */}
              <div 
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredModel === 3 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="font-['Inter'] font-medium text-[30px] leading-9 tracking-[-0.02em] text-white">
                  {models[3].name}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}