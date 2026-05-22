import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useRef, useEffect } from 'react';

export function MagneticButton({ children, className = '', href, target }: { children: React.ReactNode, className?: string, href?: string, target?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMousePositionX(ref);
  const y = useMousePositionY(ref);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target } : {};

  return (
    <div className="relative inline-block" ref={ref}>
      <motion.div style={{ x: smoothX, y: smoothY }}>
        {/* @ts-ignore */}
        <Component className={className} {...props}>
          {children}
        </Component>
      </motion.div>
    </div>
  );
}

function useMousePositionX(ref: React.RefObject<HTMLElement | null>) {
  const x = useMotionValue(0);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, width } = ref.current.getBoundingClientRect();
      const relativeX = (e.clientX - left - width / 2) / 3;
      x.set(relativeX);
    };
    const handleMouseLeave = () => x.set(0);

    const el = ref.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [ref, x]);
  return x;
}

function useMousePositionY(ref: React.RefObject<HTMLElement | null>) {
  const y = useMotionValue(0);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const relativeY = (e.clientY - top - height / 2) / 3;
      y.set(relativeY);
    };
    const handleMouseLeave = () => y.set(0);

    const el = ref.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [ref, y]);
  return y;
}
