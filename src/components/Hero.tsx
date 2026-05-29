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
    <Reveal className="min-h-[calc(100vh-4rem)] md:min-h-screen flex items-start md:items-center pt-6 md:pt-0 mt-16 md:mt-0 mb-12 md:mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center w-full">
        <div className="order-1 lg:order-1 flex flex-col justify-center items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-label-mono text-primary mb-4 md:mb-6 shadow-[0_0_30px_rgba(165,231,255,0.08)] text-[11px] sm:text-sm">
            <Sparkles size={14} /> Portfolio 2026
          </div>
          <h1 className="text-[clamp(2.35rem,8.8vw,4.5rem)] md:text-display-xl text-on-surface mb-3 md:mb-6 max-w-4xl tracking-tighter leading-[0.95]">
            Building Ideas Into <br />
            <span className="text-gradient-primary">Digital Reality</span>
          </h1>
          <div className="text-sm sm:text-lg md:text-2xl text-on-surface-variant mb-5 md:mb-7 min-h-8 md:h-10">
            I am a <span className="text-secondary-fixed-dim typewriter-cursor pl-2 break-words">{roleText}</span>
          </div>
          <p className="text-[14px] sm:text-base md:text-body-md text-on-surface-variant max-w-2xl mb-6 md:mb-9 opacity-90 leading-relaxed">
            Shailesh Sethi is a passionate developer focused on creating high-performance, aesthetically striking digital experiences. Merging deep technical expertise with cinematic design sensibilities to build the next generation of web applications.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4 md:gap-5 w-full">
            <MagneticButton href="#work" className="w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-3.5 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary text-label-mono font-bold rounded shadow-lg glow-primary motion-transition flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(165,231,255,0.35)] min-h-11 sm:min-h-12 text-[12px] sm:text-sm">
              View Projects <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/shailesh-sethi-3aab58378/" target="_blank" className="w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-3.5 bg-transparent border border-primary/50 text-primary text-label-mono font-bold rounded hover:bg-primary/10 hover-glow-primary motion-transition flex items-center justify-center gap-2 min-h-11 sm:min-h-12 text-[12px] sm:text-sm">
              LinkedIn <LinkIcon size={18} />
            </MagneticButton>
            <MagneticButton href="https://www.instagram.com/p/DYE1_JYE3rZ/?igsh=NXJneGdpcnZzaW5r" target="_blank" className="w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-3.5 bg-surface-container text-on-surface text-label-mono font-bold rounded border border-outline-variant hover:border-outline hover:text-white motion-transition flex items-center justify-center gap-2 min-h-11 sm:min-h-12 text-[12px] sm:text-sm">
              Instagram <Camera size={18} />
            </MagneticButton>
          </div>
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-xl">
            {[
              ['4+', 'Featured Builds'],
              ['UI', 'Motion Focus'],
              ['24/7', 'Curious Mind'],
            ].map(([value, label]) => (
              <div key={label} className="glass-panel rounded-2xl px-3.5 py-3.5 border border-outline-variant/30 bg-surface/35 min-h-16 sm:min-h-20">
                <div className="text-primary text-lg sm:text-xl md:text-2xl font-bold tracking-tight">{value}</div>
                <div className="text-label-mono text-xs text-on-surface-variant mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-2 lg:order-2 relative flex items-center justify-center lg:justify-end mt-1 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl opacity-70 hidden sm:block"></div>
          <div className="hero-visual-card relative w-full max-w-[300px] sm:max-w-[520px] aspect-[3/4] sm:aspect-square rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden border border-white/10 bg-surface/20 shadow-[0_30px_120px_rgba(0,0,0,0.6)] mx-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(165,231,255,0.18),transparent_40%),radial-gradient(circle_at_30%_75%,rgba(110,32,140,0.22),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(0,210,255,0.14),transparent_25%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.02))]"></div>
            <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 grid-rows-4 sm:grid-rows-6 opacity-[0.08]">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-white/15" />
              ))}
            </div>

            <div className="absolute left-3 sm:left-6 top-3 sm:top-6 glass-panel px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full border border-primary/20 bg-black/30 flex items-center gap-2 text-label-mono text-primary text-[10px] sm:text-label-mono">
              <Zap size={14} /> Neon Mode
            </div>
            <div className="absolute right-3 sm:right-6 top-3 sm:top-6 glass-panel px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full border border-secondary-fixed-dim/20 bg-black/30 flex items-center gap-2 text-label-mono text-secondary-fixed-dim text-[10px] sm:text-label-mono">
              <Code2 size={14} /> UI / Motion
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hero-logo-ring absolute w-[78%] h-[78%] rounded-full border border-primary/20" />
              <div className="hero-logo-ring hero-logo-ring-delay absolute w-[58%] h-[58%] rounded-full border border-secondary-fixed-dim/16" />
              <img
                src={logoSrc}
                alt="Shailesh Sethi logo"
                className="hero-logo relative z-10 w-[64%] sm:w-[62%] max-w-[300px] rounded-full drop-shadow-[0_0_35px_rgba(165,231,255,0.35)]"
              />
            </div>

            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex items-end justify-between gap-2.5 sm:gap-4">
              <div className="glass-panel rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 border border-white/10 bg-black/30 backdrop-blur-xl max-w-[74%] sm:max-w-none">
                <div className="text-label-mono text-xs uppercase tracking-[0.22em] text-on-surface-variant">Now</div>
                <div className="text-white font-semibold text-sm sm:text-base">Designing bold interfaces</div>
              </div>
              <div className="hidden sm:flex glass-panel rounded-2xl px-4 py-3 border border-white/10 bg-black/25 backdrop-blur-xl">
                <div className="text-right">
                  <div className="text-label-mono text-xs uppercase tracking-[0.22em] text-on-surface-variant">Focus</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Creative Frontend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
