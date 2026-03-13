import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacultySection from "@/components/FacultySection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ProgramsSection />
    <FacultySection />
    <FooterSection />
  </div>
);

export default Index;
