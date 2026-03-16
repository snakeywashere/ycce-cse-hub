import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-navy-dark/98 backdrop-blur-md border-navy-light/20 shadow-lg"
          : "bg-navy-dark/70 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.span
            className="text-xl font-bold text-accent"
            whileHover={{ scale: 1.05 }}
          >
            YCCE
          </motion.span>
          <span className="text-sm text-primary-foreground/70 hidden sm:inline group-hover:text-primary-foreground/90 transition-colors">
            | CSE Department
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => {
            const active = isActive(l.href);
            if (l.href.startsWith("/#")) {
              return (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className={`relative text-sm font-medium transition-colors ${
                    active ? "text-accent" : "text-primary-foreground/80 hover:text-accent"
                  }`}
                >
                  {l.label}
                </button>
              );
            }
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-accent" : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {l.label}
                {active && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy-dark border-t border-navy-light/20 overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((l) => {
                if (l.href.startsWith("/#")) {
                  return (
                    <button
                      key={l.href}
                      onClick={() => handleClick(l.href)}
                      className="text-left text-primary-foreground/80 hover:text-accent py-2 px-3 rounded-md hover:bg-navy-light/20 transition-colors"
                    >
                      {l.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={`py-2 px-3 rounded-md transition-colors ${
                      isActive(l.href)
                        ? "text-accent bg-navy-light/20"
                        : "text-primary-foreground/80 hover:text-accent hover:bg-navy-light/20"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
