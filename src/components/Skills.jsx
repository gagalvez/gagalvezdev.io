import React from "react";
import {
  Cpu,
  Database,
  Palette,
  Server,
  Smartphone,
  Globe,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Cpu className="w-6 h-6 text-accent" />,
      skills: [
        { name: "React & Next.js", level: "Avanzado" },
        { name: "TypeScript", level: "Avanzado" },
        { name: "Tailwind CSS", level: "Experto" },
        { name: "State Management", level: "Avanzado" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-accent" />,
      skills: [
        { name: "Node.js", level: "Avanzado" },
        { name: "Python", level: "Intermedio" },
        { name: "PostgreSQL/MongoDB", level: "Avanzado" },
        { name: "REST/GraphQL APIs", level: "Experto" },
      ],
    },
    {
      title: "DevOps",
      icon: <Database className="w-6 h-6 text-accent" />,
      skills: [
        { name: "Docker & Kubernetes", level: "Intermedio" },
        { name: "AWS/GCP", level: "Intermedio" },
        { name: "CI/CD Pipelines", level: "Avanzado" },
        { name: "Linux Server", level: "Avanzado" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="mb-16">
        <h2 className="section-title">
          Habilidades <span className="text-accent">Técnicas</span>
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto">
          Conjunto de tecnologías y metodologías que aplico en el desarrollo de
          soluciones digitales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="card animate-fade-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">{category.icon}</div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0"
                >
                  <span className="text-primary">{skill.name}</span>
                  <span className="text-accent text-sm font-medium px-3 py-1 bg-accent/10 rounded-full">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Herramientas adicionales */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          Herramientas & Tecnologías
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "Git & GitHub",
            "Figma",
            "Jest & Testing",
            "Webpack",
            "Nginx",
            "Agile/Scrum",
            "SEO Optimization",
            "Security Best Practices",
          ].map((tool, index) => (
            <div
              key={tool}
              className="p-4 bg-surface border border-gray-800 rounded-lg text-center hover:border-accent transition-colors"
            >
              <span className="text-secondary">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
