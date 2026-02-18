import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Send, Terminal as TerminalIcon } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest mb-4">
            /// TRANSMISSION_LINK
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            INITIALIZE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CONTACT</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal Window Decor */}
          <div className="absolute -top-10 left-0 right-0 h-10 bg-black/80 rounded-t-xl border border-white/10 border-b-0 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <div className="ml-4 font-mono text-xs text-white/30">bash — user@cyberthon:~/contact</div>
          </div>

          <form onSubmit={handleSubmit} className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-b-xl rounded-t-none p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-10 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block font-mono text-xs text-cyan-500/70 mb-2 pl-2 border-l-2 border-cyan-500/30">
                    &gt; INPUT_NAME
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border-b border-white/10 focus:border-cyan-500 px-4 py-3 font-mono text-cyan-100 placeholder:text-white/20 focus:outline-none focus:bg-cyan-500/5 transition-all text-sm"
                    placeholder="Enter identifier..."
                  />
                </div>
                <div className="group">
                  <label className="block font-mono text-xs text-purple-500/70 mb-2 pl-2 border-l-2 border-purple-500/30">
                    &gt; INPUT_EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border-b border-white/10 focus:border-purple-500 px-4 py-3 font-mono text-cyan-100 placeholder:text-white/20 focus:outline-none focus:bg-purple-500/5 transition-all text-sm"
                    placeholder="Enter frequency..."
                  />
                </div>
              </div>

              <div className="group">
                <label className="block font-mono text-xs text-white/50 mb-2 pl-2 border-l-2 border-white/30">
                  &gt; INPUT_MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-white/5 border-b border-white/10 focus:border-white/50 px-4 py-3 font-mono text-cyan-100 placeholder:text-white/20 focus:outline-none focus:bg-white/5 transition-all resize-none text-sm"
                  placeholder="Enter transmission data..."
                />
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-mono text-sm py-4 rounded border border-cyan-500/30 hover:border-cyan-400 transition-all uppercase tracking-widest flex items-center justify-center gap-3"
              >
                {sent ? (
                  <>
                    <TerminalIcon className="w-4 h-4" />
                    <span>TRANSMISSION_COMPLETE</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">EXECUTE_SEND</span>
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-cyan-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
