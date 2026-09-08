'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { GitBranch as GithubIcon, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    motivo: 'Oferta laboral',
    mensaje: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
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

          <button 
            type="submit" 
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2A2421] text-[#EFECE6] text-xs uppercase tracking-widest hover:bg-[#423A35] transition-all shadow-sm"
          >
            Enviar mensaje
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="md:col-span-4 space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#8C8177] block font-semibold">Contacto Directo</span>
            <a href="mailto:joseignaciocastrococa@gmail.com" className="text-sm text-[#2A2421] hover:underline block font-mono">
              joseignaciocastrococa@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#8C8177] block font-semibold">Redes</span>
            <div className="flex gap-4 text-[#786E65]">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#2A2421] transition-colors flex items-center gap-1 text-xs">
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a href="mailto:joseignaciocastrococa@gmail.com" className="hover:text-[#2A2421] transition-colors flex items-center gap-1 text-xs">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
