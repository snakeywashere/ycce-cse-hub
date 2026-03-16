import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";

// Gallery items with placeholder colors (since we don't have actual images)
const galleryItems = [
  { id: 1, title: "Campus Aerial View", category: "Campus", color: "from-blue-600 to-indigo-800", aspectRatio: "aspect-[4/3]" },
  { id: 2, title: "CSE Computer Lab", category: "Labs", color: "from-emerald-600 to-teal-800", aspectRatio: "aspect-square" },
  { id: 3, title: "Hackathon 2025 Winners", category: "Events", color: "from-amber-500 to-orange-700", aspectRatio: "aspect-[4/3]" },
  { id: 4, title: "Seminar Hall", category: "Campus", color: "from-purple-600 to-violet-800", aspectRatio: "aspect-[3/4]" },
  { id: 5, title: "Annual Tech Fest", category: "Events", color: "from-rose-500 to-pink-700", aspectRatio: "aspect-square" },
  { id: 6, title: "Research Lab Setup", category: "Labs", color: "from-cyan-500 to-blue-700", aspectRatio: "aspect-[4/3]" },
  { id: 7, title: "Coding Competition", category: "Activities", color: "from-lime-500 to-green-700", aspectRatio: "aspect-[4/3]" },
  { id: 8, title: "Library & Study", category: "Campus", color: "from-sky-500 to-indigo-700", aspectRatio: "aspect-square" },
  { id: 9, title: "Workshop on IoT", category: "Events", color: "from-fuchsia-500 to-purple-700", aspectRatio: "aspect-[3/4]" },
  { id: 10, title: "Faculty Meeting", category: "Activities", color: "from-teal-500 to-emerald-700", aspectRatio: "aspect-[4/3]" },
  { id: 11, title: "New AI Lab", category: "Labs", color: "from-orange-500 to-red-700", aspectRatio: "aspect-square" },
  { id: 12, title: "Cultural Day", category: "Activities", color: "from-violet-500 to-indigo-700", aspectRatio: "aspect-[4/3]" },
];

const categories = ["All", "Campus", "Labs", "Events", "Activities"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const lightboxItem = lightbox !== null ? galleryItems.find((g) => g.id === lightbox) : null;

  const goNext = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((g) => g.id === lightbox);
    const next = filtered[(idx + 1) % filtered.length];
    setLightbox(next.id);
  };

  const goPrev = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((g) => g.id === lightbox);
    const prev = filtered[(idx - 1 + filtered.length) % filtered.length];
    setLightbox(prev.id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollProgress />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-accent/70 hover:text-accent text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: "hsl(45, 100%, 96%)" }}>
              Gallery
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "hsl(220, 20%, 75%)" }}>
              A visual journey through our campus, labs, events, and student activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-secondary/30 border-b border-border sticky top-16 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`${item.aspectRatio} rounded-xl overflow-hidden cursor-pointer group relative`}
                  onClick={() => setLightbox(item.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80 font-bold text-lg text-center px-4">{item.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl aspect-[16/10] rounded-2xl overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${lightboxItem.color}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{lightboxItem.title}</h3>
                <span className="text-sm text-white/60 font-medium">{lightboxItem.category}</span>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
};

export default Gallery;
