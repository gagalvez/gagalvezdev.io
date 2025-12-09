import React, { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Gabriel Gálvez";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2 group">
            <Code className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold">
              <span className="text-white">
                {displayText.substring(0, 7)}
              </span>
              <span className="text-accent">
                {displayText.substring(7)}
              </span>
              <span className="animate-pulse">|</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary transition-colors text-sm font-medium "
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-secondary hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-secondary hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
