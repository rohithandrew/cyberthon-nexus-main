import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-20T09:00:00+05:30").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function FlipDigit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <motion.div
          key={value}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="glass rounded-lg px-3 py-2 sm:px-5 sm:py-4 min-w-[56px] sm:min-w-[80px] flex items-center justify-center box-glow-cyan"
          style={{ perspective: "500px" }}
        >
          <span className="font-display text-2xl sm:text-5xl font-bold text-primary tabular-nums">
            {display}
          </span>
        </motion.div>
      </div>
      <span className="font-display text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);

  const tick = useCallback(() => setTime(getTimeLeft()), []);

  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
        Hackathon Live In
      </p>
      <div className="flex items-center gap-2 sm:gap-4">
        <FlipDigit value={time.days} label="Days" />
        <span className="font-display text-2xl sm:text-4xl text-primary animate-pulse-glow pb-6">:</span>
        <FlipDigit value={time.hours} label="Hours" />
        <span className="font-display text-2xl sm:text-4xl text-primary animate-pulse-glow pb-6">:</span>
        <FlipDigit value={time.minutes} label="Mins" />
        <span className="font-display text-2xl sm:text-4xl text-primary animate-pulse-glow pb-6">:</span>
        <FlipDigit value={time.seconds} label="Secs" />
      </div>
    </div>
  );
}
