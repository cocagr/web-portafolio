import React from 'react';
import Logo from '../media/Logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#EFECE6]/80 backdrop-blur-md border-b border-[#D8D2C7] z-50">
      <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={typeof Logo === 'string' ? Logo : Logo.src} 
            alt="JCastro Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </a>
        <div className="flex gap-8 text-xs uppercase tracking-widest text-[#786E65] font-medium">
          <a href="#proyectos" className="hover:text-[#2A2421] transition-colors">Proyectos</a>
          <a href="#stack" className="hover:text-[#2A2421] transition-colors">Enfoque</a>
          <a href="#contacto" className="hover:text-[#2A2421] transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
