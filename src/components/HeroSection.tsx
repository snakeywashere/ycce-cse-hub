import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-campus.jpg";
import ParticleBackground from "./ParticleBackground";

const subtitles = [
  "Shaping the future through innovation, research, and excellence in computing education since 1984.",
  "Building tomorrow's tech leaders with cutting-edge curriculum and industry partnerships.",
  "Where passion meets opportunity — your journey in Computer Science starts here.",
];

const HeroSection = () => {
  const [subtitleIdx, setSubtitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = subtitles[subtitleIdx];
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 30);
        return () => clearTimeout(timer);
      } else {
        const pause = setTimeout(() => setIsTyping(false), 3000);
        return () => clearTimeout(pause);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 15);
        return () => clearTimeout(timer);
      } else {
        setSubtitleIdx((i) => (i + 1) % subtitles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, subtitleIdx]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-85" />

      {/* Particle overlay */}
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Yeshwantrao Chavan College of Engineering, Nagpur
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: "hsl(45, 100%, 96%)" }}>
            Department of<br />
            <span className="text-gradient-gold">Computer Science</span><br />
            & Engineering
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-10 h-[60px] flex items-center justify-center" style={{ color: "hsl(220, 20%, 80%)" }}>
            {displayText}
            <span className="inline-block w-[2px] h-6 bg-accent ml-1" style={{ animation: "typing-cursor 0.8s step-end infinite" }} />
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.a
              href="#programs"
              className="px-8 py-3.5 rounded-lg font-semibold text-accent-foreground transition-all hover:scale-105"
              style={{ background: "var(--gradient-gold)" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Programs
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-3.5 rounded-lg font-semibold border border-accent/40 text-accent hover:bg-accent/10 transition-all"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-accent/40 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
