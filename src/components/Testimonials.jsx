import React from 'react';

const Testimonials = () => {
  // Testimonios de pacientes
  const testimonials = [
    {
      id: 1,
      name: "María García",
      text: "El mejor consultorio dental al que he ido. El Dr. atendió todas mis preocupaciones y el tratamiento fue menos doloroso de lo que esperaba.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Medina",
      text: "Mi hija de 5 años adora venir a esta clínica. El personal es muy amable y siempre la hacen sentir cómoda durante sus revisiones.",
      rating: 5
    },
    {
      id: 3,
      name: "Laura Sánchez",
      text: "Excelente servicio. Mi blanqueamiento quedó perfecto y el resultado duró más de lo que esperaba.",
      rating: 4
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-on-scroll">Opiniones de Nuestros Pacientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Lo que dicen nuestros pacientes sobre su experiencia en DyL.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl border-t-4 border-pink-500 animate-on-scroll"
              style={{animation: `slideInRight ${0.4 + testimonial.id * 0.2}s ease forwards`, animationDelay: `${testimonial.id * 0.1}s`}}
            >
              <div className="flex justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
        
        {/* Redes sociales y reseñas */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-700 mb-6 animate-on-scroll">También nos encuentras en:</p>
          <div className="flex justify-center space-x-4 animate-on-scroll">
            <a href="#" className="bg-blue-500 text-white p-3 rounded-full transition-all hover:bg-blue-600 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="bg-pink-500 text-white p-3 rounded-full transition-all hover:bg-pink-600 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="bg-blue-400 text-white p-3 rounded-full transition-all hover:bg-blue-500 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;