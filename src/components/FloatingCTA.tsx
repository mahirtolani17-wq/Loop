import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Floating WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="hidden md:block fixed bottom-8 right-8 z-[90]"
          >
            <a
              href="https://wa.me/919909813221?text=Hi%20Loop%20Salon!%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md text-black rounded-full shadow-[0_8px_32px_rgba(255,255,255,0.15)] border border-white/20 hover:scale-105 hover:bg-white transition-all relative group"
            >
              <MessageCircle size={24} />
              {/* Pulse effect */}
              <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-30"></span>
            </a>
          </motion.div>

          {/* Mobile Sticky Bottom Bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed bottom-6 left-6 right-6 z-[90] bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden supports-[backdrop-filter]:bg-black/20"
          >
            <div className="flex h-14">
              <a 
                href="tel:+919909813221"
                className="flex-1 flex justify-center items-center gap-2 text-white border-r border-white/10 font-display uppercase tracking-widest text-sm hover:bg-white/10 active:bg-white/20 transition-colors"
              >
                <Phone size={16} />
                Call
              </a>
              <a 
                href="https://wa.me/919909813221?text=Hi%20Loop%20Salon!%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 text-black bg-white/90 font-display uppercase tracking-widest text-sm hover:bg-white active:bg-white/80 transition-colors backdrop-blur-md"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
