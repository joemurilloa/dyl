import React from 'react';

const Services = () => {
  // Servicios dentales
  const services = [
    {
      id: 1,
      title: "Limpieza Dental",
      description: "Eliminamos placa bacteriana y sarro, previniendo caries y mejorando la salud de tus encías.",
      icon: "🦷",
      color: "bg-pink-100"
    },
    {
      id: 2,
      title: "Blanqueamiento",
      description: "Devuelve el brillo natural a tu sonrisa con nuestros tratamientos de blanqueamiento seguros y efectivos.",
      icon: "✨",
      color: "bg-blue-100"
    },
    {
      id: 3,
      title: "Endodoncia",
      description: "Tratamiento especializado para salvar dientes con infecciones o daños en el nervio dental.",
      icon: "🔬",
      color: "bg-purple-100"
    },
    {
      id: 4,
      title: "Extracciones",
      description: "Procedimientos seguros y con mínimo dolor para la remoción de dientes dañados o problemáticos.",
      icon: "🩺",
      color: "bg-green-100"
    },
    {
      id: 5,
      title: "Odontopediatría",
      description: "Cuidamos la salud bucal de los más pequeños en un ambiente amigable y tranquilo.",
      icon: "👶",
      color: "bg-yellow-100"
    },
    {
      id: 6,
      title: "Implantes Dentales",
      description: "Soluciones permanentes para reemplazar dientes perdidos con resultados naturales.",
      icon: "🔧",
      color: "bg-red-100"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales utilizando las técnicas más avanzadas para garantizar tu comodidad y los mejores resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`${service.color} rounded-xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 animate-on-scroll`}
              style={{animation: `fadeInUp ${0.3 + service.id * 0.1}s ease forwards`, animationDelay: `${service.id * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              <button className="mt-4 text-pink-600 font-medium inline-flex items-center">
                Saber más 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;