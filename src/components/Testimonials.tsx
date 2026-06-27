import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const REVIEWS = [
  {
    text: "Clear communication, timely service, good ambiance and reasonable pricing.",
    author: "Priyanka Jk",
    rating: 5
  },
  {
    text: "My regular place for a great haircut. The attention to detail is unmatched in Ahmedabad.",
    author: "Muscle Garaage",
    rating: 5
  },
  {
    text: "Minimalist ambiance, exceptional stylists. Loop Salon transformed my look completely. Highly recommend.",
    author: "Rahul M.",
    rating: 5
  },
  {
    text: "Professional, hygienic, and they really listen to what you want. The best salon experience I've had.",
    author: "Sneha Patel",
    rating: 4
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="py-24 md:py-40 bg-zinc-50 text-black relative overflow-hidden">
      {/* Liquid background elements for glassmorphism to show */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-zinc-200/50 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-zinc-200/50 rounded-full blur-[80px]"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Star size={20} fill="currentColor" />
          <span className="font-sans font-bold text-xl">4.6</span>
          <span className="font-sans text-sm text-black/60">(168 Google Reviews)</span>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center mb-12">
          <span className="absolute top-0 left-0 text-9xl font-display text-black/5 leading-none">"</span>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-8 md:px-16"
            >
              <p className="text-2xl md:text-4xl font-sans font-light leading-snug mb-8">
                {REVIEWS[currentIndex].text}
              </p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="font-display uppercase tracking-widest text-sm">
                — {REVIEWS[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6">
          <button onClick={prev} className="p-3 border border-black/10 bg-white/40 backdrop-blur-md shadow-sm rounded-full hover:bg-black hover:border-black hover:text-white transition-all" aria-label="Previous review">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-3 border border-black/10 bg-white/40 backdrop-blur-md shadow-sm rounded-full hover:bg-black hover:border-black hover:text-white transition-all" aria-label="Next review">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="mt-12">
          <a 
            href="https://share.google/4nX2NQzVwY2ij6eLU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-widest uppercase border-b border-black pb-1 hover:text-black/50 transition-colors inline-flex items-center gap-2"
          >
            Read more on Google <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
