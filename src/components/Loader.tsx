import { motion } from 'motion/react';

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 1.5 }}
      onAnimationComplete={() => {
         // Could remove from DOM if we wanted
      }}
      className="fixed inset-0 bg-[#050505] z-[9999] flex justify-center items-center pointer-events-none"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-2 border-primary border-t-transparent rounded-full animate-spin mb-8"></div>
        <motion.p 
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
          className="text-label-mono text-primary outline-none"
        >
          Initializing Portfolio Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
