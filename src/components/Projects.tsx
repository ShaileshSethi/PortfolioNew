import { ExternalLink, Info, Gamepad2, PlayCircle, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Projects() {
  return (
    <section className="mb-40" id="work">
      <Reveal className="flex justify-between items-end mb-16 border-b border-outline-variant/30 pb-6">
        <div>
          <p className="text-label-mono text-primary mb-2 uppercase tracking-widest">01 // Portfolio</p>
          <h2 className="text-display-xl">Featured Deployments</h2>
        </div>
        <a className="hidden md:flex text-label-mono text-on-surface-variant hover:text-primary items-center gap-2 motion-transition" href="#">
          View Archive <ArrowUpRight size={18} />
        </a>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[400px] gap-6">
        {/* Project 1 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-8 border border-error/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-error/5 group-hover:bg-error/15 motion-transition z-0"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-error rounded-full blur-[80px] opacity-20 group-hover:opacity-40 motion-transition animate-pulse"></div>
          <div className="relative z-20">
            <div className="flex gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-error/50 text-error rounded-full backdrop-blur-md">Next.js</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-error/50 text-error rounded-full backdrop-blur-md">WebSockets</span>
              <span className="text-label-mono text-xs px-3 py-1 bg-error/20 text-error rounded-full border border-error/30">3rd Place — Hack4Relief</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-2 text-white">PROJECT 01: Hack4Relief / SafeZones</h3>
            <p className="text-body-md text-on-surface-variant text-sm mb-6 max-w-lg">Emergency platform featuring real-time startup dashboard UI and critical alert systems with a futuristic aesthetic.</p>
            <div className="flex gap-4">
              <a className="inline-flex items-center gap-2 text-label-mono text-error hover:text-white motion-transition text-sm" href="https://safezones.vercel.app/" target="_blank">
                Demo <ExternalLink size={16} />
              </a>
              <a className="inline-flex items-center gap-2 text-label-mono text-error hover:text-white motion-transition text-sm" href="https://lnkd.in/gMsawjRV" target="_blank">
                Info <Info size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Project 2 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-8 border border-secondary-fixed-dim/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
          <img alt="Teleport Killer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 motion-transition z-0 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPfAARHmgaLCNhOrsHVNzuBDZsZFV0ErzdCGp3coJE2Bk56kabZZVZwV2PaA_EEdN-GZWy3lcrl5NW30d5uazwAiNMCpWGF6P82p6fwmy0iYCiQP1mVOoCnmN_gQajcs52YTHD11ilgs1WTajRjX1guj5K8cy2zQo4svjbcj-ci9QX9FdtNcdi2QHxVnilTJPlZMvLWQ1Dtr_bLLbZnuaAJbdlZ-KWmrc4I4QRG115LueMjXFfFX1LJ3ES7oEPpYDZKuMWcx0763-I"/>
          <div className="relative z-20">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-secondary-fixed-dim/50 text-secondary-fixed-dim rounded-full">C++</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-secondary-fixed-dim/50 text-secondary-fixed-dim rounded-full">Unreal Engine</span>
              <span className="text-label-mono text-xs px-3 py-1 bg-secondary-fixed-dim/20 text-secondary-fixed-dim rounded-full border border-secondary-fixed-dim/30">Top 10 Finalist</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-2 text-white">PROJECT 02: Teleport Killer</h3>
            <p className="text-body-md text-on-surface-variant text-sm mb-6 max-w-lg">Neon cyberpunk game aesthetics with custom glitch effects and intense visuals.</p>
            <a className="inline-flex items-center gap-2 text-label-mono text-secondary-fixed-dim hover:text-white motion-transition text-lg font-bold" href="https://www.jabali.ai/game/574e925c-814c-4655-b0c2-18d4b8d1f1de/create-from-scratch/teleport-killer/" target="_blank">
              Play Game <Gamepad2 size={18} />
            </a>
          </div>
        </Reveal>

        {/* Project 3 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-8 border border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 motion-transition z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-15 z-0"></div>
          <div className="relative z-20">
            <div className="flex gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-primary/50 text-primary rounded-full">AI/ML</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-primary/50 text-primary rounded-full">Game Dev</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-1 text-white">PROJECT 03: Vibe Code Quest</h3>
            <p className="text-label-mono text-primary mb-2 text-xs uppercase tracking-widest">Master AI Prompt Engineering</p>
            <p className="text-body-md text-on-surface-variant text-sm mb-6 max-w-lg">An 8-bit adventure game designed to teach AI prompt engineering. Retro 8-bit mixed with modern synthwave glow.</p>
            <div className="flex gap-4">
              <a className="inline-flex items-center gap-2 text-label-mono text-primary hover:text-white motion-transition text-sm" href="https://app-b0pl8qd02cjl.appmedo.com/" target="_blank">
                App Link <ExternalLink size={16} />
              </a>
              <a className="inline-flex items-center gap-2 text-label-mono text-primary hover:text-white motion-transition text-sm" href="https://youtu.be/CLINImDdqBI?si=trTdXy3TtO781DcC" target="_blank">
                Video Demo <PlayCircle size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Project 4 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-8 border border-tertiary-container/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-tertiary-container rounded-full blur-[80px] opacity-10 z-0"></div>
          <div className="relative z-20">
            <div className="flex gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-tertiary-container/40 text-tertiary-container rounded-full">React Native</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-tertiary-container/40 text-tertiary-container rounded-full">UX Design</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-1 text-white">PROJECT 04: MeowCare</h3>
            <p className="text-label-mono text-tertiary-container mb-2 text-xs uppercase tracking-widest">Connecting care through accessible tech</p>
            <p className="text-body-md text-on-surface-variant text-sm mb-6 max-w-lg">A remote caregiving dashboard system tailored for usability and monitoring. Clean, accessible, warm tech-for-good.</p>
            <a className="inline-flex items-center gap-2 text-label-mono text-tertiary-container hover:text-white motion-transition text-sm" href="https://vercel.com/shaileshtunes-6402s-projects/meowcare./2pxWGioMfUc4Yiykrn39S7X1VH2t" target="_blank">
              View Deployment <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
