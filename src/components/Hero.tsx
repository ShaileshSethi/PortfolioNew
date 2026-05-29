import { ArrowRight, Link as LinkIcon, Camera } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';
import { useState, useEffect } from 'react';

const roles = ["Engineer.", "Builder.", "AI Explorer.", "Creator.", "Problem Solver."];

export function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typeSpeed = 500;
      setTimeout(() => {}, typeSpeed);
      return;
    }

    const timer = setTimeout(() => {
      setRoleText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <Reveal className="min-h-[700px] flex flex-col justify-center items-start mt-12 mb-32">
      <h1 className="text-display-xl text-on-surface mb-6 max-w-4xl tracking-tighter">
        Building Ideas Into <br/>
        <span className="text-gradient-primary">Digital Reality</span>
      </h1>
      <div className="text-headline-lg-mobile text-on-surface-variant mb-10 h-12">
        I am a <span className="text-secondary-fixed-dim typewriter-cursor pl-2">{roleText}</span>
      </div>
      <p className="text-body-md text-on-surface-variant max-w-2xl mb-12 opacity-90 leading-relaxed">
        Shailesh Sethi is a passionate developer focused on creating high-performance, aesthetically striking digital experiences. Merging deep technical expertise with cinematic design sensibilities to build the next generation of web applications.
      </p>
      <div className="flex flex-wrap gap-6">
        <MagneticButton href="#work" className="px-8 py-4 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary text-label-mono font-bold rounded shadow-lg glow-primary motion-transition flex items-center gap-2">
          View Projects <ArrowRight size={18} />
        </MagneticButton>
        <MagneticButton href="https://www.linkedin.com/in/shailesh-sethi-3aab58378/" target="_blank" className="px-8 py-4 bg-transparent border border-primary text-primary text-label-mono font-bold rounded hover:bg-primary/10 hover-glow-primary motion-transition flex items-center gap-2">
          LinkedIn <LinkIcon size={18} />
        </MagneticButton>
        <MagneticButton href="https://www.instagram.com/p/DYE1_JYE3rZ/?igsh=NXJneGdpcnZzaW5r" target="_blank" className="px-8 py-4 bg-surface-container text-on-surface text-label-mono font-bold rounded border border-outline-variant hover:border-outline hover:text-white motion-transition flex items-center gap-2">
          Instagram <Camera size={18} />
        </MagneticButton>
      </div>
    </Reveal>
  );
}
