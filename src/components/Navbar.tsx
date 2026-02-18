import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? "pt-4" : "pt-6"
          }`}
      >
        <div
          className={`relative max-w-7xl w-[95%] md:w-full mx-auto px-6 h-16 md:h-20 flex items-center justify-between rounded-full transition-all duration-500 ${scrolled
            ? "bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:w-[85%] lg:w-[75%]"
            : "bg-transparent"
            }`}
        >
          {/* Logo */}
          <a href="#" className="group relative flex items-center gap-2 font-display text-xl md:text-2xl font-bold tracking-wider text-white">
            <Terminal className="text-cyan-400 group-hover:animate-pulse" />
            <span className="relative z-10">C26<span className="text-cyan-400">.NEXUS</span></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 font-display text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300 group overflow-hidden rounded-full"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:block">
            <a
              href="#register"
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-display text-xs font-bold text-black uppercase tracking-widest transition-all duration-300 bg-cyan-400 rounded-full hover:bg-cyan-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            >
              <span className="relative">Join Nexus</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:text-cyan-400 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/90 md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.1 }}
                className="font-display text-2xl font-bold tracking-widest text-white hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#register"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 py-3 bg-cyan-500 text-black font-display font-bold font-bold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            >
              JOIN NEXUS
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
