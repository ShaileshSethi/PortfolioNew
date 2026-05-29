import { ArrowRight, Link as LinkIcon, Camera, Sparkles, Zap, Code2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { Reveal } from './Reveal';
import { useState, useEffect } from 'react';
import logoSrc from '../assets/logo-ss.png';

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
    <Reveal className="min-h-screen flex items-center mt-16 md:mt-0 mb-20 md:mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center w-full">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-label-mono text-primary mb-6 shadow-[0_0_30px_rgba(165,231,255,0.08)]">
            <Sparkles size={14} /> Portfolio 2026
          </div>
          <h1 className="text-display-xl text-on-surface mb-6 max-w-4xl tracking-tighter leading-[0.98]">
            Building Ideas Into <br />
            <span className="text-gradient-primary">Digital Reality</span>
          </h1>
          <div className="text-xl md:text-2xl text-on-surface-variant mb-7 h-8 md:h-10">
            I am a <span className="text-secondary-fixed-dim typewriter-cursor pl-2">{roleText}</span>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mb-9 opacity-90 leading-relaxed">
            Shailesh Sethi is a passionate developer focused on creating high-performance, aesthetically striking digital experiences. Merging deep technical expertise with cinematic design sensibilities to build the next generation of web applications.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-5">
            <MagneticButton href="#work" className="px-7 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary text-label-mono font-bold rounded shadow-lg glow-primary motion-transition flex items-center gap-2 hover:shadow-[0_0_40px_rgba(165,231,255,0.35)]">
              View Projects <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/shailesh-sethi-3aab58378/" target="_blank" className="px-7 md:px-8 py-3 md:py-3.5 bg-transparent border border-primary/50 text-primary text-label-mono font-bold rounded hover:bg-primary/10 hover-glow-primary motion-transition flex items-center gap-2">
              LinkedIn <LinkIcon size={18} />
            </MagneticButton>
            <MagneticButton href="https://www.instagram.com/p/DYE1_JYE3rZ/?igsh=NXJneGdpcnZzaW5r" target="_blank" className="px-7 md:px-8 py-3 md:py-3.5 bg-surface-container text-on-surface text-label-mono font-bold rounded border border-outline-variant hover:border-outline hover:text-white motion-transition flex items-center gap-2">
              Instagram <Camera size={18} />
            </MagneticButton>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-xl">
            {[
              ['4+', 'Featured Builds'],
              ['UI', 'Motion Focus'],
              ['24/7', 'Curious Mind'],
            ].map(([value, label]) => (
              <div key={label} className="glass-panel rounded-2xl px-4 py-4 border border-outline-variant/30 bg-surface/35">
                <div className="text-primary text-xl md:text-2xl font-bold tracking-tight">{value}</div>
                <div className="text-label-mono text-xs text-on-surface-variant mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl opacity-70"></div>
          <div className="hero-visual-card relative w-full max-w-[520px] aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-surface/20 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(165,231,255,0.18),transparent_40%),radial-gradient(circle_at_30%_75%,rgba(110,32,140,0.22),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(0,210,255,0.14),transparent_25%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.02))]"></div>
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.08]">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-white/15" />
              ))}
            </div>

            <div className="absolute left-6 top-6 glass-panel px-3 py-2 rounded-full border border-primary/20 bg-black/30 flex items-center gap-2 text-label-mono text-primary">
              <Zap size={14} /> Neon Mode
            </div>
            <div className="absolute right-6 top-6 glass-panel px-3 py-2 rounded-full border border-secondary-fixed-dim/20 bg-black/30 flex items-center gap-2 text-label-mono text-secondary-fixed-dim">
              <Code2 size={14} /> UI / Motion
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hero-logo-ring absolute w-[78%] h-[78%] rounded-full border border-primary/20" />
              <div className="hero-logo-ring hero-logo-ring-delay absolute w-[58%] h-[58%] rounded-full border border-secondary-fixed-dim/16" />
              <img
                src={logoSrc}
                alt="Shailesh Sethi logo"
                className="hero-logo relative z-10 w-[62%] max-w-[340px] rounded-full drop-shadow-[0_0_35px_rgba(165,231,255,0.35)]"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div className="glass-panel rounded-2xl px-4 py-3 border border-white/10 bg-black/30 backdrop-blur-xl">
                <div className="text-label-mono text-xs uppercase tracking-[0.22em] text-on-surface-variant">Now</div>
                <div className="text-white font-semibold">Designing bold interfaces</div>
              </div>
              <div className="hidden sm:flex glass-panel rounded-2xl px-4 py-3 border border-white/10 bg-black/25 backdrop-blur-xl">
                <div className="text-right">
                  <div className="text-label-mono text-xs uppercase tracking-[0.22em] text-on-surface-variant">Focus</div>
                  <div className="text-white font-semibold">Creative Frontend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
