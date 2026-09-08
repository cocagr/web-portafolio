'use client';

import React, { useState } from 'react';
import { GitBranch as GithubIcon, Mail, ExternalLink, ArrowUpRight, Send } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    motivo: 'Oferta laboral',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar un servicio como Formspree, EmailJS o tu API
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const projects = [
    {
      title: "Plataforma Gestión Multiplataforma",
      category: "Full Stack & Mobile",
      description: "Aplicación para la gestión de inventario en tiempo real con cliente web responsivo y arquitectura escalable.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/tu-usuario/proyecto-1",
      demo: "https://demo-proyecto.com",
      highlights: [
        "Diseño e implementación de REST API con autenticación JWT.",
        "Sincronización de datos en tiempo real entre interfaces."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#2A2421] font-sans selection:bg-[#2A2421] selection:text-[#EFECE6]">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#EFECE6]/80 backdrop-blur-md border-b border-[#D8D2C7] z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif italic text-xl tracking-tight text-[#2A2421]">Dev.</span>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-[#786E65] font-medium">
            <a href="#proyectos" className="hover:text-[#2A2421] transition-colors">Proyectos</a>
            <a href="#stack" className="hover:text-[#2A2421] transition-colors">Enfoque</a>
            <a href="#contacto" className="hover:text-[#2A2421] transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 space-y-36">

        {/* HERO SECTION */}
        <section className="space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#E3DDD3] border border-[#D0C7B8] text-[#544B45] text-xs tracking-wide">
            Técnico Superior DAM & Full Stack Developer
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#2A2421] leading-[1.15]">
            Desarrollo de software <br />
            <span className="italic font-light text-[#63574F]">simple, funcional y refinado.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-[#544B45] max-w-xl font-light leading-relaxed">
            Especializado en la creación de aplicaciones web y multiplataforma. Combino la solidez técnica de la formación en desarrollo con la agilidad moderna del ecosistema Full Stack.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <a 
              href="#contacto" 
              className="px-7 py-3.5 rounded-full bg-[#2A2421] text-[#EFECE6] text-xs uppercase tracking-widest hover:bg-[#423A35] transition-all shadow-sm"
            >
              Iniciar conversación
            </a>
            <a 
              href="#proyectos" 
              className="text-xs uppercase tracking-widest text-[#63574F] hover:text-[#2A2421] transition-colors flex items-center gap-1 group"
            >
              Explorar trabajo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* PROYECTOS */}
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

        {/* ENFOQUE / STACK TECNOLÓGICO */}
        <section id="stack" className="space-y-12">
          <div className="border-b border-[#D8D2C7] pb-4">
            <h2 className="text-xs uppercase tracking-widest text-[#8C8177] font-semibold">02 / Stack & Capacidades</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-[#2A2421]">Multiplataforma & Web</h3>
              <p className="text-xs text-[#63574F] font-light leading-relaxed">
                Desarrollo de interfaces intuitivas y adaptables a cualquier dispositivo.
              </p>
              <p className="text-xs font-mono text-[#423A35] pt-2">
                React, Next.js, React Native, Flutter, JavaScript (ES6+), Tailwind CSS.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-[#2A2421]">Backend & Arquitectura</h3>
              <p className="text-xs text-[#63574F] font-light leading-relaxed">
                Construcción de APIs robustas, autenticación segura y gestión de datos.
              </p>
              <p className="text-xs font-mono text-[#423A35] pt-2">
                Node.js, Express, Python (Flask/FastAPI), Java (POO), REST APIs.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-[#2A2421]">Bases de Datos & Tools</h3>
              <p className="text-xs text-[#63574F] font-light leading-relaxed">
                Modelado de datos relacional y no relacional junto a control de versiones.
              </p>
              <p className="text-xs font-mono text-[#423A35] pt-2">
                PostgreSQL, MongoDB, Firebase, Git, GitHub, Docker.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="pt-12 border-t border-[#D8D2C7] space-y-12">
          <div className="max-w-xl space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-[#8C8177] font-semibold">03 / Contacto</h2>
            <h3 className="text-3xl font-serif text-[#2A2421]">
              ¿Trabajamos juntos?
            </h3>
            <p className="text-[#544B45] font-light text-sm leading-relaxed">
              Completa el formulario o escríbeme directamente para discutir vacantes, nuevos proyectos o colaboraciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <form onSubmit={handleSubmit} className="md:col-span-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#63574F] font-medium block">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required 
                    value={formData.nombre} 
                    onChange={handleChange}
                    placeholder="Tu nombre" 
                    className="w-full bg-[#E3DDD3]/60 border border-[#D0C7B8] rounded-xl px-4 py-3 text-sm text-[#2A2421] placeholder-[#8C8177] focus:outline-none focus:border-[#2A2421] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#63574F] font-medium block">
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="tu@email.com" 
                    className="w-full bg-[#E3DDD3]/60 border border-[#D0C7B8] rounded-xl px-4 py-3 text-sm text-[#2A2421] placeholder-[#8C8177] focus:outline-none focus:border-[#2A2421] transition-colors"
                  />
                </div>
              </div>

              {/* Selector de Motivo */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#63574F] font-medium block">
                  Motivo de contacto
                </label>
                <select 
                  name="motivo" 
                  value={formData.motivo} 
                  onChange={handleChange}
                  className="w-full bg-[#E3DDD3]/60 border border-[#D0C7B8] rounded-xl px-4 py-3 text-sm text-[#2A2421] focus:outline-none focus:border-[#2A2421] transition-colors cursor-pointer"
                >
                  <option value="Oferta laboral">Oferta laboral</option>
                  <option value="Proyecto freelance">Proyecto freelance</option>
                  <option value="Networking">Networking</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#63574F] font-medium block">
                  Mensaje
                </label>
                <textarea 
                  name="mensaje" 
                  required 
                  rows={4} 
                  value={formData.mensaje} 
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..." 
                  className="w-full bg-[#E3DDD3]/60 border border-[#D0C7B8] rounded-xl px-4 py-3 text-sm text-[#2A2421] placeholder-[#8C8177] focus:outline-none focus:border-[#2A2421] transition-colors resize-none"
                />
              </div>

              {/* Botón de envío */}
              <button 
                type="submit" 
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2A2421] text-[#EFECE6] text-xs uppercase tracking-widest hover:bg-[#423A35] transition-all shadow-sm"
              >
                Enviar mensaje
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Datos Directos */}
            <div className="md:col-span-4 space-y-6 pt-2">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#8C8177] block font-semibold">Contacto Directo</span>
                <a href="mailto:tu-email@dominio.com" className="text-sm text-[#2A2421] hover:underline block font-mono">
                  tu-email@dominio.com
                </a>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#8C8177] block font-semibold">Redes</span>
                <div className="flex gap-4 text-[#786E65]">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#2A2421] transition-colors flex items-center gap-1 text-xs">
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#2A2421] transition-colors flex items-center gap-1 text-xs">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[#D8D2C7] text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-[#8C8177] font-light">
        <p>© {new Date().getFullYear()} — Diseñado & Desarrollado con simplicidad.</p>
        <p className="pt-2 sm:pt-0">DAM + Full Stack Bootcamp</p>
      </footer>

    </div>
  );
}
