import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-white text-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden bg-zinc-200"
          >
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://i.ibb.co/PzGg8hF5/Screenshot-2026-06-27-at-11-51-49-AM.png" 
              alt="Loop Salon Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none"></div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.4em] font-medium mb-6 text-black/60">The Philosophy</h2>
              
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight leading-[1.1] mb-8">
                Where Style <br /> Meets Precision.
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="space-y-6 font-sans text-base md:text-lg font-light leading-relaxed text-black/80"
            >
              <p>
                Loop Salon is a sanctuary for style-conscious individuals in Ahmedabad. We believe that a great haircut is more than just a service—it's an architectural process that defines your personal identity.
              </p>
              <p>
                With meticulous attention to detail, premium products, and a minimalist environment designed for relaxation, we deliver a transformative grooming experience tailored exclusively to you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-12 pt-12 border-t border-black/10"
            >
              <p className="text-sm uppercase tracking-widest font-medium">By Dipak Totlani</p>
              <p className="text-xs text-black/50 tracking-widest uppercase mt-1">Founder & Lead Stylist</p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
