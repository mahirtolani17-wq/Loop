import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const STEPS = [
  { num: '01', title: 'Consultation', desc: 'We begin by understanding your vision, hair type, and lifestyle to propose the perfect look.' },
  { num: '02', title: 'Preparation', desc: 'A relaxing hair wash and scalp massage using premium products tailored to your needs.' },
  { num: '03', title: 'The Execution', desc: 'Precision cutting, coloring, and styling utilizing industry-leading techniques.' },
  { num: '04', title: 'Refinement', desc: 'Final styling and professional advice on how to maintain your look at home.' },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For desktop horizontal scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className="py-24 md:py-40 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-32">
        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight">The Loop <br/> Experience</h2>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Progress Line */}
        <div className="absolute top-12 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-white/20 hidden md:block">
          <motion.div 
            className="h-full bg-white origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {STEPS.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pt-6 md:pt-20 px-6 md:px-8 pb-8 md:pb-0 bg-white/[0.02] md:bg-transparent border border-white/5 md:border-transparent rounded-3xl md:rounded-none backdrop-blur-md md:backdrop-blur-none"
            >
              <div className="text-6xl font-display font-bold text-transparent mb-6 hidden md:block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                {step.num}
              </div>
              <div className="text-3xl font-display font-bold text-white mb-6 md:hidden">
                {step.num}
              </div>
              <h3 className="text-2xl font-display uppercase tracking-wider mb-4">{step.title}</h3>
              <p className="font-sans font-light text-sm text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
