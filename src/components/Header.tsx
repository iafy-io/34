import React, { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/wasabilogo.jpg" 
              alt="Wasabi Trader Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
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
            
            {/* Phone */}
            <a href="tel:+34621508300" className="flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-blue-600">621 50 83 00</span>
            </a>
            
            {/* CTA */}
            <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors">
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
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a href="tel:+34621508300" className="flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 rounded-lg font-bold">
                <Phone className="w-5 h-5" />
                <span>621 50 83 00</span>
              </a>
              
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
  );
}