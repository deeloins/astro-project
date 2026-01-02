export default function CTASection() {
  return (
    <div className="relative w-full h-[393px] mx-auto bg-white">
      <div className="relative h-full flex">
        
        {/* Left Side - Join Our Team */}
        <div className="relative w-1/2 h-full flex items-center px-[120px]">
          <div>
            {/* Heading */}
            <h2 className="font-['Inter'] font-medium text-[40px] leading-12 tracking-[-0.02em] text-black mb-4">
              Join Our Team
            </h2>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-black mb-6 max-w-[350px]">
              Information about career opportunities at Astro and how to apply.
            </p>

            {/* Contact Us Button */}
            <button className="w-[180px] h-[50px] bg-[#212121] rounded flex items-center justify-center font-['Inter'] font-medium text-base tracking-[-0.02em] text-white hover:bg-black transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Center Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#212121] transform -translate-x-1/2" />

        {/* Right Side - Find Your Dealer */}
        <div className="relative w-1/2 h-full flex items-center px-[120px]">
          <div>
            {/* Heading */}
            <h2 className="font-['Inter'] font-medium text-[40px] leading-12 tracking-[-0.02em] text-black mb-4">
              Find Your Dealer
            </h2>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[20px] leading-6 tracking-[-0.02em] text-black mb-6 max-w-[320px]">
              Tool for users to locate the nearest Astro dealer
            </p>

            {/* Contact Us Button */}
            <button className="w-[180px] h-[50px] bg-[#212121] rounded flex items-center justify-center font-['Inter'] font-medium text-base tracking-[-0.02em] text-white hover:bg-black transition-colors">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}