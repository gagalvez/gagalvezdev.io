import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Presente",
      location: "Remoto",
      description:
        "Lideré el desarrollo de aplicaciones web empresariales utilizando React y TypeScript.",
      technologies: ["React", "TypeScript", "GraphQL", "AWS"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      location: "Madrid, España",
      description:
        "Desarrollo de soluciones personalizadas para clientes internacionales.",
      technologies: ["Node.js", "React", "MongoDB", "Docker"],
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Startup XYZ",
      period: "2018 - 2019",
      location: "Barcelona, España",
      description:
        "Primera experiencia profesional desarrollando aplicaciones web.",
      technologies: ["JavaScript", "PHP", "MySQL", "jQuery"],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="mb-16">
        <h2 className="section-title">
          Experiencia <span className="text-accent">Profesional</span>
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto">
          Mi trayectoria en el desarrollo de software y soluciones tecnológicas.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800 hidden md:block"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-12 md:flex md:items-center md:gap-8 animate-fade-up`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Timeline dot - hidden on mobile */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10"></div>

            {/* Content */}
            <div
              className={`card md:w-1/2 ${
                index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-accent font-medium mb-3">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-secondary mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
