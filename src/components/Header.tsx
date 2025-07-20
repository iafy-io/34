import React, { useState, useEffect } from 'react';
import { Menu, Phone, X, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barra azul superior */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="font-bold">AHORRO GARANTIZADO</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="font-bold">Proceso en 5 minutos</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+34621508300" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-bold">621 50 83 00</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/wasabilogo copy copy copy copy copy.jpg" 
                alt="Wasabi Trader Logo" 
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <a href="#comparador" className="font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  Comparador
                </a>
                <a href="#testimonios" className="font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  Testimonios
                </a>
                <Link to="/sobre-nosotros" className="font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  Nosotros
                </Link>
                <Link to="/contacto" className="font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  Contacto
                </Link>
              </nav>
              
              {/* CTA */}
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors">
                EMPEZAR
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#comparador" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block text-gray-700 font-bold hover:text-blue-600 transition-colors"
              >
                Comparador
              </a>
              <a 
                href="#testimonios" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block text-gray-700 font-bold hover:text-blue-600 transition-colors"
              >
                Testimonios
              </a>
              <Link 
                to="/sobre-nosotros" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block text-gray-700 font-bold hover:text-blue-600 transition-colors"
              >
                Nosotros
              </Link>
              <Link 
                to="/contacto" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block text-gray-700 font-bold hover:text-blue-600 transition-colors"
              >
                Contacto
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="#formulario" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-bold text-center"
                >
                  EMPEZAR FORMULARIO
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}