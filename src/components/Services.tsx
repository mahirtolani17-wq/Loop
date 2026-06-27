import { motion } from 'motion/react';
import { Scissors, Palette, Sparkles, Wind, UserCheck, Crown } from 'lucide-react';

const SERVICES = [
  {
    title: 'Haircuts',
    desc: 'Precision cuts tailored to your facial structure and lifestyle. Available for men, women, and kids.',
    icon: Scissors,
  },
  {
    title: 'Color & Highlights',
    desc: 'From subtle balayage to bold fashion colors, expertly formulated for vibrant, healthy hair.',
    icon: Palette,
  },
  {
    title: 'Treatments',
    desc: 'Restorative keratin, smoothening, and deep conditioning spa treatments to revitalize your hair.',
    icon: Sparkles,
  },
  {
    title: 'Styling & Blowouts',
    desc: 'Flawless styling for any occasion, ensuring your hair holds perfect form with movement.',
    icon: Wind,
  },
  {
    title: 'Beard Grooming',
    desc: 'Detailed beard shaping, trimming, and conditioning for the modern gentleman.',
    icon: UserCheck,
  },
  {
    title: 'Bridal & Event',
    desc: 'Comprehensive styling packages to make you look stunning on your most important days.',
    icon: Crown,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display uppercase tracking-tight"
            >
              Our Services
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] w-full max-w-sm bg-white mt-6 origin-left"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm font-sans tracking-widest uppercase text-white/50 max-w-xs"
          >
            Curated offerings for the discerning client
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer relative p-6 md:p-8 rounded-3xl transition-all duration-500 bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
              <div className="mb-6 p-4 inline-block border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-display uppercase tracking-wider mb-4 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 font-sans font-light text-sm md:text-base leading-relaxed mb-6 transition-all duration-300">
                {service.desc}
              </p>
              <a href="#booking" className="inline-block text-xs uppercase tracking-[0.2em] font-medium border-b border-white/30 pb-1 hover:text-white hover:border-white transition-colors">
                Book Service
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="mt-32 border-y border-white/10 py-6 overflow-hidden flex whitespace-nowrap bg-black">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 items-center text-4xl md:text-6xl font-display font-bold uppercase tracking-widest text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
        >
          <span>HAIRCUTS</span> <span className="text-white/30">•</span>
          <span>COLORING</span> <span className="text-white/30">•</span>
          <span>TREATMENTS</span> <span className="text-white/30">•</span>
          <span>STYLING</span> <span className="text-white/30">•</span>
          <span>GROOMING</span> <span className="text-white/30">•</span>
          {/* Duplicate for seamless loop */}
          <span>HAIRCUTS</span> <span className="text-white/30">•</span>
          <span>COLORING</span> <span className="text-white/30">•</span>
          <span>TREATMENTS</span> <span className="text-white/30">•</span>
          <span>STYLING</span> <span className="text-white/30">•</span>
          <span>GROOMING</span> <span className="text-white/30">•</span>
        </motion.div>
      </div>
    </section>
  );
}
