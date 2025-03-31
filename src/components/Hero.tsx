
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding pt-28"
    >
      <div className="container mx-auto">
        <div className="flex flex-col max-w-4xl">
          <h1 className="text-lg font-medium text-glow-blue mb-3 opacity-90">
            Hello, I'm
          </h1>
          
          <h2 className="heading-xl text-white mb-6">
            <span className="block">Toheed Asghar</span>
            <span className="block text-glow-blue animate-pulse-glow">.NET Developer & ML Enthusiast</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            I build exceptional digital experiences with a focus on robust backend architectures 
            and innovative machine learning solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#Contact" 
              className="px-6 py-3 bg-glow-blue text-white rounded-lg font-medium hover:bg-glow-blue/90 transition-all shadow-glow-blue"
            >
              Connect with me
            </a>
            
            <a 
              href="#projects" 
              className="px-6 py-3 bg-dark-100 text-white rounded-lg font-medium border border-glow-blue/30 hover:border-glow-blue transition-all"
            >
              View my work
            </a>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/toheedasghar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-glow-blue transition-colors"
              aria-label="Github"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/toheed-asghar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-glow-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:toheedasghar@hotmail.com" 
              className="text-gray-400 hover:text-glow-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-glow-blue transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-glow-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-60 h-60 bg-glow-purple/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
