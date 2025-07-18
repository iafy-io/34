import React, { useState, useEffect } from 'react';
import { Menu, Phone, X, Shield, Star, ChevronDown } from 'lucide-react';
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-blue-intense' : 'bg-white/90 backdrop-blur-md shadow-lg'
    }`}>
      {/* Barra superior impactante - OPTIMIZADA PARA DESKTOP */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-2 lg:py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 lg:space-x-6 text-center">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 lg:px-6 py-1 lg:py-2">
              <Shield className="w-4 h-4 lg:w-6 lg:h-6 animate-pulse" />
              <span className="font-black text-xs sm:text-sm lg:text-xl tracking-wide">AHORRO GARANTIZADO</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-6 text-xs lg:text-sm font-bold">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                <span>+12 años experiencia</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                <span>+100 asesores expertos</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-ping"></span>
                <span>IA avanzada</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal - OPTIMIZADO PARA DESKTOP */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-0.5 lg:py-1">
            {/* Logo optimizado para desktop */}
            <Link to="/" className="flex items-center space-x-3 lg:space-x-4 hover-lift-intense">
              <div className="flex items-center justify-center">
                <img 
                  src="/wasabilogo.jpg" 
                  alt="Wasabi Trader Logo" 
                  className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </Link>
            
            {/* Navegación desktop - MEJORADA */}
            <div className="hidden xl:flex items-center space-x-6 lg:space-x-8">
              <nav className="flex items-center space-x-6 lg:space-x-8">
                <a href="#comparador" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm lg:text-base">
                  Comparador IA
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#testimonios" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm lg:text-base">
                  Testimonios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/sobre-nosotros" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm lg:text-base">
                  Sobre Nosotros
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contacto" className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm lg:text-base">
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
                
              {/* Teléfono optimizado para desktop */}
              <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 px-4 lg:px-6 py-2 lg:py-3 rounded-xl hover-lift-intense shine-effect">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <div>
                  <a href="tel:+34621508300" className="font-black text-base lg:text-lg text-gray-900 hover:text-blue-600 transition-colors">
                    621 50 83 00
                  </a>
                  <p className="text-xs font-bold text-blue-600">Llamada gratuita</p>
                </div>
              </div>
              
              {/* CTA optimizado para desktop */}
              <a href="#formulario" className="btn-primary text-white px-4 lg:px-8 py-2 lg:py-3 rounded-xl font-black text-sm lg:text-lg hover-lift-intense shine-effect whitespace-nowrap">
                EMPEZAR FORMULARIO
              </a>
            </div>
            
            {/* Navegación tablet */}
            <div className="hidden lg:flex xl:hidden items-center space-x-4">
              <a href="tel:+34621508300" className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>621 50 83 00</span>
              </a>
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-black hover:from-blue-400 hover:to-blue-500 transition-colors">
                FORMULARIO
              </a>
            </div>
            
            {/* Botón menú móvil */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white hover-lift-intense shadow-blue-glow"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-blue-intense animate-fade-in-up">
          <div className="px-6 py-6 space-y-6">
            <a 
              href="#comparador" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              🤖 Comparador IA
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              ⭐ Testimonios
            </a>
            <Link 
              to="/sobre-nosotros" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              🏢 Sobre Nosotros
            </Link>
            <Link 
              to="/contacto" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
            >
              📞 Contacto
            </Link>
            
            <div className="pt-6 border-t border-blue-200">
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl py-4 mb-6 shadow-blue-glow">
                <Phone className="w-6 h-6 animate-pulse" />
                <div>
                  <a href="tel:+34621508300" className="font-black text-xl">621 50 83 00</a>
                  <p className="text-blue-200 text-sm font-bold">Llamada gratuita</p>
                </div>
              </div>
              
              <a 
                href="#formulario" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full btn-primary text-white py-4 rounded-xl font-black text-xl text-center shine-effect"
              >
                🚀 EMPEZAR FORMULARIO
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}