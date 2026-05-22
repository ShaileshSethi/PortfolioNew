import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function Reveal({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
