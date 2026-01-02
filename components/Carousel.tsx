'use client';

import React, { useState } from 'react';

export default function CarouselTwo() {
  const [currentVehicle, setCurrentVehicle] = useState(0);

  const vehicles = [
    {
      name: "Astro M940",
      price: "$20,459",
      promo: "Big Promo available",
      image: "/mustang.svg",
      specs: {
        length: { value: "4640", unit: "mm" },
        width: { value: "1900", unit: "mm" },
        height: { value: "1695", unit: "mm" }
      }
    },
    {
      name: "Astro 80",
      price: "$30,459",
      promo: "Big Promo available",
      image: "/challenger.svg",
      specs: {
        length: { value: "5100", unit: "mm" },
        width: { value: "1920", unit: "mm" },
        height: { value: "1480", unit: "mm" }
      }
    },
    {
      name: "Astro Steel",
      price: "$45,299",
      promo: "Big Promo available",
      image: "/gallery.svg",
      specs: {
        length: { value: "4850", unit: "mm" },
        width: { value: "1880", unit: "mm" },
        height: { value: "1650", unit: "mm" }
      }
    },
    {
      name: "Astro Retro",
      price: "$52,999",
      promo: "Big Promo available",
      image: "/retro.svg",
      specs: {
        length: { value: "4720", unit: "mm" },
        width: { value: "1850", unit: "mm" },
        height: { value: "1600", unit: "mm" }
      }
    }
  ];

  const currentCar = vehicles[currentVehicle];

  const nextVehicle = () => {
    setCurrentVehicle((prev) => (prev + 1) % vehicles.length);
  };

  const prevVehicle = () => {
    setCurrentVehicle((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  return (
    <div className="relative w-full min-h-screen sm:min-h-[700px] lg:h-[842px] overflow-hidden bg-[#C7CDD0]">
      {/* Background blur effects - Desktop only */}
      <div className="absolute inset-0">
        <div 
          className="hidden lg:block absolute left-0 right-0 h-[319px] top-[409px]"
          style={{
            background: 'rgba(219, 222, 225, 0.4)',
            filter: 'blur(40px)',
            transform: 'scaleY(-1)'
          }}
        />
        <div 
          className="hidden lg:block absolute left-0 right-0 h-[311px] top-[356px]"
          style={{
            background: 'rgba(219, 222, 225, 0.6)',
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="hidden lg:block absolute left-[136px] right-[136px] h-[217px] top-0"
          style={{
            background: 'rgba(219, 222, 225, 0.6)',
            boxShadow: 'inset 0px 1px 5.2px #D3D7DA',
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative h-full px-4 sm:px-6 lg:px-[72px] py-8 sm:py-12 lg:py-[93px]">
        
        {/* Top Section: Description + Buttons */}
        <div className="mb-6 lg:mb-8 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
          <h2 className="font-['Inter'] font-medium text-2xl sm:text-3xl lg:text-[30px] leading-8 sm:leading-9 lg:leading-9 tracking-[-0.02em] text-[#212121] mb-2">
            {currentCar.name}
          </h2>
          <p className="font-['Inter'] font-normal text-lg sm:text-xl lg:text-[20px] leading-6 tracking-[-0.02em] text-[#212121] mb-1">
            Long Driving Smd From {currentCar.price}
          </p>
          <p className="font-['Inter'] font-normal text-base sm:text-lg lg:text-[20px] leading-6 tracking-[-0.02em] text-[#545454] mb-6">
            {currentCar.promo}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-[180px] h-11 sm:h-[50px] bg-white rounded flex items-center justify-center font-['Inter'] font-medium text-sm sm:text-base tracking-[-0.02em] text-black hover:bg-gray-100 transition-colors">
              Order Now
            </button>
            <button className="w-full sm:w-[180px] h-11 sm:h-[50px] bg-[#212121] rounded flex items-center justify-center font-['Inter'] font-medium text-sm sm:text-base tracking-[-0.02em] text-white hover:bg-black transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Center: Large Car Image - With transition */}
        <div className="relative w-full max-w-[500px] sm:max-w-[570px] mx-auto h-[250px] sm:h-[350px] lg:h-[455px] mb-8 lg:mb-0 lg:absolute lg:left-1/2 lg:top-[158px] lg:-translate-x-1/2 lg:w-[570px]">
          <div className="relative w-full h-full">
            {vehicles.map((vehicle, index) => (
              <img 
                key={index}
                src={vehicle.image} 
                alt={vehicle.name}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                  index === currentVehicle ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Specifications - Stacked on mobile, side on desktop */}
        <div className="hidden lg:absolute lg:right-[72px] lg:top-[93px] grid grid-cols-3 gap-4 sm:gap-6 lg:flex lg:flex-col lg:space-y-8 mb-8 lg:mb-0 max-w-md mx-auto lg:max-w-none">
          {/* Length */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 mb-1">
              <span className="font-['Inter'] font-medium text-xl sm:text-2xl lg:text-[30px] leading-6 sm:leading-8 lg:leading-9 tracking-[-0.02em] text-black">
                {currentCar.specs.length.value}
              </span>
              <span className="font-['Inter'] font-normal text-xs sm:text-sm lg:text-[15px] leading-4 sm:leading-[18px] tracking-[-0.02em] text-black mt-0.5 sm:mt-1 lg:mt-2">
                {currentCar.specs.length.unit}
              </span>
              <img src="/grid-icon.svg" alt="" className="w-3 h-3 sm:w-[15px] sm:h-[15px] ml-1" />
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-black">
                Length
              </span>
            </div>
          </div>

          {/* Width */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 mb-1">
              <span className="font-['Inter'] font-medium text-xl sm:text-2xl lg:text-[30px] leading-6 sm:leading-8 lg:leading-9 tracking-[-0.02em] text-black">
                {currentCar.specs.width.value}
              </span>
              <span className="font-['Inter'] font-normal text-xs sm:text-sm lg:text-[15px] leading-4 sm:leading-[18px] tracking-[-0.02em] text-black mt-0.5 sm:mt-1 lg:mt-2">
                {currentCar.specs.width.unit}
              </span>
              <img src="/grid-icon.svg" alt="" className="w-3 h-3 sm:w-[15px] sm:h-[15px] ml-1" />
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-black">
                Width
              </span>
            </div>
          </div>

          {/* Height */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 mb-1">
              <span className="font-['Inter'] font-medium text-xl sm:text-2xl lg:text-[30px] leading-6 sm:leading-8 lg:leading-9 tracking-[-0.02em] text-black">
                {currentCar.specs.height.value}
              </span>
              <span className="font-['Inter'] font-normal text-xs sm:text-sm lg:text-[15px] leading-4 sm:leading-[18px] tracking-[-0.02em] text-black mt-0.5 sm:mt-1 lg:mt-2">
                {currentCar.specs.height.unit}
              </span>
              <img src="/grid-icon.svg" alt="" className="w-3 h-3 sm:w-[15px] sm:h-[15px] ml-1" />
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-black">
                Height
              </span>
            </div>
          </div>
        </div>

        {/* Bottom: Vehicle Navigation */}
        <div className="absolute bottom-8 sm:bottom-12 lg:bottom-[77px] left-0 right-0">
          <div className="relative max-w-4xl mx-auto px-16 sm:px-20">
            
            {/* Left Arrow */}
            <button 
              onClick={prevVehicle}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-[47px] lg:h-[47px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              aria-label="Previous vehicle"
            >
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Vehicle Thumbnails - Horizontal scroll on mobile */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-6 lg:gap-8 min-w-max px-2">
                {vehicles.map((vehicle, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVehicle(index)}
                    className={`flex flex-col items-center transition-all duration-300 flex-shrink-0 ${
                      index === currentVehicle 
                        ? 'opacity-100 scale-105' 
                        : 'opacity-50 hover:opacity-75'
                    }`}
                  >
                    <div className="w-20 h-16 sm:w-28 sm:h-24 lg:w-[135px] lg:h-[108px] mb-1 sm:mb-2 flex items-center justify-center">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="font-['Inter'] font-medium text-xs sm:text-sm lg:text-[20px] leading-4 sm:leading-5 lg:leading-6 tracking-[-0.02em] text-[#212121] text-center whitespace-nowrap">
                      {vehicle.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextVehicle}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-[47px] lg:h-[47px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              aria-label="Next vehicle"
            >
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for thumbnail section */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}