import React from "react";
import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-accent" />
            <span className="text-lg font-bold">Portfolio</span>
          </div>

          <div className="text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} · Desarrollado con React & Tailwind CSS
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/gagalvez"
              className="text-secondary hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/ggalvezv"
              className="text-secondary hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="text-secondary hover:text-primary transition-colors text-sm"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
