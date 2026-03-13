import { motion } from "framer-motion";
import { BookOpen, Award, Users, Lightbulb } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Academic Excellence", desc: "NBA accredited programs with a curriculum aligned to industry needs and emerging technologies." },
  { icon: Award, title: "Research & Innovation", desc: "Active research groups in AI, ML, Data Science, Cybersecurity, and IoT with funded projects." },
  { icon: Users, title: "Industry Connect", desc: "Strong ties with leading tech companies ensuring internships, placements, and collaborative projects." },
  { icon: Lightbulb, title: "Student Development", desc: "Technical clubs, hackathons, coding competitions, and workshops fostering holistic growth." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
          Pioneering Computing Education
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
          The Department of Computer Science & Engineering at YCCE, Nagpur, has been at the forefront of technical education, producing industry leaders and innovators for over four decades.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card shadow-card border border-border hover:shadow-elevated transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
              <f.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
