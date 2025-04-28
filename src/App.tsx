import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './utils/ThemeContext';

// Add grid pattern and animations
const styles = `
  .bg-grid-pattern {
    background-size: 40px 40px;
    background-image:
      linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  }
  
  .dark .bg-grid-pattern {
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  }
  
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.8s ease-out forwards;
  }
  
  .animate-fade-in-delay-1 {
    opacity: 0;
    animation: fadeIn 0.8s ease-out 0.2s forwards;
  }
  
  .animate-fade-in-delay-2 {
    opacity: 0;
    animation: fadeIn 0.8s ease-out 0.4s forwards;
  }
  
  .animate-fade-in-delay-3 {
    opacity: 0;
    animation: fadeIn 0.8s ease-out 0.6s forwards;
  }
  
  /* Scroll animations */
  .scroll-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }
  
  .scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PortfolioApp = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.scroll-animate').forEach(
      el => observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <style>{styles}</style>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <div className="scroll-animate">
          <About />
        </div>
        <div className="scroll-animate">
          <Skills />
        </div>
        <div className="scroll-animate">
          <Projects />
        </div>
        <div className="scroll-animate">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;