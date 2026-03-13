import { motion } from "framer-motion";
import { GraduationCap, Clock, ArrowRight } from "lucide-react";

const programs = [
  { name: "B.Tech in Computer Science & Engineering", duration: "4 Years", intake: "120 Seats", desc: "Comprehensive undergraduate program covering core CS fundamentals, software development, and emerging technologies." },
  { name: "M.Tech in Computer Science & Engineering", duration: "2 Years", intake: "18 Seats", desc: "Advanced postgraduate program with specializations in AI, Data Science, and Software Engineering." },
  { name: "Ph.D. in Computer Science", duration: "3-5 Years", intake: "Research Scholars", desc: "Doctoral program for aspiring researchers with guided research in cutting-edge areas of computing." },
];

const ProgramsSection = () => (
  <section id="programs" className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Programs</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">Academic Programs</h2>
        <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
          Choose from our range of undergraduate, postgraduate, and doctoral programs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-7 shadow-card border border-border hover:shadow-elevated transition-all group"
          >
            <div className="flex items-center gap-2 text-accent mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wide">{p.intake}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{p.name}</h3>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
              <Clock className="w-4 h-4" />
              <span>{p.duration}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all cursor-pointer">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
