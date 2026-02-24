import { Suspense, lazy, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Decorative Shard Component
const Shard = ({ delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1],
      y: [0, -30, 0],
      rotate: [0, 45, 0]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute w-3 h-3 border border-cyan-500/20 rotate-45 pointer-events-none hidden md:block ${className}`}
  />
);

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const translateTextX = useTransform(dx, [-600, 600], [-20, 20]);
  const translateTextY = useTransform(dy, [-600, 600], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const targetDate = new Date("2026-03-28T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { label: "DAYS", value: timeLeft.days, id: "01" },
    { label: "HOURS", value: timeLeft.hours, id: "02" },
    { label: "MINS", value: timeLeft.minutes, id: "03" },
    { label: "SECS", value: timeLeft.seconds, id: "04" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      {/* Decorative Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-sm text-muted-foreground tracking-widest uppercase animate-pulse">
              Initializing Core...
            </div>
          </div>
        }
      >
        <div className="absolute inset-0 pointer-events-none">
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/yfJjJfK3AneU40oH/scene.splinecode"
          />
        </div>
      </Suspense>

      {/* Floating Decorative Elements */}
      <Shard className="top-[20%] left-[15%]" delay={0} />
      <Shard className="top-[25%] right-[20%]" delay={1.5} />
      <Shard className="bottom-[30%] left-[25%]" delay={3} />
      <Shard className="bottom-[20%] right-[15%]" delay={4.5} />

      {/* Content Overlay */}
      <motion.div
        style={{ x: translateTextX, y: translateTextY }}
        className="relative z-10 container mx-auto px-6 text-center pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Cyber Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group cursor-default inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono tracking-[0.3em] mb-12 uppercase transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#22d3ee]"></span>
            </span>
            <span className="text-glow-cyan">System.status(Online)</span>
            <span className="opacity-30">|</span>
            <span>Uplink_v2.0</span>
          </motion.div>

          <div className="relative mb-8 group">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute -top-6 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
            />

            <h2 className="font-mono text-xs md:text-sm text-cyan-400/50 tracking-[0.6em] uppercase mb-1">
              Welcome To
            </h2>

            <h1 className="font-display text-5xl md:text-8xl font-black tracking-tighter leading-none relative">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">CYBERTHON</span>
                {/* Scanning Laser Line */}
                <motion.span
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-[1px] bg-cyan-400/80 z-20 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                />
              </span>
              <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">2026</span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute -bottom-6 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
            />
          </div>

          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-light tracking-wide mb-16 leading-relaxed">
            The ultimate frontier for cybersecurity innovation. <br className="hidden md:block" />
            Where elite hackers build the <span className="text-white font-medium underline decoration-cyan-500/40 underline-offset-[10px] decoration-2">digital future</span>.
          </p>

          {/* Countdown Timer with Technical Modules */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 w-full max-w-5xl mx-auto">
            {timerItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 + index * 0.15 }}
                className="relative group"
              >
                <div className="glass-card p-5 md:p-10 rounded-2xl border border-white/5 group-hover:border-cyan-500/40 transition-all duration-500 relative overflow-hidden backdrop-blur-xl">
                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Technical Label */}
                  <div className="absolute top-2.5 left-4 font-mono text-[7px] text-cyan-500/40 tracking-[0.2em] uppercase">
                    MOD_REF_{item.id}
                  </div>

                  <div className="font-display text-5xl md:text-6xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500 text-shadow-sm">
                    {item.value.toString().padStart(2, "0")}
                  </div>

                  <div className="font-mono text-[8px] md:text-[10px] text-muted-foreground tracking-[0.4em] uppercase flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500/30" />
                    {item.label}
                    <span className="w-1 h-1 rounded-full bg-cyan-500/30" />
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/40 rounded-tl-sm transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/40 rounded-br-sm transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-20 flex flex-wrap justify-center gap-8"
          >
            <button className="group relative px-10 py-4 bg-cyan-500 text-black font-display text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 filter blur-xl bg-cyan-400 opacity-30 group-hover:opacity-60 transition-opacity" />
            </button>

            <button className="group relative px-10 py-4 glass text-white font-display text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:text-cyan-400">
              <span className="relative z-10 flex items-center gap-3">
                Contact us
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Console Data */}
      <div className="absolute bottom-8 left-8 z-[5] pointer-events-none hidden xl:block">
        <div className="font-mono text-[9px] text-cyan-500/20 flex flex-col gap-1.5 uppercase tracking-widest">
          <span className="flex gap-2"><span className="text-cyan-500/40 strike">/</span> Initializing Security_Protocol_26</span>
          <span className="flex gap-2"><span className="text-cyan-500/40 strike">/</span> Encrypting Primary_Data_Flow</span>
          <span className="flex gap-2"><span className="text-cyan-500/40 strike">/</span> Waiting for Remote_Uplink...</span>
        </div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40 mix-blend-soft-light" />
    </section>
  );
}
