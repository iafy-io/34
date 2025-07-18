import React, { useState } from 'react';
import { Zap, Flame, Check, ArrowRight, Sparkles, Target, TrendingUp, Brain, Shield, Clock, Award } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section id="comparador" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-black mb-6">
            <Brain className="w-4 h-4 mr-2" />
            COMPARATIVAS CON IA
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Comparador Inteligente
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              de Tarifas
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Sistema con <span className="text-blue-600 font-black">IA que analiza todas las ofertas</span> 
            en <span className="text-blue-600 font-black">menos de 5 minutos</span>
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4">
                  ¿Qué quieres comparar?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl">
                    <Zap className="w-5 h-5" />
                    <span className="font-black text-sm">Electricidad</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl">
                    <Flame className="w-5 h-5" />
                    <span className="font-black text-sm">Gas Natural</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 border border-blue-200">
                <h4 className="text-base sm:text-lg font-black text-gray-900 mb-4">
                  ¿Qué analizamos por ti?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-bold">Todas las tarifas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-bold">Tu consumo actual</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-bold">Ofertas especiales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-bold">Condiciones</span>
                  </div>
                </div>
              </div>
              
              <a href="#formulario" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:from-blue-400 hover:to-blue-500 transition-colors flex items-center justify-center space-x-2 shadow-lg">
                <span>COMPARAR AHORA</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-blue-200 mt-6 lg:mt-0">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-2">
                  AHORRO GARANTIZADO
                </h4>
                <p className="text-gray-700 font-bold text-sm sm:text-base">
                  Con nuestro comparador inteligente
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-bold text-xs sm:text-sm">Análisis con IA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-bold text-xs sm:text-sm">Tiempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-bold text-xs sm:text-sm">Asesoramiento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-bold text-xs sm:text-sm">Gestión completa</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <p className="text-blue-700 font-black text-xs sm:text-sm">
                    Ahorro medio: 200€/año
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}