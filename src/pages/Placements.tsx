import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Building2, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedCounter from "@/components/AnimatedCounter";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const yearlyPlacements = [
  { year: "2020", placed: 85 },
  { year: "2021", placed: 88 },
  { year: "2022", placed: 91 },
  { year: "2023", placed: 93 },
  { year: "2024", placed: 95 },
  { year: "2025", placed: 96 },
];

const sectorData = [
  { name: "IT Services", value: 40 },
  { name: "Product Companies", value: 25 },
  { name: "Startups", value: 15 },
  { name: "Higher Studies", value: 12 },
  { name: "Govt/PSU", value: 8 },
];

const PIE_COLORS = ["#e5a13c", "#3b82f6", "#10b981", "#8b5cf6", "#f43f5e"];

const topRecruiters = [
  "TCS", "Infosys", "Wipro", "Cognizant", "Accenture",
  "Capgemini", "LTIMindtree", "Persistent", "Amazon", "Google",
  "Microsoft", "Deloitte", "Goldman Sachs", "JP Morgan", "Oracle",
  "Adobe", "Salesforce", "PayPal",
];

const highlights = [
  { icon: TrendingUp, value: 16, suffix: " LPA", label: "Highest Package" },
  { icon: Building2, value: 100, suffix: "+", label: "Recruiting Companies" },
  { icon: Users, value: 96, suffix: "%", label: "Placement Rate" },
  { icon: Award, value: 6, suffix: " LPA", label: "Average Package" },
];

const Placements = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <ScrollProgress />

    {/* Hero Banner */}
    <section className="pt-24 pb-16 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-accent/70 hover:text-accent text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "hsl(45, 100%, 96%)" }}>
            Placements
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "hsl(220, 20%, 75%)" }}>
            Our students are recruited by the best companies in the world. See our placement track record.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-12 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <AnimatedCounter target={h.value} suffix={h.suffix} className="text-3xl font-bold text-accent block" />
              <p className="text-sm mt-2" style={{ color: "hsl(220, 20%, 60%)" }}>{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Charts */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground text-center mb-14"
        >
          Placement Statistics
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-card border border-border"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Year-over-Year Placement %</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={yearlyPlacements}>
                <XAxis dataKey="year" stroke="hsl(220, 15%, 50%)" fontSize={12} />
                <YAxis stroke="hsl(220, 15%, 50%)" fontSize={12} domain={[70, 100]} />
                <Tooltip
                  contentStyle={{ background: "hsl(220, 35%, 12%)", border: "1px solid hsl(220, 25%, 20%)", borderRadius: 8, color: "hsl(45, 100%, 96%)" }}
                />
                <Bar dataKey="placed" fill="hsl(42, 92%, 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-card border border-border"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Sector-wise Distribution</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={sectorData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  stroke="none"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {sectorData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "hsl(220, 35%, 12%)", border: "1px solid hsl(220, 25%, 20%)", borderRadius: 8, color: "hsl(45, 100%, 96%)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Company Marquee */}
    <section className="py-16 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground text-center"
        >
          Top Recruiters
        </motion.h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...topRecruiters, ...topRecruiters].map((company, i) => (
            <motion.div
              key={`${company}-${i}`}
              whileHover={{ scale: 1.1, y: -4 }}
              className="mx-4 flex-shrink-0"
            >
              <div className="px-8 py-4 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 hover:shadow-elevated transition-all">
                <span className="text-sm font-semibold text-foreground">{company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default Placements;
