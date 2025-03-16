import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // Efecto para manejar las animaciones al hacer scroll
  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollElements = document.querySelectorAll('.animate-on-scroll');
      
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    // Iniciar algunas animaciones
    setTimeout(handleScrollAnimation, 300);
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;