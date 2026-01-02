export default function MissionSection() {
  return (
    <div className="relative w-full min-h-[600px] sm:min-h-[700px] lg:h-[859px] bg-white">
      <div className="relative h-full px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-0">
        
        {/* Left Side - Mission Content */}
        <div className="relative lg:absolute lg:left-[72px] lg:top-[227px] w-full max-w-[663px] lg:max-w-[550px] mx-auto lg:mx-0 mb-8 sm:mb-12 lg:mb-0">
          {/* Our Mission Label */}
          <h3 className="font-['Inter'] font-medium text-base sm:text-lg lg:text-[16px] leading-5 sm:leading-6 lg:leading-[20px] tracking-[-0.02em] text-black mb-3 sm:mb-4 text-center lg:text-left">
            Our Mission
          </h3>

          {/* Main Heading */}
          <h2 className="font-['Inter'] font-medium text-2xl sm:text-3xl lg:text-[36px] leading-8 sm:leading-10 lg:leading-[44px] tracking-[-0.02em] text-black mb-4 sm:mb-5 lg:mb-[15px] max-w-full lg:max-w-[520px] text-center lg:text-left">
            Driving Innovation. Keeping the World Adventurous Forever.
          </h2>

          {/* Description */}
          <p className="font-['Inter'] font-normal text-base sm:text-lg lg:text-[18px] leading-6 sm:leading-7 lg:leading-[22px] tracking-[-0.02em] text-black mb-6 sm:mb-7 lg:mb-[23px] text-center lg:text-left">
            At Astro, our mission is to revolutionise the automotive industry with cutting-edge electric vehicles that are both sustainable and stylish. We are committed to creating a greener planet and enhancing the driving experience through innovation and technology.
          </p>

          {/* Learn More Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="w-full sm:w-[180px] h-11 sm:h-[50px] bg-[#212121] rounded flex items-center justify-center font-['Inter'] font-medium text-sm sm:text-base tracking-[-0.02em] text-white hover:bg-black transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image Collage */}
        <div className="relative lg:absolute lg:right-[70px] lg:top-[186px] w-full max-w-[656px] mx-auto lg:mx-0 h-[350px] sm:h-[450px] lg:h-[487px]">
          
          {/* Large Left Image */}
          <div className="absolute left-0 top-0 w-[52%] sm:w-[51.5%] h-full rounded overflow-hidden">
            <img 
              src="/yellow-sport-car.svg" 
              alt="Yellow sport car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="absolute right-0 top-0 w-[46%] sm:w-[45.6%] h-[48%] sm:h-[48.5%] rounded overflow-hidden">
            <img 
              src="/black-white-car.svg" 
              alt="Black and white sport car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute right-0 bottom-0 w-[46%] sm:w-[45.6%] h-[47.5%] rounded overflow-hidden">
            <img 
              src="/road-car.svg" 
              alt="Car on road"
              className="w-full h-full object-cover scale-x-[-1]"
            />
          </div>
        </div>

      </div>
    </div>
  );
}