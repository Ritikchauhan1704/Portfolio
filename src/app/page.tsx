"use client"
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectCarousel from "@/components/ProjectCarousel";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation - Simple Floating */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-bold tracking-tighter pointer-events-auto">
          RC<span className="text-zinc-600">.</span>
        </div>
        <div className="pointer-events-auto bg-black/50 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-2 hidden md:flex gap-6 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <ProjectCarousel />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}