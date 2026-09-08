import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
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
  );
}
