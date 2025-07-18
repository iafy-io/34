import React from 'react';
import { Star, Quote, CheckCircle, Award, TrendingUp, Shield } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    location: "Madrid",
    rating: 5,
    comment: "En menos de 5 minutos tenía mi comparativa personalizada. Me ahorro 25€ al mes sin complicaciones. Los asesores son verdaderos expertos en el sector con años de experiencia.",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    savings: "300€/año",
    highlight: true
  },
  {
    name: "Carlos Ruiz",
    location: "Barcelona",
    rating: 5,
    comment: "Los asesores son verdaderos expertos en el sector. Me ayudaron a encontrar la mejor tarifa para mi empresa. Increíble servicio con años de experiencia.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    savings: "450€/año"
  },
  {
    name: "Ana Martín",
    location: "Valencia",
    rating: 5,
    comment: "Increíble lo fácil que fue. La IA realmente encontró opciones que no conocía. Años de experiencia se notan en cada detalle del proceso.",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    savings: "180€/año"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-black mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            CLIENTES SATISFECHOS
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Miles de clientes ya
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              confían en nosotros
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            <span className="text-blue-600 font-black">+12 años ayudando</span> a familias y empresas con 
            nuestro <span className="text-blue-600 font-black">equipo de +100 expertos</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-blue-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                  ))}
                </div>
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-black">
                  {testimonial.savings}
                </div>
              </div>
              
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-500 mb-3" />
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{testimonial.comment}</p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-blue-200"
                />
                <div>
                  <p className="font-black text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-blue-600 font-bold text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center bg-white border border-blue-200 rounded-xl px-4 sm:px-6 py-3 shadow-sm">
            <div className="flex space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-blue-500 fill-current" />
              ))}
            </div>
            <span className="font-black text-gray-900 text-lg sm:text-xl">4.9/5</span>
            <span className="text-gray-700 ml-2 sm:ml-4 font-bold text-xs sm:text-sm">+10,000 opiniones</span>
          </div>
        </div>
      </div>
    </section>
  );
}