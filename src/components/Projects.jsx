import React from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      description:
        "Plataforma completa para gestión de clientes, inventario y reportes financieros con dashboard interactivo.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 2,
      title: "API de Microservicios",
      description:
        "Arquitectura de microservicios con autenticación JWT, mensajería y base de datos distribuida.",
      technologies: ["Node.js", "Docker", "Redis", "Kubernetes"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 3,
      title: "Aplicación de Productividad",
      description:
        "Toolkit para gestión de tareas, calendario colaborativo y seguimiento de proyectos en tiempo real.",
      technologies: ["Next.js", "Firebase", "Tailwind", "PWA"],
      github: "https://github.com",
      live: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="mb-16">
        <h2 className="section-title">
          Proyectos <span className="text-accent">Destacados</span>
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto">
          Una selección de trabajos recientes que demuestran mi enfoque en
          soluciones escalables y código de calidad.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="card card-hover animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Folder className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface border border-gray-800 rounded-full text-sm text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface border border-gray-800 hover:border-accent transition-colors"
                  aria-label="Código fuente"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface border border-gray-800 hover:border-accent transition-colors"
                  aria-label="Ver demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
