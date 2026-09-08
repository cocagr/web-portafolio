import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#2A2421] font-sans selection:bg-[#2A2421] selection:text-[#EFECE6]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 space-y-36">
        <Hero />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[#D8D2C7] text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-[#8C8177] font-light">
        <p>© {new Date().getFullYear()}</p>
        <p className="pt-2 sm:pt-0">DAM + Full Stack Bootcamp</p>
      </footer>
    </div>
  );
}
