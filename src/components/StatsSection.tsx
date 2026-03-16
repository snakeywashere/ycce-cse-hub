import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 40, suffix: "+", label: "Years of Excellence" },
  { value: 50, suffix: "+", label: "Expert Faculty" },
  { value: 1200, suffix: "+", label: "Students Enrolled" },
  { value: 95, suffix: "%", label: "Placement Rate" },
];

const StatsSection = () => (
  <section className="py-16 bg-navy-dark relative overflow-hidden">
    {/* Decorative blur */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-96 h-32 bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center group"
          >
            <div className="inline-block rounded-2xl px-6 py-4 transition-all duration-300 group-hover:animate-pulse-glow">
              <AnimatedCounter
                target={s.value}
                suffix={s.suffix}
                className="text-3xl sm:text-4xl font-bold text-accent mb-2 block"
                duration={2}
              />
              <div className="text-sm text-primary-foreground/60 mt-2">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
