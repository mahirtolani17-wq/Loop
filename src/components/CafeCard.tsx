import { motion } from 'motion/react';
import { MapPin, Star } from 'lucide-react';
import { Cafe } from '../types';

interface Props {
  cafe: Cafe;
  index: number;
}

export function CafeCard({ cafe, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-24 items-center w-full py-16 md:py-32 border-b border-zinc-800/50 last:border-0`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] relative group bg-zinc-900 rounded-sm">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={cafe.imageUrl}
            alt={cafe.name}
            className="w-full h-full object-cover filter brightness-[0.85] contrast-125 transition-all duration-700 group-hover:brightness-100"
          />
        </motion.div>
        <div className="absolute top-6 right-6 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 px-4 py-1.5 flex items-center shadow-xl">
          <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200/90">{cafe.vibe}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 px-4 md:px-0">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <MapPin className="w-4 h-4 text-amber-600/70" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium">{cafe.neighborhood}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-50 leading-tight">
            {cafe.name}
          </h2>
        </div>

        <p className="text-zinc-400 text-lg leading-relaxed font-light">
          {cafe.description}
        </p>

        <div className="pt-8 border-t border-zinc-800/50">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-5 flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-amber-600/70" />
            Curator Highlights
          </h3>
          <ul className="space-y-3.5">
            {cafe.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-center gap-4 text-zinc-300 font-light text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700/50" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
