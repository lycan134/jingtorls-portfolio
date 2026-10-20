const projects = [
  {
    number: "01",
    category: "Full-stack application · in development",
    title: "NotaryFlow",
    description:
      "A business application exploring how a React/Vite client can work with a Python API and relational data. The repository is linked for a closer look; implementation details and completion status should be confirmed against its source before treating specific features as finished.",
    technologies: ["React", "Vite", "Python", "FastAPI", "PostgreSQL"],
    href: "https://github.com/lycan134/notaryflow",
    action: "Explore source",
    visual: "api",
  },
  {
    number: "02",
    category: "Web · live project",
    title: "Xhyza Maria Christening Invitation",
    description:
      "A live invitation website built with a modern React and Next.js stack. The project demonstrates a focused, responsive experience for a personal event; social preview details are part of the site's sharing experience.",
    technologies: ["Next.js", "React", "Responsive UI", "Vercel"],
    href: "https://xhyza-christening-w9d3.vercel.app/",
    action: "Visit live site",
    visual: "web",
  },
  {
    number: "03",
    category: "Product concept · prototype",
    title: "VZX Labs",
    description:
      "A photo-to-3D-printing product concept. The portfolio includes a privacy policy for a Messenger assistant, but this page does not establish that photo-based 3D reconstruction or a complete customer workflow is implemented.",
    technologies: ["Product exploration", "Web", "3D printing concept"],
    href: "https://github.com/lycan134",
    action: "View GitHub profile",
    visual: "concept",
  },
  {
    number: "04",
    category: "Research · published 2025",
    title: "Formation-Energy Prediction Using Deep Learning",
    description:
      "A scientific machine-learning study of formation energy in material crystal structures. The work combines composition, physical descriptors, crystallographic symmetry, and stability information, then uses model evaluation and SHAP analysis to examine predictive performance and feature contributions.",
    technologies: ["Python", "PyTorch", "Deep learning", "SHAP", "Materials science"],
    href: "/research/crystal-formation-energy",
    externalHref: "https://github.com/lycan134/formation-energy-prediction",
    publicationHref: "https://doi.org/10.1088/2053-1591/ae22cb",
    action: "Read research case study",
    visual: "research",
  },
];

const art: Record<string, { label: string; detail: string }> = {
  api: { label: "REQUEST → API → DATA", detail: "APPLICATION ENGINEERING" },
  web: { label: "A MOMENT, MADE PERSONAL", detail: "RESPONSIVE WEB EXPERIENCE" },
  concept: { label: "PHOTO → OBJECT", detail: "PRODUCT CONCEPT" },
  research: { label: "STRUCTURE → PROPERTY", detail: "SCIENTIFIC MACHINE LEARNING" },
};

export default function Projects() {
  return (
    <section id="work" className="portfolio-section border-t border-white/10 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end sm:mb-20">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">Selected work</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">Building, learning,<br /><span className="text-zinc-500">and investigating.</span></h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">A mix of application development and computational research, with project status stated clearly.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101311] transition-colors hover:border-white/20">
              <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0c0f0d] p-7 sm:p-10">
                <div aria-hidden="true" className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="relative z-10 w-full max-w-lg rounded-xl border border-white/15 bg-black/45 p-5 font-mono text-xs text-zinc-400 shadow-2xl sm:p-7">
                  <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-zinc-600"><span>PROJECT_{project.number}</span><span>PORTFOLIO / 2026</span></div>
                  <p className="text-sm tracking-[0.12em] text-[#b9f7d0] sm:text-base">{art[project.visual].label}</p>
                  <div className="my-5 h-px bg-white/10" />
                  <p className="text-[10px] tracking-[0.16em] text-zinc-600">{art[project.visual].detail}</p>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-400 sm:right-6 sm:top-6">{project.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400 sm:text-base">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.technologies.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-zinc-400 sm:text-xs">{tag}</span>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium">
                  <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-flex min-h-10 items-center gap-2 text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-[#b9f7d0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f7d0]">{project.action}<span aria-hidden="true">↗</span></a>
                  {project.externalHref && <a href={project.externalHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-zinc-400 underline decoration-white/10 underline-offset-4 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f7d0]">Source code<span aria-hidden="true">↗</span></a>}
                  {"publicationHref" in project && project.publicationHref && <a href={project.publicationHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-zinc-400 underline decoration-white/10 underline-offset-4 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f7d0]">Publication<span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
