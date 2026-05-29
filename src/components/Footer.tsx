export function Footer() {
  return (
    <footer className="bg-surface/30 w-full py-10 md:py-16 border-t border-outline-variant/30 text-on-surface-variant relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        <div className="text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tighter">
          SS
        </div>
        <div className="text-sm sm:text-base md:text-body-md text-center md:text-left">
          © 2026 Shailesh Sethi. Engineered for the Future.
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-label-mono text-[11px] sm:text-xs md:text-sm">
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95 py-2 px-1 rounded" href="#">Github</a>
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95 py-2 px-1 rounded" href="https://www.linkedin.com/in/shailesh-sethi-3aab58378/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95 py-2 px-1 rounded" href="#">Twitter</a>
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95 py-2 px-1 rounded" href="mailto:hello@shaileshsethi.dev">Email</a>
        </div>
      </div>
    </footer>
  );
}
