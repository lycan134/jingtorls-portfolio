const projects = [
  {
    number: "01",
    category: "Scientific Machine Learning",
    title: "Crystal Structure Formation Energy Prediction",
    description:
      "A deep-learning application for predicting the formation energy of crystalline materials using chemical and structural information.",
    technologies: ["Python", "PyTorch", "Materials Project", "Machine Learning"],
    metric: "R² 0.98",
    visual: "crystal",
    href: "#",
  },
  {
    number: "02",
    category: "Web Development + AI",
    title: "Solar Business Website & AI Assistant",
    description:
      "A business website concept combining a modern customer experience, solar information, lead generation, and an AI-powered assistant.",
    technologies: ["Next.js", "React", "TypeScript", "AI"],
    metric: "AI + Web",
    visual: "solar",
    href: "#",
  },
  {
    number: "03",
    category: "Computational Data Science",
    title: "Financial Time-Series Analysis",
    description:
      "A computational project exploring financial market time series using multifractal analysis and machine-learning techniques.",
    technologies: ["Python", "MFDFA", "Data Science", "Machine Learning"],
    metric: "Time Series",
    visual: "data",
    href: "#",
  },
];

function ScientificVisual({
  type,
}: {
  type: "crystal" | "solar" | "data";
}) {
  if (type === "crystal") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Crystal lattice */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-64 w-64 rotate-12">
            {[
              [20, 20],
              [50, 20],
              [80, 20],
              [20, 50],
              [50, 50],
              [80, 50],
              [20, 80],
              [50, 80],
              [80, 80],
            ].map(([x, y], index) => (
              <div
                key={index}
                className="absolute h-4 w-4 rounded-full bg-white/60 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              />
            ))}

            <div className="absolute left-[20%] top-[20%] h-[1px] w-[60%] bg-white/20" />
            <div className="absolute left-[20%] top-[50%] h-[1px] w-[60%] bg-white/20" />
            <div className="absolute left-[20%] top-[80%] h-[1px] w-[60%] bg-white/20" />

            <div className="absolute left-[20%] top-[20%] h-[60%] w-[1px] bg-white/20" />
            <div className="absolute left-[50%] top-[20%] h-[60%] w-[1px] bg-white/20" />
            <div className="absolute left-[80%] top-[20%] h-[60%] w-[1px] bg-white/20" />
          </div>
        </div>

        {/* Data labels */}
        <div className="absolute left-6 top-6 font-mono text-xs text-zinc-600">
          STRUCTURE_ANALYSIS
        </div>

        <div className="absolute bottom-6 right-6 font-mono text-xs text-zinc-600">
          SG → FORMATION ENERGY
        </div>
      </div>
    );
  }

  if (type === "solar") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Sun */}
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20">
          <div className="absolute inset-4 rounded-full border border-white/20" />
          <div className="absolute inset-8 rounded-full bg-white/10 blur-xl" />
        </div>

        {/* Energy lines */}
        <div className="absolute left-[15%] top-1/2 h-px w-[70%] bg-white/20" />
        <div className="absolute left-1/2 top-[15%] h-[70%] w-px bg-white/20" />

        <div className="absolute left-6 top-6 font-mono text-xs text-zinc-600">
          ENERGY_ANALYSIS
        </div>

        <div className="absolute bottom-6 left-6 font-mono text-xs text-zinc-600">
          SOLAR → STORAGE → HOME
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Data visualization */}
      <svg
        viewBox="0 0 800 350"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,270 70,250 120,265 180,190 240,220 300,150 350,175 410,110 470,135 530,90 600,125 660,70 730,100 800,45"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
        />

        <polyline
          points="0,300 80,290 140,305 210,275 280,285 350,240 420,255 500,210 570,230 640,190 720,205 800,170"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute left-6 top-6 font-mono text-xs text-zinc-600">
        TIME_SERIES_ANALYSIS
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-xs text-zinc-600">
        MULTIFRACTAL ANALYSIS
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-white/10 bg-black px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Projects that
              <br />
              <span className="text-zinc-500">solve problems.</span>
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-zinc-400">
            Technical, scientific, and web development projects built around
            practical problems and measurable outcomes.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition-all duration-500 hover:border-white/20"
            >
              {/* Scientific visual */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 sm:aspect-[16/8]">
                <ScientificVisual type={project.visual as "crystal" | "solar" | "data"} />

                {/* Metric */}
                <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 font-mono text-xs text-zinc-400 backdrop-blur-md">
                  {project.metric}
                </div>

                {/* Category */}
                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <p className="mb-3 font-mono text-xs text-zinc-600">
                      PROJECT_{project.number}
                    </p>

                    <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.href}
                    className="inline-flex shrink-0 items-center gap-3 text-sm font-medium transition-colors hover:text-zinc-400"
                  >
                    View Project
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}