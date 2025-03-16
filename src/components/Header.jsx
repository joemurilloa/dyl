import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Manejo del scroll para efectos de navegación
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-pink-600 text-3xl mr-2">🦷</span>
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">DyL</span>
          </a>
          
          {/* Menú de navegación - Versión escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-pink-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-pink-600 transition-colors">Servicios</a>
            <a href="#testimonios" className="text-gray-700 hover:text-pink-600 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-pink-600 transition-colors">Contacto</a>
            <a href="#cita" className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-all transform hover:scale-105 shadow-md">
              Agendar Cita
            </a>
          </nav>
          
          {/* Botón de menú móvil */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <a href="#inicio" className="block py-2 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Inicio</a>
            <a href="#servicios" className="block py-2 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Servicios</a>
            <a href="#testimonios" className="block py-2 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Testimonios</a>
            <a href="#contacto" className="block py-2 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600">Contacto</a>
            <a href="#cita" className="block py-2 px-4 text-pink-600 font-medium">Agendar Cita</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;