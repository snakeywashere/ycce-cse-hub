import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsPreview from "@/components/EventsPreview";
import FooterSection from "@/components/FooterSection";
import ChatBot from "@/components/ChatBot";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => (
  <div className="min-h-screen">
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ProgramsSection />
    <TestimonialsSection />
    <EventsPreview />
    <FacultySection />
    <FooterSection />
    <ChatBot />
  </div>
);

export default Index;
