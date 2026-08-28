export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
        <div className="max-w-5xl">

          {/* Category */}
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">
            Web Development · AI · Scientific Computing
          </p>

          {/* Main heading */}
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl">
            Web Developer
            <br />
            <span className="text-zinc-500">
              &amp; Computational Scientist.
            </span>
          </h1>

          {/* Description + buttons */}
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg md:text-xl md:leading-8">
              I build modern websites, web applications, and AI-powered tools
              for businesses, professionals, and researchers.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b9f7d0] hover:bg-white hover:shadow-[0_12px_34px_rgba(185,247,208,0.2)]"
                style={{ color: "#0b0d0c" }}
              >
                View My Work
                <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white/40 hover:bg-white/5"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>

          {/* Technology list */}
          <div className="mt-24 border-t border-white/10 pt-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-600">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>AI / ML</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}