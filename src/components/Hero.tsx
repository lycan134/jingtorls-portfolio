export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-black text-white sm:min-h-screen">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#b9f7d0]/[0.045] blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:pb-24">
        <div className="max-w-5xl">
          <p className="mb-7 font-mono text-xs uppercase tracking-[0.24em] text-[#b9f7d0] sm:text-sm sm:tracking-[0.3em]">Software engineering · AI · computational research</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl md:text-8xl">
            Junior Full-Stack Developer <span className="text-zinc-500">| AI &amp; Software Engineering</span>
          </h1>
          <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I build web applications, APIs, and data-driven tools with React, Python, and relational databases. My computational research background shapes how I investigate problems, debug, and validate solutions, including code developed with AI assistance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-[#b9f7d0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f7d0]">View My Projects <span aria-hidden="true">↓</span></a>
              <a href="https://github.com/lycan134" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-medium text-zinc-200 transition hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f7d0]">GitHub Profile ↗</a>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-medium text-zinc-200 transition hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f7d0]">Contact Me</a>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-5 sm:mt-24">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Working toolkit</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400"><span>React</span><span>Next.js</span><span>JavaScript</span><span>Python</span><span>FastAPI</span><span>PostgreSQL</span><span>Git</span><span>Docker</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
