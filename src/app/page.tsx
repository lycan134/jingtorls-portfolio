import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}