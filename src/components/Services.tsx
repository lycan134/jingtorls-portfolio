const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Modern, responsive websites designed to establish your brand online and turn visitors into potential customers.",
    tags: ["Next.js", "React", "Responsive Design"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom web applications, dashboards, portals, and tools built around your specific workflow and business needs.",
    tags: ["React", "TypeScript", "Python"],
  },
  {
    number: "03",
    title: "AI-Powered Tools",
    description:
      "Practical AI integrations including customer assistants, chatbots, automation, and intelligent data-driven features.",
    tags: ["AI", "Python", "APIs"],
  },
  {
    number: "04",
    title: "Scientific & Data Applications",
    description:
      "Computational tools, machine-learning applications, interactive visualizations, and research-oriented software.",
    tags: ["Python", "Machine Learning", "Data"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="portfolio-section border-t border-white/10 bg-transparent px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              What I Build
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Digital products
              <br />
              <span className="text-zinc-500">with purpose.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              From business websites to AI-powered applications, I build
              digital experiences that solve practical problems and make
              complex technology easier to use.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-6 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.02] md:grid-cols-[80px_1fr_1.5fr]"
            >
              {/* Number */}
              <div className="text-sm text-zinc-600">
                {service.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <div>
                <p className="mb-5 max-w-xl leading-7 text-zinc-400">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}