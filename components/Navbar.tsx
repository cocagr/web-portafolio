import React from 'react';

export default function Navbar() {
  return (
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
  );
}
