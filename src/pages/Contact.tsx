import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const sendWhatsApp = () => {
    const message = `Hola, me gustaría obtener información sobre sus servicios de comparación energética.

Mis datos de contacto:
- Nombre: ${formData.name || 'No especificado'}
- Email: ${formData.email || 'No especificado'}
- Teléfono: ${formData.phone || 'No especificado'}

Consulta: ${formData.message || 'Solicitud de información general'}`;

    const whatsappUrl = `https://wa.me/34621508300?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl text-center mx-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-gray-700 mb-6">
            Hemos recibido tu consulta. Nuestro equipo se pondrá en contacto contigo muy pronto.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

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
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900">Contacto</h1>
              <p className="text-gray-600">Estamos aquí para ayudarte</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Información de Contacto</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">Teléfono</h3>
                  <a href="tel:+34621508300" className="text-blue-600 font-bold text-lg hover:underline">
                    621 50 83 00
                  </a>
                  <p className="text-gray-600 text-sm">Llamada gratuita</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">Email</h3>
                  <a href="mailto:energiaverdewasabi@gmail.com" className="text-blue-600 font-bold hover:underline">
                    energiaverdewasabi@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm">Respuesta en 24h</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">Dirección</h3>
                  <p className="text-gray-700 font-bold">POLÍGONO CAMPOLLANO</p>
                  <p className="text-gray-700">CALLE A, 7. 02006, ALBACETE</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">Horario</h3>
                  <p className="text-gray-700 font-bold">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-600 text-sm">Atención telefónica extendida</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-black text-green-900 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Directo
              </h3>
              <p className="text-green-700 mb-4 text-sm">
                Para consultas rápidas, contáctanos directamente por WhatsApp
              </p>
              <button
                onClick={sendWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Abrir WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Asunto
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Seleccionar asunto...</option>
                  <option value="comparacion">Comparación de tarifas</option>
                  <option value="cambio">Cambio de compañía</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="informacion">Información general</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 font-bold text-sm">Privacidad Garantizada</span>
              </div>
              <p className="text-blue-700 text-xs">
                Tus datos están protegidos según el RGPD. Solo los utilizamos para responder a tu consulta.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-black text-gray-900 mb-4">¿Prefieres Empezar Directamente?</h3>
          <p className="text-gray-700 mb-6">
            Utiliza nuestro comparador inteligente y obtén tu análisis personalizado en 5 minutos
          </p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-blue-500 fill-current" />
              ))}
            </div>
            <span className="text-blue-600 font-black">4.9/5 - +10,000 clientes satisfechos</span>
          </div>
          <Link 
            to="/#formulario" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-colors"
          >
            Empezar Comparación Gratuita
          </Link>
        </div>
      </div>
    </div>
  );
}