"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-tight"
          >
            VT<span className="text-zinc-500">.</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a
              href="#work"
              className="transition-colors hover:text-white"
            >
              Work
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-white"
            >
              Skills
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2.5 text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/30 md:hidden"
          >
            <span className="text-lg">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-white/10 py-6 md:hidden">
            <div className="flex flex-col gap-1">

              <a
                href="#work"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                Work
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 rounded-xl bg-white px-4 py-3 text-center font-medium text-black transition hover:bg-zinc-200"
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
