import React from "react";
import { ChevronDown, Mail, Github, Linkedin, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-container"
    >
      <div className="text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-8">
          <Code2 className="w-8 h-8 text-blue-500" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Desarrollador</span>
          <br />
          <span className="text-white">Full Stack</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Creo soluciones digitales elegantes y funcionales con código limpio y
          atención al detalle. Especializado en tecnologías modernas y
          escalables.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors"
          >
            Ver Proyectos
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Contáctame
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:tu@email.com"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
