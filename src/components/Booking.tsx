import { motion } from 'motion/react';
import { Phone, MessageCircle, Clock, CalendarDays } from 'lucide-react';

export function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-black text-white relative">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/PzGg8hF5/Screenshot-2026-06-27-at-11-51-49-AM.png')] opacity-[0.2] bg-cover bg-center pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tight mb-6">Book Your <br className="md:hidden" /> Appointment</h2>
          <p className="text-sm md:text-base font-sans tracking-[0.2em] uppercase text-white/70">Experience the Loop difference</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919909813221"
            className="w-full md:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-none font-display uppercase tracking-widest text-lg hover:bg-gray-200 transition-colors"
          >
            <Phone size={24} />
            <span>Call Now</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919909813221?text=Hi%20Loop%20Salon!%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-4 border border-white text-white px-10 py-5 rounded-none font-display uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-colors"
          >
            <MessageCircle size={24} />
            <span>WhatsApp</span>
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-12 relative"
        >
          {/* Glass background for operating hours */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl -z-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"></div>
          
          <div className="flex flex-col items-center gap-3 p-8">
            <Clock size={20} className="text-white/50" />
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/50">Operating Hours</h4>
            <p className="font-sans font-medium text-lg">10:00 AM – 9:30 PM</p>
            <span className="text-[10px] font-sans tracking-widest uppercase border border-white/30 px-3 py-1 rounded-full text-white/70">All Days</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-8">
            <CalendarDays size={20} className="text-white/50" />
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/50">Walk-ins</h4>
            <p className="font-sans font-medium text-lg text-center">Subject to availability.<br/>Prior booking recommended.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
