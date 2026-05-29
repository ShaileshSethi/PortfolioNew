import { Reveal } from './Reveal';

export function Achievements() {
  const achievements = [
    {
      title: "Google Gemini Student Ambassador Program 2026",
      badge: "🌟 Shortlisted",
      desc: "Selected among top technical candidates for the highly competitive Gemini AI program.",
      colorClass: "secondary-fixed-dim",
      borderColor: "border-secondary-fixed-dim",
      badgeBg: "bg-secondary-fixed-dim/10 border-secondary-fixed-dim/20 text-secondary-fixed-dim",
      hoverBorder: "hover:border-secondary-fixed-dim/50",
      groupHoverBg: "group-hover:bg-secondary-fixed-dim group-hover:shadow-[0_0_15px_rgba(237,177,255,0.6)]"
    },
    {
      title: "Hack4Relief Hackathon",
      badge: "🏆 3rd Place",
      desc: "Architected and deployed an emergency response dashboard.",
      colorClass: "error",
      borderColor: "border-error",
      badgeBg: "bg-error/10 border-error/20 text-error",
      hoverBorder: "hover:border-error/50",
      groupHoverBg: "group-hover:bg-error group-hover:shadow-[0_0_15px_rgba(255,180,171,0.6)]"
    },
    {
      title: "Jabali Game Jam 2026",
      badge: "🎮 Top 10 Finalist",
      desc: "Developed Teleport Killer, a neon cyberpunk glitch game.",
      colorClass: "primary",
      borderColor: "border-primary",
      badgeBg: "bg-primary/10 border-primary/20 text-primary",
      hoverBorder: "hover:border-primary/50",
      groupHoverBg: "group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(165,231,255,0.6)]"
    },
    {
      title: "Visionary Pixel & Andala AI Competition",
      badge: "🧠 Winner",
      desc: "Recognized for outstanding AI Prompt Engineering skills.",
      colorClass: "tertiary-container",
      borderColor: "border-tertiary-container",
      badgeBg: "bg-tertiary-container/10 border-tertiary-container/20 text-tertiary-container",
      hoverBorder: "hover:border-tertiary-container/50",
      groupHoverBg: "group-hover:bg-tertiary-container group-hover:shadow-[0_0_15px_rgba(255,178,41,0.6)]"
    }
  ];

  return (
    <section className="mb-32 md:mb-40" id="achievements">
      <Reveal className="mb-12 md:mb-14 border-b border-outline-variant/30 pb-5 md:pb-6">
        <p className="text-label-mono text-secondary-fixed-dim mb-2 uppercase tracking-widest">02 // Milestones</p>
        <h2 className="text-display-xl">Trajectory</h2>
      </Reveal>
      <div className="relative border-l border-outline-variant ml-4 md:ml-8 space-y-8 pb-6">
        {achievements.map((item, idx) => (
          <Reveal key={idx} className="relative pl-7 md:pl-10 group">
            <div className={`absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-surface border-2 ${item.borderColor} ${item.groupHoverBg} motion-transition`}></div>
            <div className={`glass-panel p-5 md:p-6 rounded-xl border border-outline-variant/30 ${item.hoverBorder} motion-transition`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-2">
                <h3 className="text-headline-lg-mobile text-white leading-snug">{item.title}</h3>
                <span className={`text-label-mono text-xs px-3 py-1 rounded border whitespace-nowrap flex-shrink-0 ${item.badgeBg}`}>{item.badge}</span>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
