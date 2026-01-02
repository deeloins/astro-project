export default function Footer() {
  return (
    <footer className="relative w-full h-[539px] mx-auto bg-[#212121]">
      <div className="relative h-full px-[70px] pt-[118px] pb-[91px]">
        
        {/* Top Section - Logo and Navigation */}
        <div className="flex gap-[100px] mb-[90px]">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/Astro Logo.svg" alt="Astro Logo" className="w-8 h-8" />
            <span className="text-3xl tracking-tight text-white" style={{ fontFamily: 'Nasalization, sans-serif' }}>
              stro
            </span>
          </div>

          {/* Main Navigation */}
          <nav className="flex flex-col gap-[27px]">
            <a href="#vehicles" className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Vehicles
            </a>
            <a href="#explore" className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Explore Astro
            </a>
            <a href="#about" className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              About Astro
            </a>
            <a href="#contact" className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Contact Us
            </a>
            <a href="#partners" className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Global Partners
            </a>
          </nav>

          {/* Astro Section */}
          <div className="flex flex-col gap-[13px]">
            <h3 className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-[#ABABAB] mb-[3px]">
              Astro
            </h3>
            <a href="#profile" className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Company profile
            </a>
            <a href="#brand" className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Brand
            </a>
            <a href="#history" className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              History
            </a>
            <a href="#news" className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              News
            </a>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-[13px]">
            <h3 className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-[#ABABAB] mb-[3px]">
              Resources
            </h3>
            <a href="#careers" className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Careers
            </a>
            <a href="#dealers" className="font-['Inter'] font-normal text-[18px] leading-[22px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Car Dealers
            </a>
          </div>
        </div>

        {/* Bottom Section - Legal and Language */}
        <div className="absolute bottom-[91px] left-[70px] right-[70px] flex items-center justify-between">
          
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <span className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-white underline cursor-pointer hover:text-gray-300 transition-colors">
              GB
            </span>
            <img src="/global-white.svg" alt="Language" className="w-[22px] h-[22px]" />
          </div>

          {/* Legal Links */}
          <nav className="flex items-center gap-[65px]">
            <a href="#terms" className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Terms
            </a>
            <a href="#privacy" className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Privacy
            </a>
            <a href="#cookies" className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Cookies
            </a>
            <a href="#legal" className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Legal Notice
            </a>
            <a href="#accessibility" className="font-['Inter'] font-normal text-[15px] leading-[18px] tracking-[-0.02em] text-white hover:text-gray-300 transition-colors">
              Accessibility
            </a>
          </nav>
        </div>

      </div>
    </footer>
  );
}