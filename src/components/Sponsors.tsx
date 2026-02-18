import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hexagon } from "lucide-react";

const sponsors = [
  "CrowdStrike", "Palo Alto Networks", "Cloudflare", "HackerOne",
  "Fortinet", "SentinelOne", "Snyk", "Rapid7",
];

export default function Sponsors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest mb-4">
            /// ALLIANCE_NETWORK
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-glow-cyan">PARTNERS</span>
          </h2>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative mb-8 group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden gap-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 min-w-full"
            >
              {[...sponsors, ...sponsors, ...sponsors].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="relative flex-none w-64 h-24 glass-card rounded-lg flex items-center justify-center border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group-hover:[animation-play-state:paused]"
                >
                  <Hexagon className="absolute top-2 left-2 text-white/5 w-4 h-4" />
                  <Hexagon className="absolute bottom-2 right-2 text-white/5 w-4 h-4" />

                  <span className="font-display text-lg font-bold text-muted-foreground group-hover:text-white transition-colors uppercase tracking-wider">
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden gap-6">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 min-w-full"
            >
              {[...sponsors, ...sponsors, ...sponsors].reverse().map((name, i) => (
                <div
                  key={`${name}-rev-${i}`}
                  className="relative flex-none w-64 h-24 glass-card rounded-lg flex items-center justify-center border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group-hover:[animation-play-state:paused]"
                >
                  <Hexagon className="absolute top-2 right-2 text-white/5 w-4 h-4" />
                  <Hexagon className="absolute bottom-2 left-2 text-white/5 w-4 h-4" />

                  <span className="font-display text-lg font-bold text-muted-foreground group-hover:text-white transition-colors uppercase tracking-wider">
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 tracking-widest uppercase border-b border-cyan-400/30 pb-1 hover:border-cyan-400 transition-all">
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
