export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Brand */}
        <div>
          <p className="text-lg font-semibold tracking-tight">
            VT<span className="text-zinc-600">.</span>
          </p>

          <p className="mt-1 text-sm text-zinc-600">
            Web Development · AI · Computational Science
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
          <a
            href="#work"
            className="transition-colors hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#research"
            className="transition-colors hover:text-white"
          >
            Research
          </a>

          <a
            href="mailto:virginiotorlao@gmail.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/virginio-torlao-a7124a261/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-700 sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} Virginio C. Torlao
        </span>

        <span>
          Built with Next.js · React · TypeScript
        </span>
      </div>
    </footer>
  );
}