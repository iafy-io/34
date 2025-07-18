import React from 'react';
import { ArrowLeft, Users, Award, Target, Shield, Clock, Brain, Star, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900">Sobre Nosotros</h1>
              <p className="text-gray-600">Conoce nuestra historia y misión</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-blue-600">WASABI TRADER S.L.</strong> nace en 2012 con una misión clara: 
                democratizar el acceso a las mejores tarifas energéticas del mercado español.
              </p>
              <p>
                Durante más de <strong className="text-blue-600">12 años</strong>, hemos ayudado a miles de 
                familias y empresas a optimizar sus costes energéticos, convirtiéndonos en referentes 
                del sector de la comparación energética.
              </p>
              <p>
                Nuestra evolución constante nos ha llevado a integrar <strong className="text-blue-600">
                inteligencia artificial avanzada</strong> en nuestros procesos, permitiendo análisis 
                más precisos y personalizados que nunca.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-xl font-black text-blue-900 mb-4">Nuestros Números</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black text-blue-600">12+</div>
                <div className="text-sm text-blue-700 font-bold">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-blue-600">100+</div>
                <div className="text-sm text-blue-700 font-bold">Asesores Expertos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-blue-600">50K+</div>
                <div className="text-sm text-blue-700 font-bold">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-blue-600">200€</div>
                <div className="text-sm text-blue-700 font-bold">Ahorro Medio/Año</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">Transparencia</h3>
              <p className="text-gray-700 text-sm">
                Información clara y honesta. Sin letra pequeña ni sorpresas en el proceso.
              </p>
            </div>
            
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">Compromiso</h3>
              <p className="text-gray-700 text-sm">
                Garantizamos ahorro real o devolvemos el tiempo invertido en el proceso.
              </p>
            </div>
            
            <div className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">Innovación</h3>
              <p className="text-gray-700 text-sm">
                Utilizamos IA avanzada para ofrecer las mejores comparativas del mercado.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Nuestra Misión</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              <strong className="text-blue-600">Democratizar el acceso a las mejores tarifas energéticas</strong> 
              mediante tecnología avanzada y asesoramiento experto, garantizando que cada familia y empresa 
              pueda optimizar sus costes energéticos de forma sencilla y transparente.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-500 fill-current" />
                ))}
              </div>
              <span className="text-blue-600 font-black">4.9/5 Satisfacción Cliente</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">¿Listo para Ahorrar?</h2>
          <p className="text-gray-700 mb-6">
            Únete a los miles de clientes que ya confían en nosotros
          </p>
          <Link 
            to="/#formulario" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors"
          >
            <Zap className="w-4 h-4 mr-2" />
            Empezar Comparación
          </Link>
        </div>
      </div>
    </div>
  );
}