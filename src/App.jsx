import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
