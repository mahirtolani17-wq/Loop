import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-black">
      {/* Soft glowing orbs for warmth - using radial gradients instead of blur for 60fps mobile performance */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)'
        }}
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-20%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)'
        }}
      />

      {/* Constant scrolling distinct circles */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] left-[70%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] border-[1px] border-white/5 rounded-full pointer-events-none opacity-50 md:opacity-100"
      />
      
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[60%] left-[-10%] md:left-[10%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] border-[1px] border-white/5 rounded-full pointer-events-none flex items-center justify-center opacity-50 md:opacity-100"
      >
         <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/20 rounded-full absolute top-0 -translate-y-1/2"></div>
      </motion.div>
    </div>
  );
}
