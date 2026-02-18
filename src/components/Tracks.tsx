import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Smartphone, Bitcoin, Search, Database, Brain, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
  { icon: Shield, title: "Web Security", desc: "Find and exploit web vulnerabilities in real-world apps." },
  { icon: Smartphone, title: "Mobile Security", desc: "Reverse engineer mobile apps and uncover fatal flaws." },
  { icon: Bitcoin, title: "Crypto & Blockchain", desc: "Smart contract auditing and DeFi exploit challenges." },
  { icon: Search, title: "Reverse Engineering", desc: "Binary analysis, malware dissection, and CTF puzzles." },
  { icon: Database, title: "Digital Forensics", desc: "Investigate breaches and recover critical evidence." },
  { icon: Brain, title: "AI Security", desc: "Adversarial ML, prompt injection, and AI safety." },
];

export default function Tracks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tracks" className="relative py-32 bg-background overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 border border-secondary/50 text-secondary-foreground text-xs font-mono tracking-widest mb-4">
            /// SECTOR_02: DOMAINS
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ARENA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Select your battlefield. Prove your expertise. Dominate the leaderboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <TrackCard key={track.title} track={track} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TrackCard = ({ track, index, inView }: { track: any, index: number, inView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative h-full"
    >
      <div className={cn(
        "relative h-full overflow-hidden rounded-2xl bg-black/40 border border-white/5 p-8 transition-all duration-500",
        "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
        "backdrop-blur-sm"
      )}>

        {/* Hover Gradient Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500",
            hovered && "opacity-100"
          )}
        />

        {/* Floating Text/Deco */}
        <div className="absolute top-4 right-4 text-xs font-mono text-white/20 transition-colors group-hover:text-cyan-400">
          [{String(index + 1).padStart(2, '0')}]
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
            <track.icon size={28} />
          </div>

          <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-cyan-100 transition-colors">
            {track.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
            {track.desc}
          </p>

          <div className="flex items-center text-sm font-medium text-white/40 group-hover:text-cyan-400 transition-colors mt-auto">
            <span>ENTER_DOMAIN</span>
            <ArrowUpRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
