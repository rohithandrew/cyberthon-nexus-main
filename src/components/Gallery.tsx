import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
    {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        title: "System Core",
        description: "Monitoring nexus nodes"
    },
    {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1770&auto=format&fit=crop",
        title: "Data Matrix",
        description: "Encrypted stream analysis"
    },
    {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        title: "Cyber Flow",
        description: "Neural network synchronization"
    },
    {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1974&auto=format&fit=crop",
        title: "Mainframe",
        description: "Central processing hub"
    },
    {
        url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop",
        title: "Security Ops",
        description: "Real-time threat detection"
    },
    {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        title: "Global Nexus",
        description: "Worldwide uplink established"
    },
    {
        url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1972&auto=format&fit=crop",
        title: "Hardware Layer",
        description: "Physical security protocols"
    },
    {
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        title: "Droid Protocol",
        description: "Autonomous defense units"
    }
];

export default function Gallery() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="gallery" className="relative py-32 bg-background overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-widest mb-4">
            /// VISUAL_LOGS
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
                        EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-glow-purple">GALLERY</span>
                    </h2>
                </motion.div>
            </div>

            <div className="relative group">
                {/* Edge Fades for seamless transition */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex gap-6 min-w-full py-4"
                    >
                        {/* Double the images for seamless infinite scroll */}
                        {[...images, ...images].map((img, i) => (
                            <div
                                key={i}
                                className="relative flex-none w-[600px] md:w-[900px] aspect-video group/item overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 group-hover:[animation-play-state:paused]"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 opacity-60 group-hover/item:opacity-100"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <div className="overflow-hidden">
                                        <h3 className="font-display text-xl font-bold text-white mb-1 translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                                            {img.title}
                                        </h3>
                                        <p className="font-mono text-xs text-purple-400 uppercase tracking-widest translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500 delay-75">
                                            {img.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500/0 group-hover/item:border-purple-500/50 transition-all duration-500" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500/0 group-hover/item:border-purple-500/50 transition-all duration-500" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
