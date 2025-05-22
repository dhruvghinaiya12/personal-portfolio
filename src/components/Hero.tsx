import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
                <span className="block mb-2">Hi, I'm</span>
                <span className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Dhruv Ghinaiya
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mt-4">
                MERN Stack Web Developer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl animate-fade-in-delay-1">
              Building scalable and innovative web applications with expertise in both frontend and backend technologies. Passionate about problem-solving and creating intuitive user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6 animate-fade-in-delay-2">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              
              <a 
                href="#projects" 
                className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <FileText size={18} />
                View Projects
              </a>
            </div>
            
            <div className="flex gap-5 mt-6 animate-fade-in-delay-3">
              <a 
                href="https://github.com/dhruvghinaiya12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruv-ghinaiya12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:dhruvghinaiya12@gmail.com" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;