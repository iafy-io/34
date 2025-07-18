import React from 'react';
import { Shield, Clock, Users, Brain, Award, HeadphonesIcon, Zap, Target, CheckCircle, Star, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "AHORRO GARANTIZADO",
    description: "Te garantizamos que encontrarás una tarifa mejor que la actual o te devolvemos el tiempo invertido. Compromiso total con tu ahorro.",
    stats: "100% Garantía",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    icon: Brain,
    title: "COMPARATIVAS CON IA",
    description: "Nuestro sistema de inteligencia artificial analiza miles de tarifas en tiempo real para encontrar la mejor opción personalizada para ti.",
    stats: "IA Avanzada",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    icon: Clock,
    title: "EN MENOS DE 5 MINUTOS",
    description: "SIN LARGAS LLAMADAS ni procesos complicados. Obtienes tu comparativa personalizada al instante con nuestra tecnología.",
    stats: "Ultra Rápido",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    icon: Users,
    title: "EQUIPO DE +100 ASESORES",
    description: "EXPERTOS EN EL SECTOR CON AÑOS DE EXPERIENCIA te acompañan en todo el proceso de cambio y optimización energética.",
    stats: "+100 Expertos",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    icon: Award,
    title: "12+ AÑOS DE EXPERIENCIA",
    description: "Líderes en el sector energético con más de una década ayudando a familias y empresas a optimizar sus costes energéticos.",
    stats: "Líderes Sector",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    icon: HeadphonesIcon,
    title: "ATENCIÓN PERSONALIZADA",
    description: "Soporte gratuito premium antes, durante y después de cambiar tu tarifa energética. Seguimiento completo de tu ahorro.",
    stats: "Soporte 24/7",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  }
];

const stats = [
  { number: "12+", label: "Años de Experiencia", icon: Award, color: "text-yellow-600" },
  { number: "100+", label: "Asesores Expertos", icon: Users, color: "text-blue-600" },
  { number: "5", label: "Minutos Proceso", icon: Clock, color: "text-orange-600" },
  { number: "200€", label: "Ahorro Medio/Año", icon: Target, color: "text-green-600" }
];

export default function Features() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-black mb-6 lg:mb-8">
            <Zap className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
            LÍDERES DEL SECTOR
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="card-impact rounded-2xl p-4 lg:p-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-black text-gray-900 mb-1 lg:mb-2">{stat.number}</div>
                <div className="text-gray-700 font-bold text-xs lg:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 lg:mb-6">
            ¿Por qué elegir
            <span className="block gradient-text">
              Wasabi Trader?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            <span className="text-blue-600 font-black text-xl lg:text-2xl">EXPERTOS CON AÑOS DE EXPERIENCIA</span> utilizando IA avanzada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-impact rounded-2xl p-6 lg:p-8">
              <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 shadow-lg`}>
                <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              
              <h3 className="text-lg lg:text-xl font-black text-gray-900 mb-3 lg:mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">{feature.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-600">
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  <span className="font-bold text-sm lg:text-base">Incluido</span>
                </div>
                <div className={`${feature.bgColor} ${feature.borderColor} border-2 text-gray-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-black`}>
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 lg:p-10 text-white">
            <div className="flex items-center justify-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
              <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current" />
              <h3 className="text-2xl lg:text-3xl font-black">¡Únete a miles de clientes satisfechos!</h3>
              <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current" />
            </div>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-blue-100">
              Más de 10,000 familias ya ahorran con nosotros
            </p>
            <a href="#formulario" className="inline-flex items-center bg-white text-blue-700 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black text-lg lg:text-xl shadow-lg hover:bg-gray-50 transition-colors">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
              AHORRO GARANTIZADO
              <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}