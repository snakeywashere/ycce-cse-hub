import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    batch: "B.Tech CSE, Batch 2022",
    role: "Software Engineer at Google",
    quote: "YCCE CSE gave me the foundation to excel. The faculty mentorship and hands-on projects were invaluable in shaping my career.",
  },
  {
    name: "Priya Deshmukh",
    batch: "B.Tech CSE, Batch 2021",
    role: "Data Scientist at Microsoft",
    quote: "The department's focus on emerging technologies like AI and ML prepared me perfectly for the industry. I'm grateful for every opportunity.",
  },
  {
    name: "Rohan Kulkarni",
    batch: "M.Tech CSE, Batch 2020",
    role: "Senior Developer at Amazon",
    quote: "From hackathons to research papers, YCCE CSE provided a complete learning ecosystem that pushed me beyond my limits.",
  },
  {
    name: "Snehal Patil",
    batch: "B.Tech CSE, Batch 2023",
    role: "Product Engineer at Flipkart",
    quote: "The coding culture, tech clubs, and industry exposure here are unmatched. YCCE CSE truly nurtures innovation.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: "hsl(45, 100%, 96%)" }}>
            What Our Alumni Say
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 sm:p-10 text-center"
            >
              <Quote className="w-10 h-10 text-accent/40 mx-auto mb-6" />
              <p className="text-lg sm:text-xl leading-relaxed mb-8 italic" style={{ color: "hsl(220, 20%, 80%)" }}>
                "{testimonials[current].quote}"
              </p>
              <div>
                <h4 className="font-bold text-lg text-accent">{testimonials[current].name}</h4>
                <p className="text-sm mt-1" style={{ color: "hsl(220, 20%, 65%)" }}>
                  {testimonials[current].batch}
                </p>
                <p className="text-xs mt-1" style={{ color: "hsl(220, 20%, 50%)" }}>
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-accent/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
