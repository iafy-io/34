import React from 'react';
import { ArrowLeft, Users, Award, Brain, Shield, Phone, Mail, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Carlos Rodríguez",
    position: "Director General",
    experience: "15+ años",
    specialty: "Estrategia Energética",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
  },
  {
    name: "María González",
    position: "Directora de IA",
    experience: "12+ años",
    specialty: "Inteligencia Artificial",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
  },
  {
    name: "Ana Martín",
    position: "Jefa de Asesores",
    experience: "10+ años",
    specialty: "Atención al Cliente",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
  }
];

const departments = [
  {
    name: "Equipo de IA",
    members: "25+ Especialistas",
    description: "Desarrollan y optimizan nuestros algoritmos de comparación",
    icon: Brain
  },
  {
    name: "Asesores Energéticos",
    members: "80+ Expertos",
    description: "Asesoramiento personalizado y seguimiento de clientes",
    icon: Users
  },
  {
    name: "Departamento Legal",
    members: "8+ Especialistas",
    description: "Garantizan cumplimiento normativo y protección de datos",
    icon: Shield
  },
  {
    name: "Atención al Cliente",
    members: "15+ Agentes",
    description: "Soporte 24/7 y resolución de incidencias",
    icon: Phone
  }
];

export default function OurTeam() {
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
              <h1 className="text-3xl font-black text-gray-900">Nuestro Equipo</h1>
              <p className="text-gray-600">Más de 100 expertos a tu servicio</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            El Equipo Más Experimentado
            <span className="block text-blue-600">del Sector Energético</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Más de <strong className="text-blue-600">100 profesionales especializados</strong> con 
            años de experiencia en el sector energético, tecnología e inteligencia artificial.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-black text-gray-900 mb-8 text-center">Equipo Directivo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200"
                />
                <h4 className="text-lg font-black text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-bold mb-2">{member.position}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{member.experience}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{member.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-black text-gray-900 mb-8 text-center">Nuestros Departamentos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-900">{dept.name}</h4>
                    <p className="text-blue-600 font-bold text-sm">{dept.members}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-black text-blue-900 mb-4">¿Por Qué Nuestro Equipo es Diferente?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-black text-blue-900 mb-2">Experiencia Comprobada</h4>
                <p className="text-blue-700 text-sm">
                  Más de 12 años en el sector energético con resultados demostrados
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-black text-blue-900 mb-2">Tecnología Avanzada</h4>
                <p className="text-blue-700 text-sm">
                  Especialistas en IA que desarrollan las mejores herramientas de comparación
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-black text-blue-900 mb-2">Atención Personalizada</h4>
                <p className="text-blue-700 text-sm">
                  Cada cliente tiene un asesor dedicado durante todo el proceso
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Únete a Nuestros Clientes Satisfechos</h3>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-blue-500 fill-current" />
              ))}
            </div>
            <span className="text-xl font-black text-gray-900">4.9/5</span>
            <span className="text-gray-600">+10,000 opiniones</span>
          </div>
          <p className="text-gray-700 mb-6">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor tarifa energética
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#formulario" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors"
            >
              Empezar Comparación
            </Link>
            <a 
              href="tel:+34621508300" 
              className="inline-flex items-center border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              621 50 83 00
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}