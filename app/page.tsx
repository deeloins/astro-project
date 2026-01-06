import Carousel from "@/components/HeroPage";
import Navbar from "../components/Navbar";
import CarouselTwo from "@/components/Carousel";
import MissionSection from "@/components/MissionSection";
import ModelsSection from "@/components/ModelsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
        <Carousel />
      <section id="vehicles">
        <CarouselTwo />
        </section>
      <MissionSection />
      <section id="explore">
        <ModelsSection />
      </section>
      <section id="contact">
        <CTASection />
      </section>
       <section id="partners">
        <Footer /> 
      </section>
      
    </div>
  );
}