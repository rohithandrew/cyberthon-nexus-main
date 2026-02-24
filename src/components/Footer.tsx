import { Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-20 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <div className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 tracking-wider mb-2">
              CYBERTHON 26
            </div>
            <div className="font-mono text-[10px] text-cyan-400 tracking-[0.3em] mb-6">
              A CCEE INITIATIVE
            </div>

            <div className="flex flex-wrap gap-8 mb-8">
              {["About", "Tracks", "Timeline", "Sponsors"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>

            <p className="text-xs text-white/20 font-mono">
              © 2026 CENTRE FOR CYBERSECURITY EXCELLENCE AND EMPOWERMENT. ALL SYSTEMS OPERATIONAL.
            </p>
          </div>

          <div className="flex md:justify-end gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-pink-500 hover:border-pink-500 hover:bg-pink-500/5 transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-red-500 hover:border-red-500 hover:bg-red-500/5 transition-all">
              <Youtube size={20} />
            </a>
          </div>

        </div>
      </div>

      {/* Large Watermark */}
      <div className="absolute -bottom-10 left-0 w-full text-center pointer-events-none opacity-[0.02]">
        <span className="font-display font-bold text-[15vw] leading-none text-white tracking-widest">
          CYBERTHON
        </span>
      </div>
    </footer>
  );
}
