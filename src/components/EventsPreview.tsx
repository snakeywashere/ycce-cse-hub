import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    title: "National Hackathon 2026",
    date: "2026-04-15T09:00:00",
    location: "YCCE Main Auditorium",
    category: "Hackathon",
    desc: "48-hour coding marathon with ₹2L+ prize pool. Build innovative solutions for real-world problems.",
  },
  {
    title: "AI/ML Workshop Series",
    date: "2026-04-05T10:00:00",
    category: "Workshop",
    location: "CSE Seminar Hall",
    desc: "Hands-on workshop on deep learning, computer vision, and NLP using Python & TensorFlow.",
  },
  {
    title: "Industry Expert Talk: Cloud Computing",
    date: "2026-04-20T14:00:00",
    category: "Seminar",
    location: "Virtual (MS Teams)",
    desc: "Guest lecture by a senior engineer from AWS on scalable cloud architectures and DevOps.",
  },
];

function getTimeLeft(dateStr: string) {
  const diff = new Date(dateStr).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, mins };
}

const categoryColors: Record<string, string> = {
  Hackathon: "bg-rose-500/20 text-rose-400",
  Workshop: "bg-sky-500/20 text-sky-400",
  Seminar: "bg-emerald-500/20 text-emerald-400",
};

const EventsPreview = () => {
  const [timeLefts, setTimeLefts] = useState(upcomingEvents.map((e) => getTimeLeft(e.date)));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLefts(upcomingEvents.map((e) => getTimeLeft(e.date)));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            What's Coming Up
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Upcoming Events
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
            Stay updated with our latest workshops, hackathons, and guest lectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => {
            const tl = timeLefts[i];
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-card rounded-xl p-6 shadow-card border border-border group hover:shadow-elevated transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[event.category] || "bg-accent/20 text-accent"}`}>
                    {event.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5" /> {event.location}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {event.desc}
                </p>

                {/* Countdown */}
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-4 h-4 text-accent" />
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-accent/10 text-accent font-bold">{tl.days}d</span>
                    <span className="px-2 py-1 rounded bg-accent/10 text-accent font-bold">{tl.hours}h</span>
                    <span className="px-2 py-1 rounded bg-accent/10 text-accent font-bold">{tl.mins}m</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-accent border border-accent/40 hover:bg-accent/10 transition-all group"
          >
            View All Events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;
