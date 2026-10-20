import Link from "next/link";

const stats = [
  {
    value: "153,232",
    label: "Materials Project entries",
  },
  {
    value: "228",
    label: "Space groups represented",
  },
  {
    value: "R² ≈ 0.98",
    label: "Reported predictive performance",
  },
  {
    value: "SHAP",
    label: "Interpretability analysis",
  },
];

const features = [
  "Elemental fractions",
  "Number of atoms",
  "Number of elements",
  "Mean atomic mass",
  "Electronegativity descriptors",
  "Covalent radius",
  "Electron affinity",
  "Crystallographic space group",
];

const architecture = [
  "Input layer",
  "512 neurons",
  "512 neurons",
  "256 neurons",
  "128 neurons",
  "64 neurons",
  "32 neurons",
  "Formation energy output",
];

export default function CrystalFormationEnergyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 md:py-36">
          {/* Back */}
          <Link
            href="/#work"
            className="mb-12 inline-flex min-h-[44px] items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-white sm:mb-16 sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="text-base">←</span>
            Back to selected work
          </Link>

          {/* Eyebrow */}
          <div className="mb-7 flex flex-wrap items-center gap-2.5 sm:mb-8 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-400 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
              Scientific Machine Learning
            </span>

            <span className="font-mono text-[9px] text-zinc-600 sm:text-xs">
              RESEARCH_CASE_01
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-5xl text-[2.7rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Crystal Structure
            <br />
            <span className="text-zinc-500">
              Formation Energy Prediction
            </span>
          </h1>

          {/* Intro */}
          <div className="mt-8 max-w-3xl sm:mt-10">
            <p className="text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9 md:text-2xl md:leading-10">
              A deep-learning framework for predicting the formation energy of
              inorganic crystalline materials while incorporating chemical
              composition, crystallographic symmetry, and stability information.
            </p>
          </div>

          {/* Publication buttons */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://doi.org/10.1088/2053-1591/ae22cb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 sm:w-auto"
            >
              Read Published Paper
              <span className="ml-2">↗</span>
            </a>

            <a
              href="https://github.com/lycan134/formation-energy-prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] sm:w-auto"
            >
              View GitHub Repository
              <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Author / publication metadata */}
          <div className="mt-14 grid gap-6 border-t border-white/10 pt-7 sm:mt-16 sm:grid-cols-3 sm:gap-8 sm:pt-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                Author
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Virginio C. Torlao
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                Journal
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Materials Research Express
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                Published
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                December 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* KEY NUMBERS */}
      {/* ================================================== */}

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-14"
            >
              <p className="break-words text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 max-w-[160px] font-mono text-[9px] uppercase leading-5 tracking-[0.13em] text-zinc-600 sm:text-[10px] sm:tracking-[0.16em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* OVERVIEW */}
      {/* ================================================== */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
              01 / Overview
            </p>

            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
              From chemistry and symmetry to material stability.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-zinc-400 sm:space-y-6 sm:text-lg sm:leading-8">
            <p>
              Formation energy is an important thermodynamic property for
              understanding the stability of crystalline materials. Predicting
              this property computationally can help reduce the cost of
              screening large materials databases.
            </p>

            <p>
              This research developed a deep neural network that learns the
              relationship between a material&apos;s chemical composition,
              crystallographic symmetry, and formation energy.
            </p>

            <p>
              A central motivation of the work was the observation that
              composition alone does not uniquely identify a material phase.
              Different crystal structures can share the same chemical
              composition. Incorporating crystallographic space-group
              information therefore provides the model with structural
              information that composition-only representations cannot capture.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* DATASET */}
      {/* ================================================== */}

      <section className="border-y border-white/10 bg-white/[0.015] px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
                02 / Dataset
              </p>

              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
                Materials Project
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                The study used data from the Materials Project containing
                153,232 entries. After processing and filtering, the dataset
                represented 228 crystallographic space groups.
              </p>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:p-6">
                  <p className="font-mono text-[10px] text-zinc-600 sm:text-xs">
                    DATASET_SIZE
                  </p>

                  <p className="mt-3 text-3xl font-semibold sm:text-4xl">
                    153,232
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    total database entries analyzed
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:p-6">
                  <p className="font-mono text-[10px] text-zinc-600 sm:text-xs">
                    SYMMETRY_CLASSES
                  </p>

                  <p className="mt-3 text-3xl font-semibold sm:text-4xl">
                    228
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    space groups represented
                  </p>
                </div>
              </div>

              <p className="mt-7 text-sm leading-7 text-zinc-500 sm:mt-8">
                The distribution of materials across the space groups was
                highly uneven, creating an important challenge for model
                generalization across rare and common crystallographic
                symmetries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FEATURE ENGINEERING */}
      {/* ================================================== */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
              03 / Representation
            </p>

            <h2 className="mt-4 text-2xl font-medium tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
              Representing a crystal for a neural network.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
              The model combines composition-derived descriptors with
              crystallographic information to construct a numerical
              representation of each material.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-5 transition-colors hover:border-white/20 sm:gap-5 sm:p-6"
              >
                <span className="shrink-0 font-mono text-[10px] text-zinc-700 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm leading-6 text-zinc-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Pipeline */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:mt-16 sm:rounded-3xl sm:p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
              PROCESSING_PIPELINE
            </p>

            {/* Mobile: vertical pipeline */}
            <div className="mt-7 flex flex-col gap-2 sm:hidden">
              {[
                "Raw Materials Project Data",
                "Outlier Removal",
                "Deduplication",
                "Feature Engineering",
                "Normalization",
                "Space Group Encoding",
                "DNN Training",
                "Evaluation",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 font-mono text-[9px] text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-xs text-zinc-400">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop: horizontal pipeline */}
            <div className="mt-8 hidden flex-wrap items-center gap-3 sm:flex">
              {[
                "Raw Materials Project Data",
                "Outlier Removal",
                "Deduplication",
                "Feature Engineering",
                "Normalization",
                "Space Group Encoding",
                "DNN Training",
                "Evaluation",
              ].map((step, index, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                    {step}
                  </span>

                  {index < arr.length - 1 && (
                    <span className="text-zinc-700">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* MODEL */}
      {/* ================================================== */}

      <section className="border-y border-white/10 bg-white/[0.015] px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
                04 / Model
              </p>

              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
                Deep neural network architecture.
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
                The architecture uses six hidden layers followed by a single
                regression output neuron. ReLU activations are used in the
                hidden layers, while the output layer predicts a continuous
                formation-energy value.
              </p>
            </div>

            {/* Architecture */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:rounded-3xl sm:p-6 md:p-10">
              <p className="mb-6 font-mono text-[10px] text-zinc-600 sm:mb-8 sm:text-xs">
                DNN_ARCHITECTURE
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                {architecture.map((layer, index) => (
                  <div
                    key={`${layer}-${index}`}
                    className={`flex min-w-0 items-center justify-between gap-4 rounded-xl border px-4 py-3.5 sm:px-5 sm:py-4 ${
                      index === architecture.length - 1
                        ? "border-white/20 bg-white/[0.04]"
                        : "border-white/10"
                    }`}
                  >
                    <span className="min-w-0 text-xs leading-5 text-zinc-300 sm:text-sm">
                      {layer}
                    </span>

                    <span className="shrink-0 font-mono text-[9px] text-zinc-600 sm:text-xs">
                      {index === 0
                        ? "INPUT"
                        : index === architecture.length - 1
                          ? "OUTPUT"
                          : `LAYER_${index}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3">
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="font-mono text-[9px] text-zinc-600 sm:text-[10px]">
                    OPTIMIZER
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    Adam
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 p-4">
                  <p className="font-mono text-[9px] text-zinc-600 sm:text-[10px]">
                    ACTIVATION
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    ReLU
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 p-4">
                  <p className="font-mono text-[9px] text-zinc-600 sm:text-[10px]">
                    MAX EPOCHS
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    500
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 p-4">
                  <p className="font-mono text-[9px] text-zinc-600 sm:text-[10px]">
                    EARLY STOPPING
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    Patience 10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* TRAINING */}
      {/* ================================================== */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 md:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
                05 / Training
              </p>

              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:mt-5 sm:text-3xl">
                Model development.
              </h2>
            </div>

            <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2 md:col-span-2">
              <div className="rounded-2xl border border-white/10 p-6 sm:p-7">
                <p className="font-mono text-[10px] text-zinc-600">
                  OPTIMIZATION
                </p>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  Bayesian optimization
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Hyperparameter configurations were explored using Bayesian
                  optimization to identify effective model settings.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6 sm:p-7">
                <p className="font-mono text-[10px] text-zinc-600">
                  VALIDATION
                </p>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  K-Fold cross-validation
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  K-fold cross-validation was used to evaluate the robustness
                  of the model across different data partitions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6 sm:p-7">
                <p className="font-mono text-[10px] text-zinc-600">
                  REGRESSION
                </p>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  Formation energy
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  The primary prediction task is formation energy per atom,
                  treated as a continuous regression problem.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-6 sm:p-7">
                <p className="font-mono text-[10px] text-zinc-600">
                  EVALUATION
                </p>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  MAE · RMSE · R²
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Model performance was evaluated using standard regression
                  metrics and repeated train-test partitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* RESULTS */}
      {/* ================================================== */}

      <section className="border-y border-white/10 bg-white/[0.015] px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
              06 / Results
            </p>

            <h2 className="mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
              Adding crystallographic information improved the prediction
              framework.
            </h2>
          </div>

          <div className="grid gap-3.5 sm:gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:rounded-3xl sm:p-8">
              <p className="font-mono text-[10px] text-zinc-600">
                PERFORMANCE
              </p>

              <p className="mt-4 text-4xl font-semibold tracking-tight sm:mt-5 sm:text-5xl">
                ≈0.98
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Reported R² performance for the deep-learning framework.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:rounded-3xl sm:p-8">
              <p className="font-mono text-[10px] text-zinc-600">
                SYMMETRY
              </p>

              <p className="mt-4 text-4xl font-semibold tracking-tight sm:mt-5 sm:text-5xl">
                228
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Space groups represented in the processed dataset.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:rounded-3xl sm:p-8">
              <p className="font-mono text-[10px] text-zinc-600">
                INTERPRETABILITY
              </p>

              <p className="mt-4 text-4xl font-semibold tracking-tight sm:mt-5 sm:text-5xl">
                SHAP
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Feature contributions were examined to understand the model&apos;s
                predictions.
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-4xl sm:mt-10">
            <p className="text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              The study found that incorporating crystallographic symmetry
              substantially improved predictive performance compared with
              composition-focused representations. Adding stability information
              further improved the framework, supporting the importance of
              combining compositional, structural, and thermodynamic
              information.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* INTERPRETABILITY */}
      {/* ================================================== */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
                07 / Interpretability
              </p>

              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
                Looking inside the model.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                SHAP analysis was used to investigate how individual input
                features contribute to the model&apos;s predictions. This provides
                a way to move beyond predictive accuracy and examine the
                chemistry–structure–stability relationships learned by the
                network.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:mt-10 sm:rounded-3xl sm:p-8 md:p-10">
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {[
                    "Elemental contributions",
                    "Physical descriptors",
                    "Space-group effects",
                    "Stability relationships",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400 sm:px-4 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-7 sm:mt-10 sm:pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
                    WHY_IT_MATTERS
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
                    Interpretability helps connect the machine-learning model
                    with physically meaningful trends rather than treating
                    the network as a purely black-box predictor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* LIMITATIONS */}
      {/* ================================================== */}

      <section className="border-y border-white/10 bg-white/[0.015] px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
                08 / Limitations
              </p>

              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
                Where the model can improve.
              </h2>
            </div>

            <div className="space-y-7 sm:space-y-8">
              <div>
                <h3 className="text-lg font-medium sm:text-xl">
                  Space-group imbalance
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
                  The dataset contains substantially more materials for some
                  space groups than others. This can make generalization to
                  rare crystallographic symmetries more difficult.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium sm:text-xl">
                  Rare structural classes
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
                  Error analysis showed that some of the largest prediction
                  errors were associated with less common structural classes
                  and unstable compounds.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium sm:text-xl">
                  Future structural representations
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
                  Future extensions could explore graph neural networks and
                  richer structural representations capable of explicitly
                  modeling atomic interactions and local bonding environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FUTURE WORK */}
      {/* ================================================== */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
              09 / Future Direction
            </p>

            <h2 className="mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-tight sm:mt-5 sm:text-3xl md:text-4xl">
              Toward data-driven materials discovery.
            </h2>
          </div>

          <div className="grid gap-3.5 sm:gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:rounded-3xl sm:p-8">
              <span className="font-mono text-[10px] text-zinc-600 sm:text-xs">
                01
              </span>

              <h3 className="mt-7 text-lg font-medium sm:mt-8 sm:text-xl">
                Graph neural networks
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Explore architectures that encode atomic interactions and
                local structural environments more explicitly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:rounded-3xl sm:p-8">
              <span className="font-mono text-[10px] text-zinc-600 sm:text-xs">
                02
              </span>

              <h3 className="mt-7 text-lg font-medium sm:mt-8 sm:text-xl">
                Virtual screening
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Use machine learning to rapidly screen hypothetical materials
                before expensive first-principles calculations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:rounded-3xl sm:p-8">
              <span className="font-mono text-[10px] text-zinc-600 sm:text-xs">
                03
              </span>

              <h3 className="mt-7 text-lg font-medium sm:mt-8 sm:text-xl">
                DFT validation
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Combine machine-learning screening with Density Functional
                Theory calculations for candidate materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* PUBLICATION */}
      {/* ================================================== */}

      <section className="border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
            Published Research
          </p>

          <h2 className="mt-5 text-2xl font-medium leading-tight tracking-tight sm:mt-6 sm:text-3xl md:text-5xl">
            Formation energy prediction of material crystal structures using
            deep learning
          </h2>

          <p className="mt-5 text-sm leading-6 text-zinc-500 sm:mt-6">
            V. Torlao and E. A. Fajardo · Materials Research Express · 2025
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://doi.org/10.1088/2053-1591/ae22cb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 sm:w-auto"
            >
              DOI
              <span className="ml-2">↗</span>
            </a>

            <a
              href="https://github.com/lycan134/formation-energy-prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.04] sm:w-auto"
            >
              Source Code
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}

      <footer className="border-t border-white/10 px-5 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[9px] text-zinc-600 sm:gap-4 sm:text-xs md:flex-row md:items-center md:justify-between">
          <p className="font-mono break-all">
            RESEARCH_CASE_01 / CRYSTAL_FORMATION_ENERGY
          </p>

          <p className="font-mono">
            SCIENTIFIC MACHINE LEARNING
          </p>
        </div>
      </footer>
    </main>
  );
}
