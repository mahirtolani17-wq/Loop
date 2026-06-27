import { motion } from 'motion/react';

const IMAGES = [
  "https://i.ibb.co/23JGrYCy/Screenshot-2026-06-27-at-11-52-51-AM.png",
  "https://i.ibb.co/99VQ09k3/Screenshot-2026-06-27-at-11-58-28-AM.png",
  "https://i.ibb.co/3Yf6kXbF/Screenshot-2026-06-27-at-11-58-40-AM.png",
  "https://i.ibb.co/W41qdkmH/Screenshot-2026-06-27-at-11-57-20-AM.png",
  "https://i.ibb.co/4ZmXQKPG/Screenshot-2026-06-27-at-11-57-34-AM.png",
  "https://i.ibb.co/PzGg8hF5/Screenshot-2026-06-27-at-11-51-49-AM.png"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight mb-4">Portfolio</h2>
          <p className="text-sm font-sans tracking-widest uppercase text-black/60">Our Craft</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.2 }}
              className="relative overflow-hidden group cursor-pointer break-inside-avoid bg-zinc-100"
            >
              <img 
                src={src} 
                alt="Loop Salon Style" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-sans text-xs tracking-widest uppercase border border-white px-4 py-2">View</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://www.instagram.com/loopsalons?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-block text-xs uppercase tracking-[0.2em] font-medium border-b border-black pb-1 hover:text-black/50 hover:border-black/50 transition-colors">
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
