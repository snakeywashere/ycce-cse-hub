import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Years of Excellence" },
  { value: "50+", label: "Expert Faculty" },
  { value: "1200+", label: "Students Enrolled" },
  { value: "95%", label: "Placement Rate" },
];

const StatsSection = () => (
  <section className="py-16 bg-navy-dark">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{s.value}</div>
            <div className="text-sm text-primary-foreground/60">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
