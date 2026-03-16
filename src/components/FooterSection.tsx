import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

const FooterSection = () => (
  <footer id="contact" className="bg-navy-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="text-xl font-bold text-accent mb-4">CSE Department, YCCE</h3>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(220, 20%, 65%)" }}>
            Department of Computer Science & Engineering, Yeshwantrao Chavan College of Engineering, Nagpur — committed to excellence in education and research.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {quickLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block"
                  style={{ color: "hsl(220, 20%, 65%)" }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm hover:text-accent hover:translate-x-1 transition-all duration-200 inline-block"
                  style={{ color: "hsl(220, 20%, 65%)" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-accent mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm" style={{ color: "hsl(220, 20%, 65%)" }}>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>Hingna Road, Wanadongri, Nagpur - 441110, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>+91 712 228 0060</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span>cse@ycce.edu</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-light/20 pt-6 text-center text-xs" style={{ color: "hsl(220, 20%, 50%)" }}>
        © {new Date().getFullYear()} Department of CSE, YCCE Nagpur. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
