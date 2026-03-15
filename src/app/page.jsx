import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  );
}