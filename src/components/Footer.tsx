export function Footer() {
  return (
    <footer className="bg-surface w-full py-12 md:py-24 border-t border-outline-variant/30 text-on-surface-variant relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-headline-lg-mobile font-bold text-primary tracking-tighter">
          SS
        </div>
        <div className="text-body-md text-center md:text-left">
          © 2026 Shailesh Sethi. Engineered for the Future.
        </div>
        <div className="flex gap-6 text-label-mono">
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95" href="#">Github</a>
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95" href="https://www.linkedin.com/in/shailesh-sethi-3aab58378/" target="_blank">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95" href="#">Twitter</a>
          <a className="text-on-surface-variant hover:text-secondary-fixed-dim hover:scale-105 transition-all duration-300 active:scale-95" href="mailto:hello@shaileshsethi.dev">Email</a>
        </div>
      </div>
    </footer>
  );
}
