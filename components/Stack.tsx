import React from 'react';

export default function Stack() {
  return (
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
  );
}
