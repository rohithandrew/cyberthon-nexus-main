import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";

const events = [
  {
    year: "PHASE 01",
    title: "Inception",
    desc: "Registration & Onboarding via Devfolio.",
    color: "hsl(var(--primary))",
  },
  {
    year: "PHASE 02",
    title: "Assembly",
    desc: "Team formation. Choose your allies wisely.",
    color: "#d8b4fe", // Lighter Purple
  },
  {
    year: "PHASE 03",
    title: "Protocol",
    desc: "Idea submission. Define your objective.",
    color: "hsl(var(--primary))",
  },
  {
    year: "PHASE 04",
    title: "Selection",
    desc: "Top 20 elite squads shortlisted.",
    color: "#d8b4fe",
  },
  {
    year: "PHASE 05",
    title: "Execution",
    desc: "48 hours of intense development.",
    color: "hsl(var(--primary))",
  },
  {
    year: "PHASE 06",
    title: "Evaluation",
    desc: "Demo day. Present to the council.",
    color: "#d8b4fe",
  },
  {
    year: "PHASE 07",
    title: "Ascension",
    desc: "Winners announced. Legacy secured.",
    color: "hsl(var(--primary))",
  },
];

const ITEM_WIDTH = 500;
const WAVE_AMPLITUDE = 120;
const WAVE_FREQUENCY = 0.003;

// CONFIG: EXACT SCROLL BUFFERS
const START_BUFFER = 2 * ITEM_WIDTH; // 1000px start buffer
const END_BUFFER = 0;                // 0px end buffer (Immediate Release)

export default function Timeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ---------------------------------------------------------
  // SCROLL GEOMETRY
  // ---------------------------------------------------------
  const totalTravelDistance = START_BUFFER + (events.length - 1) * ITEM_WIDTH + END_BUFFER;
  const totalHeight = totalTravelDistance + window.innerHeight;
  const finalMatch = (events.length - 1) * ITEM_WIDTH + END_BUFFER;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Direct transform for 1:1 sync (no spring lag)
  const x = useTransform(scrollYProgress, [0, 1], [START_BUFFER, -finalMatch]);


  // ---------------------------------------------------------
  // SVG PATH GENERATION (With Buffers)
  // ---------------------------------------------------------
  const svgStart = -START_BUFFER;
  const svgEnd = (events.length - 1) * ITEM_WIDTH + END_BUFFER;

  const pathData = useMemo(() => {
    let d = "";
    d += `M ${svgStart},${Math.sin(svgStart * WAVE_FREQUENCY) * WAVE_AMPLITUDE}`;

    for (let i = svgStart; i <= svgEnd; i += 10) {
      const y = Math.sin(i * WAVE_FREQUENCY) * WAVE_AMPLITUDE;
      d += ` L ${i},${y}`;
    }
    return d;
  }, [svgStart, svgEnd]);

  return (
    <section ref={targetRef} className="relative bg-background" style={{ height: totalHeight + "px" }}>

      {/* FIXED VIEWPORT */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Background FX */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--background))_0%,hsl(var(--background))_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="absolute top-8 left-8 z-30 pointer-events-none">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
            <span className="font-display text-primary text-xs tracking-[0.2em] uppercase">System-Sequence</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground font-display tracking-tighter opacity-90">
            TIMELINE
          </h2>
        </div>

        {/* MOVING TRACK */}
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="relative h-full flex items-center pl-[50vw] will-change-transform"
        >

          {/* SVG WRAPPER */}
          <div className="absolute top-1/2 left-0 w-[0px] overflow-visible" style={{ transform: "translateY(0)" }}>
            <svg className="overflow-visible" style={{ transform: "translateY(-300px)" }}>
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#d8b4fe" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                </linearGradient>
                <filter id="neonGlow" height="300%" width="300%" x="-75%" y="-75%">
                  <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
                  <feGaussianBlur in="thicken" stdDeviation="6" result="blurred" />
                  <feFlood floodColor="hsl(var(--primary))" result="glowColor" />
                  <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
                  <feMerge>
                    <feMergeNode in="softGlow_colored" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d={pathData}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                filter="url(#neonGlow)"
                className="opacity-80"
                transform="translate(0, 300)"
              />
            </svg>
          </div>

          {/* EVENTS */}
          {events.map((event, index) => {
            const xPos = index * ITEM_WIDTH;
            const rawY = Math.sin(xPos * WAVE_FREQUENCY) * WAVE_AMPLITUDE;
            const isTop = index % 2 !== 0;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: xPos + "px",
                  top: "50%",
                  transform: `translate(-50%, calc(-50% + ${rawY}px))`
                }}
              >
                {/* 1. THE NODE */}
                <div className="relative z-10 group cursor-pointer">
                  <div className="absolute inset-0 -m-4 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-500 ease-out" />
                  <div className="w-4 h-4 rounded-full bg-background border-2 border-foreground shadow-[0_0_15px_hsl(var(--primary)/0.5)] relative z-20 group-hover:scale-150 transition-transform duration-300"
                    style={{ borderColor: event.color }}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: event.color }} />
                  </div>
                </div>

                {/* 2. THE CARD */}
                <div
                  className={`
                    absolute left-1/2 -translate-x-1/2 w-[300px] 
                    flex flex-col gap-2 p-5
                    backdrop-blur-xl bg-white/[0.03] border border-white/10
                    transition-all duration-500 hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]
                    group
                  `}
                  style={{
                    [isTop ? 'bottom' : 'top']: "60px",
                    borderRadius: "4px"
                  }}
                >
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30" />

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-px h-[60px] bg-gradient-to-b from-transparent to-primary/30 border-r border-dashed border-primary/30
                      ${isTop ? "top-full" : "bottom-full"}
                    `}
                  />

                  <div className="flex items-center gap-2 mb-1 opacity-80">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    <span className="text-[10px] font-display tracking-widest uppercase" style={{ color: event.color }}>
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground font-display uppercase tracking-wide group-hover:tracking-wider transition-all duration-300">
                    {event.title}
                  </h3>

                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {event.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
}
