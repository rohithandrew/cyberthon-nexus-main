import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Clock, Trophy, Target } from "lucide-react";

const stats = [
  { value: "500+", label: "Hackers", icon: Users },
  { value: "48h", label: "Non-Stop", icon: Clock },
  { value: "$50K", label: "Prize Pool", icon: Trophy },
  { value: "6", label: "Tracks", icon: Target },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider mb-6">
              <span>/// SYSTEM_OVERVIEW</span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              WHERE CYBER MEETS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow-cyan">
                INNOVATION
              </span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                <strong className="text-white">Cyberthon 26</strong> isn't just a hackathon; it's a convergence of the brightest minds in security and engineering.
                Organized by the <span className="text-cyan-400 font-medium text-glow-cyan">Centre for Cybersecurity Excellence and Empowerment (CCEE)</span>, this event pushes the boundaries of digital innovation.
              </p>
              <p>
                For 48 hours, the boundaries of reality dissolve as you code, break, and build the future.
                From <span className="text-cyan-400">zero-day exploits</span> to <span className="text-purple-400">quantum-resistant encryption</span>,
                this is your arena to showcase skills that define the next generation of cyber defense.
              </p>
            </div>
          </motion.div>

          {/* Right — Holographic Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full glass-card p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Decorative Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-sm" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-500/50 rounded-br-sm" />

                  <stat.icon className="w-8 h-8 text-cyan-400 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

                  <div className="font-display text-4xl font-bold text-white mb-1 group-hover:text-cyan-50 transition-colors">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
