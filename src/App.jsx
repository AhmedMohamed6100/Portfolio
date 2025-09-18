
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import WorkEducation from '@/components/WorkEducation';
import WorkExperience from '@/components/WorkExperience';
import Services from '@/components/Services';
import Certificates from '@/components/Certificates';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'projects', 'skills', 'contact', 'WorkEducation', 'Certificates', 'WorkExperience','Services'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const offset = 200;

        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar activeSection={activeSection} scrollY={scrollY} />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>
          <section id="WorkEducation">
            <WorkEducation />
          </section>

          <section id="WorkExperience">
            <WorkExperience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>
          <section id="Services">
            <Services />
          </section>

          <section id="Certificates">
            <Certificates />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
