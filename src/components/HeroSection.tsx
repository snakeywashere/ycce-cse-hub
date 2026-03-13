import { motion } from "framer-motion";
import heroBg from "@/assets/hero-campus.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-hero-gradient opacity-85" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
          Yeshwantrao Chavan College of Engineering, Nagpur
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: "hsl(45, 100%, 96%)" }}>
          Department of<br />
          <span className="text-gradient-gold">Computer Science</span><br />
          & Engineering
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-10" style={{ color: "hsl(220, 20%, 80%)" }}>
          Shaping the future through innovation, research, and excellence in computing education since 1984.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#programs"
            className="px-8 py-3.5 rounded-lg font-semibold text-accent-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            Explore Programs
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-lg font-semibold border border-accent/40 text-accent hover:bg-accent/10 transition-all"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
