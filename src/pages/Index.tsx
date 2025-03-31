
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="py-6 bg-dark-400 text-center text-gray-400 text-sm">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Toheed Asghar. All Rights Reserved.</p>
            {/* <p className="mt-2">
              Built with <span className="text-glow-blue">❤</span> using React & Tailwind CSS
            </p> */}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
