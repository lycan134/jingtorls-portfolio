const researchAreas = [
  {
    number: "01",
    title: "Computational Materials Science",
    description:
      "Using computational methods and machine learning to investigate materials, crystal structures, and their properties.",
  },
  {
    number: "02",
    title: "Scientific Machine Learning",
    description:
      "Developing predictive models that combine scientific knowledge, structured data, and machine-learning techniques.",
  },
  {
    number: "03",
    title: "Computational Physics",
    description:
      "Applying numerical methods, scientific programming, and data analysis to explore physical systems and scientific problems.",
  },
];

function ResultsVisualization() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-900">

      {/* Scientific grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Plot */}
      <div className="absolute inset-x-[8%] bottom-[18%] top-[18%]">

        {/* Y axis */}
        <div className="absolute bottom-0 left-0 top-0 w-px bg-white/20" />

        {/* X axis */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

        {/* Horizontal reference lines */}
        <div className="absolute left-0 right-0 top-[25%] border-t border-dashed border-white/10" />
        <div className="absolute left-0 right-0 top-[50%] border-t border-dashed border-white/10" />
        <div className="absolute left-0 right-0 top-[75%] border-t border-dashed border-white/10" />

        {/* Prediction line */}
        <svg
          viewBox="0 0 800 300"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="300"
            x2="800"
            y2="0"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />

          <polyline
            points="
              40,275
              90,250
              135,245
              180,205
              225,215
              270,175
              315,180
              360,145
              405,150
              450,115
              495,125
              540,90
              585,105
              630,65
              675,75
              720,40
              765,50
            "
            fill="none"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="3"
          />

          {/* Scatter points */}
          {[
            [40, 275],
            [90, 250],
            [135, 245],
            [180, 205],
            [225, 215],
            [270, 175],
            [315, 180],
            [360, 145],
            [405, 150],
            [450, 115],
            [495, 125],
            [540, 90],
            [585, 105],
            [630, 65],
            [675, 75],
            [720, 40],
            [765, 50],
          ].map(([cx, cy], index) => (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r="6"
              fill="rgba(255,255,255,0.65)"
            />
          ))}
        </svg>

        {/* Axis labels */}
        <span className="absolute -left-8 top-0 font-mono text-[10px] text-zinc-600">
          +E
        </span>

        <span className="absolute -left-8 bottom-0 font-mono text-[10px] text-zinc-600">
          -E
        </span>

        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-zinc-600">
          PREDICTED FORMATION ENERGY
        </span>
      </div>

      {/* Header */}
      <div className="absolute left-6 top-6">
        <p className="font-mono text-xs tracking-[0.2em] text-zinc-600">
          MODEL PERFORMANCE
        </p>
      </div>

      {/* Metric */}
      <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 font-mono text-xs text-zinc-400 backdrop-blur-md">
        R² ≈ 0.98
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 flex gap-5 font-mono text-[10px] text-zinc-600">
        <span>● PREDICTION</span>
        <span>┈ REFERENCE</span>
      </div>
    </div>
  );
}

export default function Research() {
  return (
    <section
      id="research"
      className="portfolio-section border-t border-white/10 bg-transparent px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Research & Science
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Where science
              <br />
              <span className="text-zinc-500">
                meets computation.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            My research sits at the intersection of physics, materials
            science, machine learning, and scientific computing.
          </p>
        </div>

        {/* Featured publication */}
        <article className="mb-24 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">

          {/* Visualization */}
          <div className="relative aspect-[4/3] sm:aspect-[16/7]">
            <ResultsVisualization />
          </div>

          {/* Publication information */}
          <div className="grid gap-10 p-8 md:grid-cols-[1.5fr_1fr] md:p-12">

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
                Featured Publication
              </p>

              <h3 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Formation energy prediction of material crystal structures
                using deep learning
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                Research applying deep learning to predict the formation
                energy of material crystal structures using computational
                materials data and structural information.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Deep Learning",
                  "Materials Science",
                  "Crystal Structures",
                  "Formation Energy",
                  "Scientific Computing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Publication details */}
            <div className="border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
                Publication Details
              </p>

              <div className="mt-6 space-y-6">

                <div>
                  <p className="text-xs text-zinc-600">
                    JOURNAL
                  </p>

                  <p className="mt-1 text-zinc-300">
                    Materials Research Express
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-600">
                    DOI
                  </p>

                  <p className="mt-1 font-mono text-sm text-zinc-300">
                    10.1088/2053-1591/ae22cb
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-600">
                    METHODS
                  </p>

                  <p className="mt-1 text-zinc-300">
                    Deep Learning · Materials Informatics
                  </p>
                </div>

              </div>

              {/* Links */}
              <div className="mt-10 flex flex-wrap gap-3">

                <a
                  href="https://iopscience.iop.org/article/10.1088/2053-1591/ae22cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-white bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b9f7d0] hover:bg-white hover:shadow-[0_12px_34px_rgba(185,247,208,0.18)]"
                  style={{ color: "#0b0d0c" }}
                >
                  Read Publication
                  <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/lycan134/formation-energy-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                >
                  View GitHub ↗
                </a>

              </div>
            </div>

          </div>
        </article>

        {/* Research areas */}
        <div className="border-t border-white/10">

          {researchAreas.map((area) => (
            <div
              key={area.number}
              className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_1.5fr] md:gap-10"
            >
              <span className="font-mono text-sm text-zinc-600">
                {area.number}
              </span>

              <h3 className="text-2xl font-medium tracking-tight">
                {area.title}
              </h3>

              <p className="max-w-xl leading-7 text-zinc-400">
                {area.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}