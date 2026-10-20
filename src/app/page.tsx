import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="portfolio-shell min-h-screen text-white">
      <a href="#main-content" className="sr-only z-[100] rounded bg-white px-4 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <Hero />
      <div id="main-content" tabIndex={-1}>
        <Projects />
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
