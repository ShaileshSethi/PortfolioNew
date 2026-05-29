import { ExternalLink, Info, Gamepad2, PlayCircle, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Projects() {
  return (
    <section className="mb-32 md:mb-40" id="work">
      <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 border-b border-outline-variant/30 pb-5 md:pb-6">
        <div>
          <p className="text-label-mono text-primary mb-2 uppercase tracking-widest">01 // Portfolio</p>
          <h2 className="text-display-xl">Featured Deployments</h2>
        </div>
        <a className="hidden md:flex text-label-mono text-on-surface-variant hover:text-primary items-center gap-2 motion-transition mt-4 md:mt-0" href="#">
          View Archive <ArrowUpRight size={18} />
        </a>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[340px] sm:auto-rows-[360px] md:auto-rows-[420px] gap-4 md:gap-6">
        {/* Project 1 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-5 sm:p-6 md:p-8 border border-error/30 focus-within:ring-2 focus-within:ring-error">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-error/3 group-hover:bg-error/8 motion-transition z-0"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-40 bg-error rounded-full blur-3xl opacity-15 group-hover:opacity-30 motion-transition"></div>
          <div className="relative z-20">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-error/50 text-error rounded-full backdrop-blur-md">Next.js</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-error/50 text-error rounded-full backdrop-blur-md">WebSockets</span>
              <span className="text-label-mono text-xs px-3 py-1 bg-error/20 text-error rounded-full border border-error/30">3rd Place</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-2 text-white leading-tight">SafeZones</h3>
            <p className="text-body-md text-on-surface-variant text-sm mb-5 leading-relaxed line-clamp-2">Emergency platform with real-time dashboard and critical alert systems.</p>
            <div className="flex gap-4 flex-wrap">
              <a className="inline-flex items-center gap-1.5 text-label-mono text-error hover:text-white motion-transition text-xs px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-error" href="https://safezones.vercel.app/" target="_blank" rel="noopener noreferrer">
                Demo <ExternalLink size={14} />
              </a>
              <a className="inline-flex items-center gap-1.5 text-label-mono text-error hover:text-white motion-transition text-xs px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-error" href="https://lnkd.in/gMsawjRV" target="_blank" rel="noopener noreferrer">
                Info <Info size={14} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Project 2 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-6 md:p-8 border border-secondary-fixed-dim/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10"></div>
          <img alt="Teleport Killer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 motion-transition z-0 opacity-35 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPfAARHmgaLCNhOrsHVNzuBDZsZFV0ErzdCGp3coJE2Bk56kabZZVZwV2PaA_EEdN-GZWy3lcrl5NW30d5uazwAiNMCpWGF6P82p6fwmy0iYCiQP1mVOoCnmN_gQajcs52YTHD11ilgs1WTajRjX1guj5K8cy2zQo4svjbcj-ci9QX9FdtNcdi2QHxVnilTJPlZMvLWQ1Dtr_bLLbZnuaAJbdlZ-KWmrc4I4QRG115LueMjXFfFX1LJ3ES7oEPpYDZKuMWcx0763-I"/>
          <div className="relative z-20">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-secondary-fixed-dim/50 text-secondary-fixed-dim rounded-full">C++</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-secondary-fixed-dim/50 text-secondary-fixed-dim rounded-full">Unreal</span>
              <span className="text-label-mono text-xs px-3 py-1 bg-secondary-fixed-dim/20 text-secondary-fixed-dim rounded-full border border-secondary-fixed-dim/30">Top 10</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-2 text-white leading-tight">Teleport Killer</h3>
            <p className="text-body-md text-on-surface-variant text-sm mb-5 leading-relaxed line-clamp-2">Neon cyberpunk game with custom glitch effects and intense visuals.</p>
            <a className="inline-flex items-center gap-1.5 text-label-mono text-secondary-fixed-dim hover:text-white motion-transition text-sm font-bold" href="https://www.jabali.ai/game/574e925c-814c-4655-b0c2-18d4b8d1f1de/create-from-scratch/teleport-killer/" target="_blank">
              Play Game <Gamepad2 size={16} />
            </a>
          </div>
        </Reveal>

        {/* Project 3 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-6 md:p-8 border border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-primary/3 group-hover:bg-primary/8 motion-transition z-0"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary rounded-full blur-3xl opacity-12 z-0"></div>
          <div className="relative z-20">
            <div className="flex gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-primary/50 text-primary rounded-full">AI/ML</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-primary/50 text-primary rounded-full">Game Dev</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-2 text-white leading-tight">Vibe Code Quest</h3>
            <p className="text-label-mono text-primary mb-1 text-xs uppercase tracking-widest">Master AI Prompt Engineering</p>
            <p className="text-body-md text-on-surface-variant text-sm mb-5 leading-relaxed line-clamp-2">8-bit adventure teaching prompt engineering with synthwave glow.</p>
            <div className="flex gap-4 flex-wrap">
              <a className="inline-flex items-center gap-1.5 text-label-mono text-primary hover:text-white motion-transition text-xs" href="https://app-b0pl8qd02cjl.appmedo.com/" target="_blank">
                App Link <ExternalLink size={14} />
              </a>
              <a className="inline-flex items-center gap-1.5 text-label-mono text-primary hover:text-white motion-transition text-xs" href="https://youtu.be/CLINImDdqBI?si=trTdXy3TtO781DcC" target="_blank">
                Video <PlayCircle size={14} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Project 4 */}
        <Reveal className="glass-panel rounded-2xl overflow-hidden group card-hover relative flex flex-col justify-end p-6 md:p-8 border border-tertiary-container/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent z-10"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 bg-tertiary-container rounded-full blur-3xl opacity-8 z-0"></div>
          <div className="relative z-20">
            <div className="flex gap-2 mb-4">
              <span className="text-label-mono text-xs px-3 py-1 border border-tertiary-container/40 text-tertiary-container rounded-full">React Native</span>
              <span className="text-label-mono text-xs px-3 py-1 border border-tertiary-container/40 text-tertiary-container rounded-full">UX Design</span>
            </div>
            <h3 className="text-headline-lg-mobile mb-2 text-white leading-tight">MeowCare</h3>
            <p className="text-label-mono text-tertiary-container mb-1 text-xs uppercase tracking-widest">Connecting care through accessible tech</p>
            <p className="text-body-md text-on-surface-variant text-sm mb-5 leading-relaxed line-clamp-2">Remote caregiving dashboard for usability and monitoring.</p>
            <a className="inline-flex items-center gap-1.5 text-label-mono text-tertiary-container hover:text-white motion-transition text-xs" href="https://vercel.com/shaileshtunes-6402s-projects/meowcare./2pxWGioMfUc4Yiykrn39S7X1VH2t" target="_blank">
              View Deployment <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
