import React from 'react';
import { Shield, Clock, Users, Brain, Star, ArrowRight, Zap, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-black shadow-blue-glow">
                <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                AHORRO GARANTIZADO
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">Compara y</span>
                <span className="block gradient-text text-glow">
                  Ahorra
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 font-bold mt-3 lg:mt-4">
                  en Luz y Gas
                </span>
              </h1>
              
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">
                  <span className="text-blue-600 font-black text-lg sm:text-xl lg:text-2xl xl:text-3xl text-glow">+12 años de experiencia</span> y 
                  <span className="text-blue-600 font-black text-lg sm:text-xl lg:text-2xl xl:text-3xl text-glow"> +100 asesores expertos</span> con IA avanzada.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-bold">
                  🚀 Proceso ultra-rápido • 🤖 Con inteligencia artificial • 🛡️ Totalmente seguro
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="card-impact rounded-2xl p-4 lg:p-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-lg lg:text-xl text-gray-900">5 MINUTOS</p>
                    <p className="text-blue-600 font-bold text-sm lg:text-base">Sin llamadas</p>
                  </div>
                </div>
              </div>
              
              <div className="card-impact rounded-2xl p-4 lg:p-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                    <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-lg lg:text-xl text-gray-900">CON IA</p>
                    <p className="text-blue-600 font-bold text-sm lg:text-base">Avanzada</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <a href="#formulario" className="btn-primary text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl flex items-center justify-center space-x-2 lg:space-x-3">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                <span>COMPARAR GRATIS</span>
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#formulario" className="border-3 border-blue-600 text-blue-600 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl hover:bg-blue-50 transition-colors text-center">
                EMPEZAR FORMULARIO
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 text-base lg:text-lg">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-900 font-black text-lg lg:text-xl">4.9/5</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-black text-base lg:text-lg">✅ 100% Gratuito</span>
              <div className="hidden sm:block w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-black text-base lg:text-lg">⚡ Ultra-rápido</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="card-impact rounded-3xl p-6 lg:p-10 shadow-blue-intense">
              <div className="space-y-6 lg:space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-base lg:text-lg font-black mb-4 lg:mb-6">
                    <Brain className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    IA AVANZADA
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2 lg:mb-3">
                    Descubre tu Ahorro
                    <span className="block gradient-text text-glow">Personalizado</span>
                  </h3>
                </div>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="text-center space-y-4 lg:space-y-6">
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <div className="flex items-center justify-center space-x-2 lg:space-x-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 lg:p-4 rounded-2xl">
                        <span className="text-xl lg:text-2xl">⚡</span>
                        <span className="font-black text-sm lg:text-base">Luz</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 lg:space-x-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 lg:p-4 rounded-2xl">
                        <span className="text-xl lg:text-2xl">🔥</span>
                        <span className="font-black text-sm lg:text-base">Gas</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 lg:p-6 border-2 border-blue-200">
                      <p className="text-gray-700 font-bold text-base lg:text-lg">
                        Comparamos <span className="text-blue-600 font-black text-lg lg:text-xl text-glow">TODAS las tarifas</span>
                      </p>
                      <div className="flex items-center justify-center space-x-3 lg:space-x-4 mt-3 lg:mt-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600 font-bold text-sm lg:text-base">Ahorro medio</span>
                        </div>
                        <div className="text-xl lg:text-2xl font-black text-blue-600">200€/año</div>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href="#formulario"
                    className="w-full btn-primary text-white py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl flex items-center justify-center space-x-2 lg:space-x-3"
                  >
                    <Target className="w-5 h-5 lg:w-6 lg:h-6" />
                    <span>CALCULAR AHORRO</span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}