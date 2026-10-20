export default function About() {
  return (
    <section id="about" className="portfolio-section border-t border-white/10 px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div><p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">About</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Researcher’s mindset.<br /><span className="text-zinc-500">Software engineer in progress.</span></h2></div>
          <div className="space-y-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            <p>My background in physics and computational research trained me to break complex questions into smaller parts, work carefully with data, and test whether an explanation holds up.</p>
            <p>I’m applying that approach to full-stack software: learning through practical projects, reading errors closely, and improving the design as I understand the problem better. AI tools can help me explore and draft; I still review the code and check the behavior before I accept a change.</p>
            <p className="border-l border-[#b9f7d0]/50 pl-5 text-zinc-200">I’m building toward a career in software engineering, bringing analytical thinking, curiosity, and a steady learning mindset.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
