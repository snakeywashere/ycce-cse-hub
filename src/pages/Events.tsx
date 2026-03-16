import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Clock, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";

const allEvents = [
  { title: "National Hackathon 2026", date: "2026-04-15T09:00:00", location: "YCCE Main Auditorium", category: "Hackathon", desc: "48-hour coding marathon with ₹2L+ prize pool. Build innovative solutions for real-world problems.", status: "upcoming" },
  { title: "AI/ML Workshop Series", date: "2026-04-05T10:00:00", location: "CSE Seminar Hall", category: "Workshop", desc: "Hands-on workshop on deep learning, computer vision, and NLP using Python & TensorFlow.", status: "upcoming" },
  { title: "Cloud Computing Expert Talk", date: "2026-04-20T14:00:00", location: "Virtual (MS Teams)", category: "Seminar", desc: "Guest lecture by a senior engineer from AWS on scalable cloud architectures.", status: "upcoming" },
  { title: "Cybersecurity CTF Challenge", date: "2026-05-10T09:00:00", location: "CSE Lab Complex", category: "Hackathon", desc: "Capture-the-flag competition testing skills in network security, cryptography, and forensics.", status: "upcoming" },
  { title: "Web Development Bootcamp", date: "2026-03-01T10:00:00", location: "CSE Seminar Hall", category: "Workshop", desc: "3-day intensive bootcamp on modern web development with React, Node.js, and databases.", status: "past" },
  { title: "Data Science Symposium", date: "2026-02-15T09:30:00", location: "YCCE Auditorium", category: "Seminar", desc: "National symposium featuring research presentations and panel discussions on data science.", status: "past" },
  { title: "Open Source Contribution Drive", date: "2026-01-20T10:00:00", location: "CSE Department", category: "Workshop", desc: "Workshop on contributing to open-source projects with hands-on Git and GitHub sessions.", status: "past" },
  { title: "Inter-College Coding Contest", date: "2025-12-10T09:00:00", location: "YCCE Campus", category: "Hackathon", desc: "Competitive programming contest with participants from 20+ engineering colleges.", status: "past" },
];

const categories = ["All", "Hackathon", "Workshop", "Seminar"];

const categoryColors: Record<string, string> = {
  Hackathon: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  Workshop: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  Seminar: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

function getTimeLeft(dateStr: string) {
  const diff = new Date(dateStr).getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, mins };
}

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  const filtered = allEvents.filter(
    (e) =>
      e.status === activeTab &&
      (activeCategory === "All" || e.category === activeCategory)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollProgress />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute bottom-0 left-1/3 w-96 h-48 bg-accent/8 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-accent/70 hover:text-accent text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "hsl(45, 100%, 96%)" }}>
              Events
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(220, 20%, 75%)" }}>
              Workshops, hackathons, seminars, and more — stay connected with everything happening at CSE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 border-b border-border sticky top-16 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "upcoming" ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "past" ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                Past Events
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.length === 0 ? (
                <div className="col-span-2 text-center py-20">
                  <p className="text-lg text-muted-foreground">No events found in this category.</p>
                </div>
              ) : (
                filtered.map((event, i) => {
                  const tl = getTimeLeft(event.date);
                  return (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-accent/20 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[event.category] || "bg-accent/20 text-accent border-accent/30"}`}>
                          {event.category}
                        </span>
                        {event.status === "past" && (
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">Completed</span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {event.location}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.desc}</p>

                      {tl && (
                        <div className="flex items-center gap-3 pt-3 border-t border-border">
                          <Clock className="w-4 h-4 text-accent" />
                          <span className="text-xs text-muted-foreground">Starts in:</span>
                          <div className="flex gap-1.5 text-xs">
                            <span className="px-2 py-1 rounded bg-accent/10 text-accent font-bold">{tl.days}d</span>
                            <span className="px-2 py-1 rounded bg-accent/10 text-accent font-bold">{tl.hours}h</span>
                            <span className="px-2 py-1 rounded bg-accent/10 text-accent font-bold">{tl.mins}m</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Events;
