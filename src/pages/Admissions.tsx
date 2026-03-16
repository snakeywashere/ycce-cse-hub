import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronDown, FileText, GraduationCap, Calendar, IndianRupee } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";

const steps = [
  { title: "Check Eligibility", desc: "Verify you meet the minimum academic requirements for your desired program.", icon: CheckCircle2 },
  { title: "Fill Application Form", desc: "Complete the online application form with your personal and academic details.", icon: FileText },
  { title: "Entrance Exam", desc: "Appear for MHT-CET / JEE Main (UG) or GATE (PG) and secure a qualifying score.", icon: GraduationCap },
  { title: "CAP Round Allotment", desc: "Participate in the Centralised Admission Process (CAP) conducted by DTE Maharashtra.", icon: Calendar },
  { title: "Fee Payment & Enrollment", desc: "Pay the prescribed fees and complete document verification to confirm your admission.", icon: IndianRupee },
];

const eligibility = [
  { program: "B.Tech CSE", criteria: "10+2 with Physics, Chemistry, and Mathematics with min. 50% aggregate. Valid MHT-CET / JEE Main score." },
  { program: "M.Tech CSE", criteria: "B.Tech/B.E. in CS/IT or equivalent with min. 55% aggregate. Valid GATE score preferred." },
  { program: "Ph.D. CSE", criteria: "M.Tech/M.E. in relevant discipline with min. 60% and a qualifying research aptitude test." },
];

const faqs = [
  { q: "What is the last date to apply?", a: "Admissions follow the DTE Maharashtra academic calendar. Typically, applications open in June and close by August for the respective academic year." },
  { q: "Is there a management quota?", a: "Yes, a limited number of seats are available under the institute-level quota. Contact the admission office for details." },
  { q: "What are the hostel facilities?", a: "YCCE provides separate hostel facilities for boys and girls with modern amenities, Wi-Fi, mess, and 24/7 security." },
  { q: "Can I transfer from another college?", a: "Lateral entry admissions (direct second year) are available for diploma holders through the DTE Maharashtra process." },
  { q: "What scholarships are available?", a: "Various government scholarships (EBC, minority, merit-based) and departmental scholarships are available for eligible students." },
];

const Admissions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollProgress />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-accent/70 hover:text-accent text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "hsl(45, 100%, 96%)" }}>
              Admissions
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(220, 20%, 75%)" }}>
              Join the Department of Computer Science & Engineering at YCCE — your pathway to a successful career in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-14"
          >
            Admission Process
          </motion.h2>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex gap-4 sm:gap-6 mb-8 group"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors"
                  >
                    <step.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-accent">Step {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-14"
          >
            Eligibility Criteria
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {eligibility.map((e, i) => (
              <motion.div
                key={e.program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-accent/30 transition-all"
              >
                <h3 className="text-lg font-bold text-accent mb-3">{e.program}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.criteria}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-14"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:text-accent transition-colors"
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: "hsl(45, 100%, 96%)" }}>
              Ready to Join?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "hsl(220, 20%, 70%)" }}>
              Take the first step towards your career in Computer Science at YCCE.
            </p>
            <motion.a
              href="https://ycce.edu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 rounded-lg font-semibold text-accent-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              Apply Now →
            </motion.a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Admissions;
