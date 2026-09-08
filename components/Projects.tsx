import React from 'react';
import { GitBranch as GithubIcon, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  highlights: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
  title: "Plataforma Web para Eventos & Bodas",
  category: "Full Stack Web Application",
  description: "Plataforma web interactiva orientada a la gestión de invitados, confirmación de asistencia (RSVP), logística del evento e integración de información en tiempo real.",
  tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  github: "https://github.com/cocagr/web-boda",
  demo: "https://www.bodalaurayleandro.com",
  highlights: [
    "Diseño UI/UX adaptativo pensado en la accesibilidad desde dispositivos móviles.",
    "Gestión dinámica de datos para confirmación de asistencia e información logística.",
    "Despliegue e integración continua orientados a alto rendimiento y velocidad de carga."
  ]
}
];

  return (
    <section id="proyectos" className="space-y-12">
      <div className="flex justify-between items-end border-b border-[#D8D2C7] pb-4">
        <h2 className="text-xs uppercase tracking-widest text-[#8C8177] font-semibold">01 / Proyectos Seleccionados</h2>
      </div>
      
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-12 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#8C8177] tracking-wider font-mono">{project.category}</span>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-[#8C8177] hover:text-[#2A2421] transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-[#8C8177] hover:text-[#2A2421] transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-[#2A2421] group-hover:text-[#63574F] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[#544B45] text-sm font-light leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <ul className="space-y-1 pt-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-[#63574F] font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#8C8177]"></span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#E3DDD3] border border-[#D0C7B8] text-[11px] text-[#423A35] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
