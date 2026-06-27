import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function Location() {
  const address = "GF-10, Avan Business Park (ABC), Near Radhe Fortune Complex Service Road, Apollo Hospital Circle, Sardar Patel Ring Rd, Opp. NARAYANI HEIGHTS HOTEL, Bhat, Ahmedabad, Gujarat 382428";
  
  return (
    <section id="contact" className="py-24 bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-10">Find Us</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <MapPin className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-display uppercase tracking-widest mb-2">Location</h4>
                  <p className="font-sans font-light text-black/70 leading-relaxed max-w-sm">
                    {address}
                  </p>
                  <a 
                    href="https://share.google/4nX2NQzVwY2ij6eLU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-xs font-sans tracking-widest uppercase border-b border-black pb-1 hover:text-black/50 transition-colors font-medium"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] w-full bg-zinc-200 relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.6180327666497!2d72.6135899!3d23.1476101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83006eb46a59%3A0xb3631ccb14644558!2sLoop%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-500"
              title="Loop Salon Location"
            ></iframe>
            {/* The grayscale filter is applied to the container, creating the B&W map effect */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
