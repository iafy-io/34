import React from 'react';
import { Phone, MessageSquare, ArrowRight, Sparkles, Clock, Shield, Award, Target, Brain, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-black mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AHORRO GARANTIZADO
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            ¿Listo para empezar
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              a ahorrar?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Únete a miles de clientes que ya disfrutan de tarifas más económicas. 
            <span className="text-blue-600 font-black"> Proceso 100% online</span> sin complicaciones.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3">
                Comparación Online
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm">
                Comparativa personalizada en <span className="text-blue-600 font-black">5 minutos</span>
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                <div className="flex items-center justify-center text-blue-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-bold">Ultra-rápido</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="font-bold">100% gratuito</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Brain className="w-4 h-4 mr-2" />
                  <span className="font-bold">Con IA</span>
                </div>
              </div>
              
              <a href="#formulario" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-black text-sm sm:text-base hover:from-blue-400 hover:to-blue-500 transition-colors flex items-center justify-center space-x-2 shadow-lg">
                <span>EMPEZAR AHORA</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center mt-6 md:mt-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3">
                Completa el Formulario
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm">
                <span className="text-blue-600 font-black">Proceso rápido</span> y personalizado
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                <div className="flex items-center justify-center text-blue-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-bold">5 minutos</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Brain className="w-4 h-4 mr-2" />
                  <span className="font-bold">Con IA</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Target className="w-4 h-4 mr-2" />
                  <span className="font-bold">Ahorro garantizado</span>
                </div>
              </div>
              
              <a href="#formulario" className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-xl font-black text-sm sm:text-base hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>IR AL FORMULARIO</span>
              </a>
            </div>
          </div>
        </div>
        
        <a href="#formulario" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-black text-base shadow-lg hover:from-blue-400 hover:to-blue-500 transition-colors">
          <Shield className="w-5 h-5 mr-2" />
          EMPEZAR AHORA GRATIS
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}