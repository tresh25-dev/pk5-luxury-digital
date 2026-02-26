import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isHome = location.pathname === "/";
  const showSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-serif text-2xl font-bold tracking-tight ${showSolid ? "text-foreground" : "text-primary-foreground"}`}>
            PK5
          </span>
          <span className="text-gradient-gold font-serif text-lg font-semibold hidden sm:inline">
            Real Estate
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                location.pathname === link.href
                  ? "text-accent"
                  : showSolid
                  ? "text-foreground"
                  : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+1234567890" className={`flex items-center gap-1.5 text-sm font-medium ${showSolid ? "text-foreground" : "text-primary-foreground/90"}`}>
            <Phone className="w-4 h-4" />
            <span>+2348026133205</span>
          </a>
          <Button variant="gold" size="sm" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${showSolid ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.href ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="gold" size="sm" asChild className="mt-2">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
