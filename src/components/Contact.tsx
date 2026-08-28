export default function Contact() {
  return (
    <section
      id="contact"
      className="portfolio-section border-t border-white/10 bg-transparent px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:items-end">

          {/* Heading */}
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>

            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              Let&apos;s build
              <br />
              <span className="text-zinc-500">
                something useful.
              </span>
            </h2>
          </div>

          {/* Contact information */}
          <div className="max-w-xl">

            <p className="text-lg leading-8 text-zinc-400">
              Have a project, research idea, or business problem that could
              benefit from software, AI, or data? I&apos;d be glad to hear
              about it.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                href="mailto:virginiotorlao@gmail.com"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b9f7d0] hover:bg-white hover:shadow-[0_12px_34px_rgba(185,247,208,0.18)]"
                style={{ color: "#0b0d0c" }}
                >
                Email Me
                <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>

                <a
                href="https://github.com/lycan134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                >
                GitHub
                <span className="ml-2">↗</span>
                </a>

                <a
                href="https://www.linkedin.com/in/virginio-torlao-a7124a261/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                >
                LinkedIn
                <span className="ml-2">↗</span>
                </a>

            </div>

          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-32 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-4 text-xs text-zinc-600 sm:flex-row">
            <span className="font-mono">
              PHYSICS · AI · COMPUTATION · SOFTWARE
            </span>

            <span>
              Available for selected projects
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}