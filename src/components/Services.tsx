const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"] },
  { title: "Backend", skills: ["Python", "FastAPI", "REST APIs", "SQLAlchemy"] },
  { title: "Databases", skills: ["PostgreSQL", "SQL", "Alembic migrations"] },
  { title: "Engineering practice", skills: ["Git & GitHub", "Docker", "Automated testing", "Debugging"] },
  { title: "AI & research", skills: ["Machine learning", "PyTorch", "Scientific computing", "AI-assisted development"] },
];

export default function Services() {
  return (
    <section id="skills" className="portfolio-section border-t border-white/10 px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end sm:mb-16">
          <div><p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">Technical toolkit</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Skills I use<br /><span className="text-zinc-500">to build and learn.</span></h2></div>
          <p className="max-w-xl text-base leading-7 text-zinc-400">A practical toolkit grounded in personal projects and research. I’m continuing to deepen my full-stack engineering practice.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7"><h3 className="text-lg font-medium">{group.title}</h3><ul className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <li key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">{skill}</li>)}</ul></article>)}
        </div>
        <p className="mt-5 text-xs leading-6 text-zinc-600">I’m presenting technologies supported by the projects and background described here. This portfolio does not list TypeScript, Angular, C#/.NET, CI/CD, or cloud platforms as established skills.</p>
      </div>
    </section>
  );
}
