import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const faculty = [
  { name: "Dr. Rajesh Kumar", role: "Head of Department", specialization: "Artificial Intelligence & ML" },
  { name: "Dr. Priya Sharma", role: "Professor", specialization: "Data Science & Big Data" },
  { name: "Dr. Amit Deshmukh", role: "Associate Professor", specialization: "Cybersecurity & Networks" },
  { name: "Dr. Sneha Patil", role: "Associate Professor", specialization: "Software Engineering" },
];

const FacultySection = () => (
  <section id="faculty" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Team</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">Distinguished Faculty</h2>
        <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
          Our experienced faculty members are leaders in their respective fields of research.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculty.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-xl bg-card shadow-card border border-border group hover:shadow-elevated transition-shadow"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center text-2xl font-bold text-navy">
              {f.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </div>
            <h3 className="font-semibold text-foreground text-lg">{f.name}</h3>
            <p className="text-sm text-accent font-medium mt-1">{f.role}</p>
            <p className="text-xs text-muted-foreground mt-2">{f.specialization}</p>
            <button className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" /> Contact
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacultySection;
