const journey = [
  {
    year: "01",
    title: "Physics",
    description:
      "A foundation in physics developed my approach to mathematical modeling, problem solving, and understanding complex systems.",
  },
  {
    year: "02",
    title: "Materials Science",
    description:
      "My research moved into computational materials science, studying crystal structures and the properties of materials.",
  },
  {
    year: "03",
    title: "Machine Learning",
    description:
      "I began applying machine learning and deep learning to scientific problems, including prediction of materials properties.",
  },
  {
    year: "04",
    title: "Computational Science",
    description:
      "Scientific computing became the bridge between physical theory, data, algorithms, and practical computational tools.",
  },
  {
    year: "05",
    title: "Web & AI",
    description:
      "I expanded into modern web development and AI to turn technical ideas into accessible applications and useful digital products.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="portfolio-section border-t border-white/10 bg-transparent px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            About
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            From understanding the physical world
            <br />
            <span className="text-zinc-500">
              to building digital systems.
            </span>
          </h2>
        </div>

        {/* Story */}
        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[1fr_1.5fr]">

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
              The Story
            </p>
          </div>

          <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              My background began in physics, where I developed a strong
              interest in understanding complex systems through mathematics,
              computation, and data.
            </p>

            <p>
              That interest led me toward computational materials science and
              machine learning, where I worked with scientific datasets,
              crystal structures, and predictive models.
            </p>

            <p>
              Today, I combine that scientific perspective with modern web
              development and AI to build software that makes technical ideas
              useful, accessible, and practical.
            </p>

            <p className="text-zinc-200">
              I enjoy working at the intersection of{" "}
              <span className="text-white">
                science, computation, artificial intelligence, and software.
              </span>
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-32">
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              My Journey
            </p>

            <span className="font-mono text-xs text-zinc-600">
              PHYSICS → SOFTWARE
            </span>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {journey.map((item) => (
              <div
                key={item.year}
                className="grid gap-6 py-10 md:grid-cols-[100px_1fr_2fr] md:gap-10"
              >
                <span className="font-mono text-sm text-zinc-600">
                  {item.year}
                </span>

                <h3 className="text-2xl font-medium tracking-tight">
                  {item.title}
                </h3>

                <p className="max-w-2xl leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-32 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
              Approach
            </p>
          </div>

          <div>
            <p className="text-2xl leading-10 tracking-tight text-zinc-300 md:text-3xl">
              I approach software the same way I approach scientific problems:
              understand the problem, work with the data, build a model, test
              the result, and continuously improve it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}