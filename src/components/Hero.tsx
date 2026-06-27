import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const titleWords = ["Elevate", "Your", "Style"];

  return (
    <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image/Video with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full flex items-center justify-center"
        >
            <img 
              src="https://i.ibb.co/MD6g5jGP/Screenshot-2026-06-27-at-11-52-42-AM.png" 
              alt="Salon styling" 
              className="w-full h-full object-cover opacity-80"
            />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center mt-20 will-change-[opacity]"
      >
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 lg:gap-x-8 mb-6">
          {titleWords.map((word, idx) => (
            <div key={idx} className="overflow-hidden py-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 + (idx * 0.15) }}
                className="text-[4rem] min-[400px]:text-[5rem] sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase tracking-tighter leading-[0.8] text-white"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="overflow-hidden"
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-sans font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/80 max-w-2xl mt-4">
            Premium Hair Salon Experience in Ahmedabad
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/50 font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
